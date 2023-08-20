import { useMemo } from 'react';

const useCargoBaysCount = (value: string) => {
  const cargoBaysCount = useMemo(() => {
    return value
      ? Math.ceil(value.split(',').reduce((acc, cur) => acc + Number(cur), 0) / 10)
      : 0;
  }, [value]);

  return cargoBaysCount;
};

export default useCargoBaysCount;