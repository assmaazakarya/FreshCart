import React from 'react';

export default function HomeDealsSkeleton() {
  return (
    <div className="bg-white py-10 animate-pulse">
      <div className="container space-y-4">
        <div className="flex flex-col gap-3 items-start justify-between md:items-center md:flex-row md:gap-0">
          <div className="space-y-3">
            <div className="h-6 w-40 bg-gray-200 rounded"></div>
            <div className="flex gap-3 items-center offers">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="counter flex gap-2 items-center">
                <div className="bg-gray-300 size-8 rounded-lg"></div>
                <span className="text-gray-400">:</span>
                <div className="bg-gray-300 size-8 rounded-lg"></div>
                <span className="text-gray-400">:</span>
                <div className="bg-gray-300 size-8 rounded-lg"></div>
              </div>
            </div>
          </div>
          <div className="links">
            <div className="h-5 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="py-10 cards gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
    </div>
  );
}