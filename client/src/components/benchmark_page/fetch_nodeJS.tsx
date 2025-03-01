import React, { useState } from "react";

interface Data {
  userId: number;
  id: number;
}

const NodeJsComponent: React.FC = () => {
  const [Data, setTodo] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(0);

  const fetchData = async () => {
    setLoading(true);

    const startTime = Date.now();

    try {
      const response = await fetch("/api/node/JSjson/10mb");
      const data = await response.json();
      setTodo(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    setTime(elapsedTime);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={fetchData}>
        click here to sort Data from node js server
      </button>

      {loading && <p>Loading...</p>}

      {Data && (
        <div>
          <p>{`Time taken: ${time}s`}</p>
          <p>
            click{" "}
            <a href="/jsons/10mb" target="blank">
              <strong>here</strong>{" "}
            </a>
            to see the result
          </p>
        </div>
      )}
    </div>
  );
};

export default NodeJsComponent;
