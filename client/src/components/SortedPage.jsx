import React from "react";
import sortedData from "../JsonsResults/sorted.json";

const SortedPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sorted JSON Data</h1>
      <pre className="bg-gray-800 p-2 rounded text-sm overflow-auto">
        {JSON.stringify(sortedData, null, 2)}
      </pre>
    </div>
  );
};

export default SortedPage;
