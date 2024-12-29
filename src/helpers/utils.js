export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
}
