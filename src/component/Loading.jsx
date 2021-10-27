import React from "react";
import classNameNameNamees from "./loading.module.css";

export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div className="w-80 h-80 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      <p className="py-5 text-3xl font-extrabold text-gray-200">
        Loading plese with
      </p>
    </div>
  );
}
