import React from "react";
import Card from "./Card";
export default function Cards({ data, loading, error, timeframe }) {
  if (loading) return <div>Loading...</div>;
  if (error)
    return <div className="text-red-700">Something Wrong Has Happened</div>;
  return (
    <>
      {data.map(({ title, timeframes }) => (
        <Card key={title} title={title} timeframe={timeframes[timeframe]} />
      ))}
    </>
  );
}
