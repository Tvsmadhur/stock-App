import React, { useState } from "react";
import CandleStickChart from "./CandleStickChart";
import { useRouter } from "next/router";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import Slider from "rc-slider";
import { useQuery } from "react-query";
import "rc-slider/assets/index.css";
import { getCompanyDataSucces, getCompanyDataFailure } from "../redux/actions";
import { getCompanyInfo } from "../../services/getTopGainersService";

function Company() {
  const router = useRouter();
  const { ticker, current_price, is_profit, change_percentage } = router.query;
  const [timePeriod, setTimePeriod] = useState("TIME_SERIES_DAILY");
  const { data, error, isLoading } = useQuery(
    ["getCompanyInfo",ticker],
    ()=> getCompanyInfo(ticker),
    {
      enabled: !!ticker,
      staleTime: 60000, // Cache data for 60 seconds
      onSuccess: (data) => {
       getCompanyDataSucces(data);
        // Dispatch Redux action to update state
      },
      onError: (error) => {
        getCompanyDataFailure(error);
      },
    }
  );
  if (error) {
    return <p>Please reoload the page API failed...</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const changeHandler = (event) => {
    switch (event.target.value) {
      case "1D":
        setTimePeriod("TIME_SERIES_INTRADAY");
        break;
      case "1W":
        setTimePeriod("TIME_SERIES_WEEKLY");
        break;
      case "1M":
        setTimePeriod("TIME_SERIES_MONTHLY");
        break;
      case "1Y":
        setTimePeriod("TIME_SERIES_YEARLY");
        break;
    }
  };
 
  return (
    <div className="mt-5 flex items-center justify-center mb-5">
      <div className="flex flex-col w-[80%]">
        {(typeof data !== "undefined" && typeof is_profit !== "undefined")&& (
          <div className="flex items-center justify-between">
            <div className="font-bold  text-2xl">{data["Name"]}</div>
            <div>
              <p>{current_price}</p>
              { is_profit == "true" ? (
                <div className="flex items-center">
                  <p className="text-sm font-bold text-green-700">
                    +{change_percentage}
                  </p>
                  <img className="pl-2" src="./triangle-16.png" />
                </div>
              ) : (
                <div class="flex items-center">
                  <p className="text-sm font-bold text-red-500">
                    {change_percentage}
                  </p>
                  <div className="ml-2">
                    <img
                      className="pl-2 image-container"
                      src="./red-triangle.png"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="mt-4">
          <CandleStickChart
            ticker={ticker}
            timePeriod={timePeriod}
            className="w-[80%]"
          />
        </div>
        <div className="m-auto mt-2">
          <FormControl>
            <RadioGroup
              onChange={changeHandler}
              defaultValue="1D"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="1D" control={<Radio />} label="1D" />
              <FormControlLabel value="1W" control={<Radio />} label="1W" />
              <FormControlLabel value="1M" control={<Radio />} label="1M" />
            </RadioGroup>
          </FormControl>
        </div>
        {typeof data !== "undefined" && (
          <div className="border mt-4 pb-4">
            <div className="border-b  ">
              <div className="m-2 pl-4 font-medium">{data["Name"]}</div>
            </div>
            <div className="pl-4 mt-2">{data["Description"]}</div>
            <div className="pl-4 mt-6 flex flex-wrap gap-3">
              <Grid>
                <Chip
                  label={`Industry: ${data["Industry"]}`}
                  style={{
                    color: "white",
                    backgroundColor: "rgb(146 64 14)",
                  }}
                />
              </Grid>
              <Grid>
                <Chip
                  label={`Sector: ${data["Sector"]}`}
                  variant="outlined"
                  style={{
                    color: "white",
                    backgroundColor: "rgb(146 64 14)",
                  }}
                />
              </Grid>
            </div>
            <div className="mt-6 pl-4 pr-4 flex items-center justify-between flex-col sm:flex-row slider-container">
              <div className="whitespace-nowrap">
                <p className="text-slate-500 ">52-Week Low</p>
                <p className="font-semibold">${data["52WeekLow"]}</p>
              </div>
              <div className="w-3/5">
                <Slider
                  disabled
                  value={parseFloat(current_price) * 100}
                  min={parseFloat(data["52WeekLow"] * 100)}
                  step={0.001 * 100}
                  max={parseFloat(data["52WeekHigh"]) * 100}
                  handleStyle={{
                    width: "30px",
                    height: "30px",
                    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                    backgroundColor: "brown",
                  }}
                />
                <p className="text-center mt-5">currentprice:{current_price}</p>
              </div>

              <div className="whitespace-nowrap">
                <p className="text-slate-500 ">52-Week High</p>
                <p className="font-semibold">${data["52WeekHigh"]}</p>
              </div>
            </div>
            <div className="mt-6 pl-4 pr-4 flex items-center justify-between flex-wrap spacing-x-4 company-details">
              <div className="flex-shrink-0">
                <p className="text-slate-500 ">Market Cap</p>
                <p>
                  {data["MarketCapitalization"] !== "None"
                    ? `$${data["MarketCapitalization"]}`
                    : "None"}
                </p>
              </div>
              <div className="flex-shrink-0">
                <p className="text-slate-500 ">P/E Ratio</p>
                <p>{data["PERatio"]}</p>
              </div>
              <div className="flex-shrink-0">
                <p className="text-slate-500 ">Beta</p>
                <p>{data["Beta"]}</p>
              </div>
              <div className="flex-shrink-0">
                <p className="text-slate-500 ">Dividend Yield</p>
                <p>{data["DividendYield"]}</p>
              </div>
              <div className="flex-shrink-0">
                <p className="text-slate-500 ">Profit Margin</p>
                <p>{data["ProfitMargin"]}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Company;
