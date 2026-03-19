/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `phone` (text) - Phone number of the person
      - `city` (text, optional) - City where the service is needed
      - `service_type` (text, optional) - Type of service requested
      - `message` (text, optional) - Message/description from the user
      - `created_at` (timestamptz) - Timestamp when the submission was created
      - `email_sent` (boolean) - Whether an email notification was sent
      - `ip_address` (text, optional) - IP address of the submitter for spam prevention
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Only authenticated users (admin) can read submissions
    - Anyone can insert (public form submission)
    
  3. Indexes
    - Index on created_at for efficient querying by date
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  city text,
  service_type text,
  message text,
  created_at timestamptz DEFAULT now(),
  email_sent boolean DEFAULT false,
  ip_address text
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can read submissions (admin access)
CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for efficient date-based queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);
