import React from "react";

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      {/* Simple spinner using Tailwind CSS classes */}
      <div
        className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
