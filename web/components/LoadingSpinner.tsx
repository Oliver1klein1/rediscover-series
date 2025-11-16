export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-800 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-r-yellow-600 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        
        {/* Pulsing Dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-400 text-sm font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

