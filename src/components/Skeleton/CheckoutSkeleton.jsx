export default function CheckoutSkeleton() {
  return (
    <section className="bg-gray-50 animate-pulse">
      <div className="container max-w-6xl p-6">
        <div className="h-8 w-1/3 bg-gray-200 rounded mb-8"></div>
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Payment Method Skeleton */}
          <div className="space-y-6 lg:col-span-8">
            <div className="space-y-4">
              <div className="h-6 w-1/4 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-4">
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="flex items-start gap-4 border border-gray-200 rounded-lg px-4 py-6 bg-white">
                    <div className="size-4 bg-gray-200 rounded-full"></div>
                    <div className="w-full space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                          <div className="h-8 w-8 bg-gray-200 rounded"></div>
                          <div>
                            <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                            <div className="h-3 w-32 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                        <div className="h-4 w-20 bg-gray-200 rounded"></div>
                      </div>
                      <div className="ml-6 h-4 w-2/3 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Shipping Address Skeleton */}
            <div className="space-y-4 bg-white shadow-sm p-6 rounded-md">
              <div className="h-6 w-1/4 bg-gray-200 rounded mb-4"></div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
                <div className="h-20 w-full bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2 w-1/2">
                  <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                  <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                  <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Order Summary Skeleton */}
          <div className="h-fit bg-white shadow-sm rounded-lg p-6 lg:col-span-4 space-y-6">
            <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
            <div className="border-b border-gray-200 pb-3 max-h-40 overflow-auto space-y-3">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-2 pt-2">
                  <div className="size-12 bg-gray-200 rounded-lg"></div>
                  <div>
                    <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                  </div>
                  <div className="ms-auto h-4 w-16 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
            <ul className="space-y-3 py-3">
              {[...Array(4)].map((_, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <div className="h-10 w-full bg-gray-200 rounded"></div>
              <div className="h-10 w-full bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2 pt-3">
              <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center mt-4 space-x-2">
                {[...Array(5)].map((_, idx) => (
                  <div key={idx} className="h-8 w-12 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}