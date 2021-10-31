import React from "react";
import ErrorFallback from "../../Error/ErrorFallback";

export default function Main({ children }) {
  try {
    return <>{children}</>;
  } catch (error) {
    return <ErrorFallback error={error} />;
  }
}
