'use client';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className }: VideoPlayerProps) {
  return (
    <video
      src={src}
      controls
      className={className}
      preload="metadata"
      onError={(e) => {
        const video = e.target as HTMLVideoElement;
        video.style.display = 'none';
        const parent = video.parentElement;
        if (parent && !parent.querySelector('.video-error')) {
          const errorDiv = document.createElement('div');
          errorDiv.className = 'video-error flex items-center justify-center h-full text-gray-400';
          errorDiv.innerHTML = '<p>Video will be available soon. Please check back later.</p>';
          parent.appendChild(errorDiv);
        }
      }}
    >
      Your browser does not support the video tag.
    </video>
  );
}

