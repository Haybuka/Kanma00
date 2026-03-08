export const formatNumber = (val: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(val);
};

export const toPercentage = (value: number, total: number): number => {
  if (total === 0) return 0;
  return (value / total) * 100;
};