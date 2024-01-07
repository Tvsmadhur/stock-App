import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { topGainerLoser } from "../services/getTopGainersService";
import Gainers from "../src/screens/Gainers";
import {
  getTopGainerLoserSuccess,
  getTopGainerLoserFailure,
} from "../src/redux/actions";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Losers from "../src/screens/Losers";

export default function Home() {
  const [value, setValue] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const [gainerLoserData, setGainerLoserDate] = useState({
    gainerData: [],
    loaserData: [],
  });
  // const { data, error, isLoading } = useQuery(
  //   "getGainersLosers,
  //   topGainerLoser,
  //   {
  //     staleTime: 60000, // Cache data for 60 seconds
  //     onSuccess: (data) => {
  //       getTopGainerLoserSuccess(data);
  //       // Dispatch Redux action to update state
  //     },
  //     onError: (error) => {
  //       getTopGainerLoserFailure(error);
  //     },
  //   }
  // );

  // if (error) {
  //   return <p>Please reoload the page API failed...</p>;
  // }
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // useEffect(()=>
  // {
  //   setGainerLoserDate((prevData)=>({
  //     gainerData:[...prevData.gainerData,...data.top_gainers],
  //     loaserData:[...prevData.loserData,...data.top_losers]
  //   }))

  // },[data])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="mt-5 flex items-center justify-center">
      <div className="sm:w-[80%]">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Top Gainers" />
            <Tab label="Top Losers" />
          </Tabs>
        </Box>
        {value === 0 && (
          <Gainers
            gainers={[
              {
                ticker: "DRMAW",
                price: "0.0239",
                change_amount: "0.0156",
                change_percentage: "187.9518%",
                volume: "27975",
              },
              {
                ticker: "ABLVW",
                price: "0.0349",
                change_amount: "0.02",
                change_percentage: "134.2282%",
                volume: "50",
              },
              {
                ticker: "RCACU",
                price: "10.92",
                change_amount: "5.57",
                change_percentage: "104.1121%",
                volume: "3692",
              },
              {
                ticker: "GTACW",
                price: "0.06",
                change_amount: "0.0301",
                change_percentage: "100.6689%",
                volume: "100",
              },
              {
                ticker: "APACW",
                price: "0.079",
                change_amount: "0.0389",
                change_percentage: "97.0075%",
                volume: "611",
              },
              {
                ticker: "RCAC",
                price: "10.8",
                change_amount: "5.15",
                change_percentage: "91.1504%",
                volume: "750602",
              },
              {
                ticker: "GATEW",
                price: "0.0404",
                change_amount: "0.0184",
                change_percentage: "83.6364%",
                volume: "1854",
              },
              {
                ticker: "ONMDW",
                price: "0.0097",
                change_amount: "0.0043",
                change_percentage: "79.6296%",
                volume: "5800",
              },
              {
                ticker: "PMGMW",
                price: "0.03",
                change_amount: "0.0125",
                change_percentage: "71.4286%",
                volume: "38502",
              },
              {
                ticker: "GOVXW",
                price: "0.05",
                change_amount: "0.0198",
                change_percentage: "65.5629%",
                volume: "1740",
              },
              {
                ticker: "JFBRW",
                price: "0.07",
                change_amount: "0.0275",
                change_percentage: "64.7059%",
                volume: "18537",
              },
              {
                ticker: "WINVR",
                price: "0.055",
                change_amount: "0.0216",
                change_percentage: "64.6707%",
                volume: "420",
              },
              {
                ticker: "ZCAR",
                price: "4.21",
                change_amount: "1.65",
                change_percentage: "64.4531%",
                volume: "10894377",
              },
              {
                ticker: "QDROW",
                price: "0.0325",
                change_amount: "0.0125",
                change_percentage: "62.5%",
                volume: "344837",
              },
              {
                ticker: "GRRRW",
                price: "0.04",
                change_amount: "0.015",
                change_percentage: "60.0%",
                volume: "18471",
              },
              {
                ticker: "DISTR",
                price: "0.1747",
                change_amount: "0.0646",
                change_percentage: "58.6739%",
                volume: "306",
              },
              {
                ticker: "AIMD",
                price: "2.74",
                change_amount: "1.01",
                change_percentage: "58.3815%",
                volume: "30180810",
              },
              {
                ticker: "HOLOW",
                price: "0.032",
                change_amount: "0.0116",
                change_percentage: "56.8627%",
                volume: "1402",
              },
              {
                ticker: "LGSTW",
                price: "0.05",
                change_amount: "0.0181",
                change_percentage: "56.7398%",
                volume: "17500",
              },
              {
                ticker: "WGSWW",
                price: "0.01",
                change_amount: "0.0036",
                change_percentage: "56.25%",
                volume: "499",
              },
            ]}
          />
        )}
        {value === 1 && (
          <Losers
            losers={[
              {
                ticker: "KTTAW",
                price: "0.0041",
                change_amount: "-0.0139",
                change_percentage: "-77.2222%",
                volume: "29316",
              },
              {
                ticker: "SVMHW",
                price: "0.0081",
                change_amount: "-0.0167",
                change_percentage: "-67.3387%",
                volume: "2",
              },
              {
                ticker: "VLD+",
                price: "0.0119",
                change_amount: "-0.0229",
                change_percentage: "-65.8046%",
                volume: "12759",
              },
              {
                ticker: "HOFVW",
                price: "0.0062",
                change_amount: "-0.0088",
                change_percentage: "-58.6667%",
                volume: "18733",
              },
              {
                ticker: "SMXWW",
                price: "0.0039",
                change_amount: "-0.0052",
                change_percentage: "-57.1429%",
                volume: "93069",
              },
              {
                ticker: "DOGZ",
                price: "4.38",
                change_amount: "-4.72",
                change_percentage: "-51.8681%",
                volume: "1468754",
              },
              {
                ticker: "SWAGW",
                price: "0.119",
                change_amount: "-0.111",
                change_percentage: "-48.2609%",
                volume: "30466",
              },
              {
                ticker: "GBBKW",
                price: "0.015",
                change_amount: "-0.013",
                change_percentage: "-46.4286%",
                volume: "2000",
              },
              {
                ticker: "RCACW",
                price: "0.0315",
                change_amount: "-0.0263",
                change_percentage: "-45.5017%",
                volume: "83106",
              },
              {
                ticker: "ATXI",
                price: "0.1895",
                change_amount: "-0.1528",
                change_percentage: "-44.6392%",
                volume: "21607448",
              },
              {
                ticker: "MACAW",
                price: "0.023",
                change_amount: "-0.0169",
                change_percentage: "-42.3559%",
                volume: "86",
              },
              {
                ticker: "WTMAR",
                price: "0.0525",
                change_amount: "-0.0376",
                change_percentage: "-41.7314%",
                volume: "1000",
              },
              {
                ticker: "APLT",
                price: "2.25",
                change_amount: "-1.54",
                change_percentage: "-40.6332%",
                volume: "6751482",
              },
              {
                ticker: "ESLAW",
                price: "0.0301",
                change_amount: "-0.0186",
                change_percentage: "-38.193%",
                volume: "301",
              },
              {
                ticker: "ZFOXW",
                price: "0.0126",
                change_amount: "-0.0076",
                change_percentage: "-37.6238%",
                volume: "46147",
              },
              {
                ticker: "LIFWZ",
                price: "0.1",
                change_amount: "-0.0597",
                change_percentage: "-37.3826%",
                volume: "755",
              },
              {
                ticker: "VWEWW",
                price: "0.009",
                change_amount: "-0.0051",
                change_percentage: "-36.1702%",
                volume: "288325",
              },
              {
                ticker: "SAITW",
                price: "0.0478",
                change_amount: "-0.0262",
                change_percentage: "-35.4054%",
                volume: "1230",
              },
              {
                ticker: "KERNW",
                price: "0.0115",
                change_amount: "-0.0062",
                change_percentage: "-35.0282%",
                volume: "8300",
              },
              {
                ticker: "OCEAW",
                price: "0.0222",
                change_amount: "-0.0118",
                change_percentage: "-34.7059%",
                volume: "94830",
              },
            ]}
          />
        )}
        <span
          className="text-l font-bold text-amber-800 m-auto cursor-pointer"
        >
          Load more
        </span>
      </div>
    </div>
  );
}
