import { useCallback, useEffect, useRef } from 'react';

export function useDebounce<T extends unknown[]>(
  callback: (...args: T) => void | Promise<void>,
  wait = 1000,
) {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const debounceFn = useCallback(
    (...args: T) => {
      // 2. 이미 실행되었다면, 기존의 타이머를 취소한다.
      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      // 1. 처음 실행된다면, 타이머를 실행한다.
      // 3. 다시 타이머를 실행한다.
      timeout.current = setTimeout(() => {
        callback(...args);
      }, wait);
    },
    [callback, wait],
  );

  // 컴포넌트가 언마운트될 때 불필요하게 실행되지 않도록 보장하기 위해서 이전에 설정된 setTimeout을 취소한다.
  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return debounceFn;
}
