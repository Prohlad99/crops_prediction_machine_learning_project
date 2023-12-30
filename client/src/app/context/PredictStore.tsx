"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface predictContextType {
  predictData: { found: boolean; value: string }[];
  setPredictData: Dispatch<SetStateAction<{ found: boolean; value: string }[]>>;
}

export const predictContext = createContext<predictContextType>({
  predictData: [],
  setPredictData: () => {},
});

const PredictStore = ({ children }: any) => {
  const [predictData, setPredictData] = useState<
    { found: boolean; value: string }[]
  >([]);
  const value: predictContextType = {
    predictData,
    setPredictData,
  };
  return (
    <predictContext.Provider value={value}>{children}</predictContext.Provider>
  );
};

export default PredictStore;
