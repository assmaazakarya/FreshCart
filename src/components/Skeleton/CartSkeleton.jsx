import React from 'react'

export default function CartSkeleton() {
  return (
    <section className="py-10 bg-gray-50 animate-pulse">
      <div className="container grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">
        {/* Cart Items Skeleton */}
        <div className="h-fit shopping-items col-span-2 rounded-sm border border-gray-200 bg-white">
          <div className="p-5 border-b border-gray-300/50 space-y-3">
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
        {/* Order Summary Skeleton */}
        <div className="space-y-4 order-details h-fit col-span-1 p-5 bg-white border border-gray-200 rounded-sm overflow-hidden">
          <div className="space-y-3">
            <div className="h-6 w-1/2 bg-gray-200 rounded mb-5"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-5 w-full bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-3">
            <div className="h-10 w-full bg-gray-200 rounded"></div>
            <div className="h-10 w-full bg-gray-200 rounded"></div>
          </div>
          <div className="*:p-4 *:border *:rounded-lg space-y-3">
            <div className="bg-gray-50 border-gray-50 space-y-2">
              <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
              <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2 border-primary-200 bg-primary-50">
              <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
              <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}