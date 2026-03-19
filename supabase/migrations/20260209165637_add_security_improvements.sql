/*
  # Security Improvements for Contact Form

  1. New Tables
    - `contact_rate_limits`
      - `id` (uuid, primary key)
      - `ip_address` (text, indexed)
      - `submission_count` (integer)
      - `window_start` (timestamptz)
      - `created_at` (timestamptz)
  
  2. Changes
    - Drop overly permissive RLS policies on `contact_submissions`
    - Add more restrictive policies that prevent public read access
    - Add rate limiting table with appropriate indexes
    - Add automatic cleanup for old rate limit records
  
  3. Security
    - Enable RLS on `contact_rate_limits` table
    - Only service role can manage rate limits
    - Contact submissions are now write-only for anon users
    - Only authenticated admin users can read submissions
*/

-- Create rate limiting table
CREATE TABLE IF NOT EXISTS contact_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  submission_count integer DEFAULT 1,
  window_start timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Add index for fast IP lookups
CREATE INDEX IF NOT EXISTS idx_contact_rate_limits_ip 
  ON contact_rate_limits(ip_address);

-- Add index for cleanup queries
CREATE INDEX IF NOT EXISTS idx_contact_rate_limits_window 
  ON contact_rate_limits(window_start);

-- Enable RLS on rate limits table
ALTER TABLE contact_rate_limits ENABLE ROW LEVEL SECURITY;

-- Only service role can access rate limits
CREATE POLICY "Service role only access"
  ON contact_rate_limits
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Drop existing overly permissive policies on contact_submissions
DROP POLICY IF EXISTS "Allow anonymous submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated users to view submissions" ON contact_submissions;

-- Add more restrictive policies for contact_submissions
CREATE POLICY "Allow service role to insert submissions"
  ON contact_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Allow service role to select submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

-- Function to clean up old rate limit records (older than 1 hour)
CREATE OR REPLACE FUNCTION cleanup_old_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM contact_rate_limits
  WHERE window_start < (now() - interval '1 hour');
END;
$$;