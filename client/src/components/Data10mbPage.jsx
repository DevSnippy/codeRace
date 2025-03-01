import React from "react";
import data10mb from "../JsonsResults/10mb.json";

const Data10mbPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">10mb JSON Data</h1>
      <pre className="bg-gray-800 p-2 rounded text-sm overflow-auto">
        {JSON.stringify(data10mb, null, 2)}
      </pre>
    </div>
  );
};

export default Data10mbPage;
