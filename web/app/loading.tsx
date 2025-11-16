export default function Loading() {
  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-900">
        <div className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-progress"></div>
      </div>
      
      {/* Loading Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn">
        <div className="flex flex-col items-center gap-6">
          {/* Animated Spinner */}
          <div className="relative">
            <div className="w-20 h-20 border-4 border-gray-800 rounded-full"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
            <div 
              className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-r-yellow-600 rounded-full animate-spin" 
              style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
            ></div>
            {/* Inner glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-400/20 rounded-full blur-sm animate-pulse"></div>
          </div>
          
          {/* Pulsing Dots */}
          <div className="flex gap-2">
            <div 
              className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" 
              style={{ animationDelay: '0s' }}
            ></div>
            <div 
              className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" 
              style={{ animationDelay: '0.2s' }}
            ></div>
            <div 
              className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" 
              style={{ animationDelay: '0.4s' }}
            ></div>
          </div>
          
          {/* Loading Text */}
          <p className="text-gray-300 text-sm font-medium tracking-wider uppercase">Loading...</p>
        </div>
      </div>
    </>
  );
}

