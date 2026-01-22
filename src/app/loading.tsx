"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <span className="loading loading-spinner text-info w-16 h-16"></span>
    </div>
  );
}