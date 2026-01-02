export function Video({ src, className }: { src: string; className?: string }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
      style={{
        pointerEvents: 'none',
        objectFit: 'cover',
      }}
      {...({ 'webkit-playsinline': 'true' } as React.VideoHTMLAttributes<HTMLVideoElement>)}
      {...({ 'x5-playsinline': 'true' } as React.VideoHTMLAttributes<HTMLVideoElement>)}
      {...({ disablePictureInPicture: true } as React.VideoHTMLAttributes<HTMLVideoElement>)}
      {...({ disableRemotePlayback: true } as React.VideoHTMLAttributes<HTMLVideoElement>)}
    />
  );
}
