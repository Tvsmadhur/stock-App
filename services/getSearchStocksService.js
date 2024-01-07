export const getStockMatches = async (key) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${key}&apikey=6YSTN2K3N0C8T1JD`
  );
  const data = await response.json();
  return data;
};
