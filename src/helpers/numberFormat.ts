export const formatter = (number: string) => {
  const amountInCents = parseInt(number.replace(/[^\d]/g, ""), 10);
  const formattedAmount = (amountInCents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedAmount;
};
