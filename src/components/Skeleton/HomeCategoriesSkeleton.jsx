export default function HomeCategoriesSkeleton() {
  return (
    <div className="container">
      <div className="flex flex-col gap-3 items-start justify-between md:items-center py-4 md:flex-row md:gap-0">
        <div className="h-7 w-48 bg-gray-200 rounded"></div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-32 bg-gray-200 rounded"></div>
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="py-10 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white shadow-xs rounded-sm flex flex-col items-center text-center py-4 space-y-2 animate-pulse"
          >
            <div className="rounded-full overflow-hidden mb-2">
              <div className="size-15 bg-gray-200"></div>
            </div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}