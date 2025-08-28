export default function BrandsSkeleton() {
  return (
    <>
      <section className="pt-10 space-y-8 text-center animate-pulse">
        <div className="container">
          <div className="space-y-4">
            <div className="h-8 w-1/3 bg-gray-200 rounded mx-auto mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
        <div className="bg-gray-50 py-10">
          <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 *:rounded-md *:shadow">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="overflow-hidden bg-white flex flex-col h-40">
                <div className="h-2/3 flex items-center justify-center">
                  <div className="w-24 h-16 bg-gray-200 rounded"></div>
                </div>
                <div className="border-t border-gray-100 flex justify-between h-1/3 items-center px-5">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container my-10">
        <div className="h-16 w-full bg-gray-200 rounded"></div>
      </div>
    </>
  );
}