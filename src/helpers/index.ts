export const compareById = (targetId: number | string) => (item: { id: number | string }) =>
  item.id === targetId;
