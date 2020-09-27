import { useEffect, useState } from "react";

export const useDefinedValue = <T extends unknown>(value: T) => {
  const [definedValue, setDefinedValue] = useState<T>();

  useEffect(() => {
    value && setDefinedValue(value);
  }, [value]);

  return definedValue;
};
