
export default function ProductDetailesSkeleton() {
  return (
    <div className="bg-gray-50 animate-pulse py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image Skeleton */}
        <div className="flex justify-center items-center">
          <div className="w-80 h-80 bg-gray-200 rounded-lg"></div>
        </div>
        {/* Product Info Skeleton */}
        <div className="space-y-6">
          <div className="h-8 w-2/3 bg-gray-200 rounded"></div>
          <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
          <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          <div className="flex gap-4 mt-6">
            <div className="h-10 w-32 bg-gray-200 rounded"></div>
            <div className="h-10 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
      {/* Tabs Skeleton */}
      <div className="container mx-auto mt-10">
        <div className="flex gap-4 mb-6">
          <div className="h-6 w-24 bg-gray-200 rounded"></div>
          <div className="h-6 w-24 bg-gray-200 rounded"></div>
          <div className="h-6 w-24 bg-gray-200 rounded"></div>
        </div>
        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
      </div>
      {/* Related Products Skeleton */}
      <div className="container mx-auto mt-10">
        <div className="h-7 w-48 bg-gray-200 rounded mb-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-md p-4 flex flex-col items-center space-y-3">
              <div className="w-24 h-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
              <div className="h-5 w-20 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}