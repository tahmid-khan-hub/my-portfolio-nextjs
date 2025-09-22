"use client"

export default function Loading() {
    return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-[150px] h-[150px]">
        <span className="loading loading-spinner text-info"></span>
      </div>
    </div>
  );
}