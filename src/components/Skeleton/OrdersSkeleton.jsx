import React from 'react';

export default function OrdersSkeleton() {
  return (
    <section className="space-y-4 animate-pulse">
      <div className="h-8 w-40 bg-gray-200 rounded mb-4"></div>
      <div className="space-y-6">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="ordre-card mt-3 shadow-sm border border-gray-200 rounded-lg">
            <div className="top flex p-4 justify-between items-center bg-gray-50 border-b border-gray-200">
              <div className="right space-y-2">
                <div className="h-6 w-32 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-40 bg-gray-200 rounded"></div>
              </div>
              <div className="left flex space-x-4">
                <div className="h-5 w-20 bg-gray-200 rounded"></div>
                <div className="h-5 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="down flex p-4 items-center justify-between">
              <div className="flex items-center gap-3">
                {[...Array(3)].map((_, imgIdx) => (
                  <div key={imgIdx} className="size-12 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
              <div className="flex items-center gap-12 justify-between text-xs">
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-3 w-12 bg-gray-200 rounded"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-3 w-16 bg-gray-200 rounded"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <div className="h-8 w-36 bg-gray-200 rounded"></div>
                <div className="h-8 w-28 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}