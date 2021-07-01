import React from "react";

const LoadingCard = () => {
  return (
    <div className="animate-pulse border border-solid border-gray-200 rounded-md drop-shadow shadow p-4">
      <div className="space-y-2">
        <div className="h-4 bg-blue-400 rounded"></div>
        <div className="h-4 bg-blue-400 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
