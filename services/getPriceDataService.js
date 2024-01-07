export const getPriceData = async (timePeriod, symbol) => {
  if (timePeriod === "TIME_SERIES_INTRADAY") {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=${timePeriod}&symbol=${symbol}&interval=5min&apikey=OI10TADSDJVNSW0G`
    );
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=${timePeriod}&symbol=${symbol}&apikey=OI10TADSDJVNSW0G`
    );
    const data = await response.json();
    return data;
  }
};
