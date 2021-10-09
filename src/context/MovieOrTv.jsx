import { createContext, useState } from "react";

export const MovieOrTv = createContext();

export default function MovieOrTvProvider({ children }) {
  const [active, setActive] = useState("movie");
  return (
    <MovieOrTv.Provider value={{ active, setActive }}>
      {children}
    </MovieOrTv.Provider>
  );
}
