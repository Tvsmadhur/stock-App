export const topGainerLoser = async () => {
  const response = await fetch(
    "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=CEM1GU0HDV5W7G11"
  );
  const data = await response.json();
  return data;
};

export const getCompanyInfo=async(key)=>
{
  const response = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${key}&apikey=6YSTN2K3N0C8T1JD`
  );
  const data = await response.json();
  return data;
}