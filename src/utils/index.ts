export const getCargoBaysCount = (value: string) => {
  return value
    ? Math.ceil(
        value.split(',').reduce((acc, cur) => acc + Number(cur), 0) / 10
      )
    : 0;
};
