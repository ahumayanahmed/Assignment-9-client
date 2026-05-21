export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="text-xl font-semibold text-gray-600">
          Loading...
        </h2>

        <p className="text-gray-400">
          Please wait a moment
        </p>

      </div>
    </div>
  );
}