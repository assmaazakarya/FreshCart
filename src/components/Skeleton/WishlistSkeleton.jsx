import React from 'react';

export default function WishlistSkeleton() {
  return (
    <section className="py-10 bg-gray-50 animate-pulse">
      <div className="container grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-10">
        {/* Wishlist Items Skeleton */}
        <div className="h-fit shopping-items col-span-2 rounded-sm border border-gray-200 bg-white">
          <div className="p-5 border-b border-gray-300/50 space-y-2">
            <div className="h-7 w-1/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-4 p-5">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                  <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Wishlist Sidebar Skeleton */}
        <div className="space-y-4 order-details h-fit col-span-1 *:p-6 *:bg-white *:shadow-sm *:rounded-md overflow-hidden">
          <div className="space-y-3">
            <div className="h-6 w-1/2 bg-gray-200 rounded mb-5"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
            <div className="h-10 w-full bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-4">
            <div className="h-5 w-1/3 bg-gray-200 rounded mb-2"></div>
            <ul className="space-y-3">
              {[...Array(3)].map((_, idx) => (
                <li key={idx} className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div>
                    <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="*:p-4 *:border *:rounded-lg space-y-3">
            <div className="bg-gray-50 border-gray-50 space-y-2">
              <div className="h-4 w-1/3 bg-gray-200 rounded mb-1"></div>
              <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2 border-primary-200 bg-primary-50">
              <div className="h-4 w-1/3 bg-gray-200 rounded mb-1"></div>
              <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}