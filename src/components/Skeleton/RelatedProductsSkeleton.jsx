export default function RelatedProductsSkeleton() {
  return (
    <div className="container">
      <div className="flex items-center justify-between mb-6">
        <div className="h-7 w-48 bg-gray-200 rounded"></div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-300 rounded-full size-10"></div>
          <div className="bg-gray-300 rounded-full size-10"></div>
        </div>
      </div>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 animate-pulse">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-md p-4 flex flex-col items-center space-y-3"
          >
            <div className="w-32 h-32 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
            <div className="h-5 w-20 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}