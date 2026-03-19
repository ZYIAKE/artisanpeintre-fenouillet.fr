interface GoogleMapProps {
  query: string;
  height?: string;
  className?: string;
}

export default function GoogleMap({ query, height = '300px', className = '' }: GoogleMapProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      <iframe
        title="Google Maps"
        src={`https://www.google.com/maps?q=${query}&output=embed&hl=fr`}
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className={`absolute inset-0 w-full h-full ${className}`}
      />
    </div>
  );
}
