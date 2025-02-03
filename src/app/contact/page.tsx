import React from "react";

export default function page() {
  return (
    <div className="flex h-full flex-1 flex-col bg-red-500 p-4">
      <div className="">Subheader</div>
      <div className="relative flex flex-1 bg-blue-500">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="h-screen bg-green-500">asdasd</div>
          <div className="h-screen bg-green-500">asdasd</div>
          <div className="h-screen bg-green-500">asdasd</div>
          <div className="h-screen bg-green-500">asdasd</div>
          <div className="h-screen bg-green-500">asdasd</div>
        </div>
      </div>
    </div>
  );
}
