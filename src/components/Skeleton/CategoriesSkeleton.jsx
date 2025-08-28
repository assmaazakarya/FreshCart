export default function CategoriesSkeleton() {
  return (
    <>
      <section className="pt-15 bg-gray-50 animate-pulse">
        <div className="container">
          <div className="space-y-9">
            <div className="flex items-center justify-between mb-4">
              <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-300 rounded-full size-10"></div>
                <div className="bg-gray-300 rounded-full size-10"></div>
              </div>
            </div>
            <div className="py-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4">
                  <div className="size-45 rounded-lg bg-gray-200 mb-2"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white py-8 mt-8">
          <div className="container">
            <div className="pt-5 mb-4">
              <div className="h-7 w-1/4 bg-gray-200 rounded"></div>
            </div>
            <div className="py-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="py-5 flex flex-col items-center">
                  <div className="gap-4 size-45 rounded-lg bg-gray-200 mb-2"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container my-10">
          <div className="h-16 w-full bg-gray-200 rounded"></div>
        </div>
      </section>
    </>
  );
}