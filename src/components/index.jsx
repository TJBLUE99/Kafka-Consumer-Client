import React from "react";
import { useApi } from "../hooks/useApi";

export const Index = () => {
  const { data, loading, error } = useApi("/");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error... {error.message} </div>;

  return <div>{data && <div className="">{JSON.stringify(data)}</div>}</div>;
};
