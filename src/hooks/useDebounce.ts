import { DependencyList, useCallback, useEffect } from "react";

/**
 * Custom hook for debouncing a callback function.
 * @param effect The effect function to debounce.
 * @param dependencies Dependency list for useEffect.
 * @param delay Delay in milliseconds for the debounce.
 */
function useDebounce(effect: () => void, dependencies: DependencyList, delay: number): void {
    const callback = useCallback(effect, [effect, ...dependencies]);

    useEffect(() => {
        const timer = setTimeout(() => {
            callback();
        }, delay);

        return () => clearTimeout(timer);
    }, [callback, delay]);
}

export default useDebounce;
