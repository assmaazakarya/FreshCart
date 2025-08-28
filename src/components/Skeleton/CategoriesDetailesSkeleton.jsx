import React from 'react';

export default function CategoriesDetailesSkeleton() {
  return (
    <main className="bg-gray-50 animate-pulse">
      <div className="py-15 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center space-y-4">
            <div className="size-45 bg-gray-200 rounded-lg mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
      <div className="bg-white py-8 mt-8">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div className="h-7 w-1/4 bg-gray-200 rounded"></div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-300 rounded-full size-10"></div>
              <div className="bg-gray-300 rounded-full size-10"></div>
            </div>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="py-5 flex flex-col items-center">
                <div className="size-45 rounded-lg bg-gray-200 mb-2"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container my-10">
        <div className="h-16 w-full bg-gray-200 rounded"></div>
      </div>
    </main>
  );
}