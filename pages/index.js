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
  const { data, error, isLoading } = useQuery(
    "getGainersLosers",
    topGainerLoser,
    {
      staleTime: 60000, // Cache data for 60 seconds
      onSuccess: (data) => {
        getTopGainerLoserSuccess(data);
        // Dispatch Redux action to update state
      },
      onError: (error) => {
        getTopGainerLoserFailure(error);
      },
    }
  );

  if (error) {
    return <p>Please reoload the page API failed...</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data,'..data')
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
        {(value === 0 && typeof data!=="undefined" && data?.top_gainers.length>0) && (
          <Gainers
            gainers={data.top_gainers}
             />
        )}
        {(value === 1 && typeof data!=="undefined" && data?.top_losers.length>0)  && (
          <Losers
            losers={data.top_losers}
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
