const currencyFormatter = new Intl.NumberFormat("mn-MN", {
  style: "currency",
  currency: "MNT",
});

export const formatCurrency = (value: number) => {
  return currencyFormatter.format(value).replace("MNT", "₮");
};
