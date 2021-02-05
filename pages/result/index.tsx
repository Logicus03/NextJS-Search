import React, { useState } from "react";
import { useRouter } from "next/router";
import GetRestaurants from "@data/getRestaurants";

const Result = () => {
  const router = useRouter();
  const result = GetRestaurants("tacos", "Santo Domingo");
  console.log(result);

  return <p>Result</p>;
};

export default Result;
