import { useEffect, useRef, EffectCallback, DependencyList } from "react";
export const useOnlyUpdateEffect = (
  fn: EffectCallback,
  deeps: DependencyList | undefined
) => {
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) {
      fn();
    } else {
      ref.current = true;
    }
  }, deeps);
};
