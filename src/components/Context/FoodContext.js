import React, { useState, createContext } from "react";

const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const [food, setFood] = useState("");
  const [foods, setFoods] = useState(() => {
    const storageFoods = JSON.parse(localStorage.getItem("foods"));

    return storageFoods ?? [];
  });

  const toggleFood = () => {
    setFoods((prev) => {
      const newFoods = [...prev, food];

      // save to localStorage
      const jsonJobs = JSON.stringify(newFoods);
      localStorage.setItem("foods", jsonJobs);

      return [...prev, food];
    });
  };

  const value = {
    food,
    setFood,
    toggleFood,
    foods,
  };

  return (
    <FoodContext.FoodProvider value={value}>
      {children}
    </FoodContext.FoodProvider>
  );
};

export { FoodContext, FoodProvider };
