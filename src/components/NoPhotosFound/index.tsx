"use client";
import { CameraIcon } from "@heroicons/react/24/outline";
export default function NoPhotosFound() {
  return (
    <div className="flex flex-col justify-center items-center absolute inset-0">
      <h1 className="text-2xl font-roboto text-center text-slate-300 mt-12">
        No photos found
      </h1>
      <CameraIcon className="h-8 w-8 text-slate-300" />
    </div>
  );
}
