import { useQuery } from "react-query";
import { useState ,useEffect} from "react";
import dynamic from 'next/dynamic';
import { getGraphDataSuccess,getGraphDataFailure } from "../redux/actions";
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { getPriceData } from "../../services/getPriceDataService";
function CandleStickChart({ticker,timePeriod}) {
  const [stockData,setStockData]=useState()
  //  const { data, error, isLoading } = useQuery(
  //   ["getPriceData",timePeriod,ticker],
  //  ()=>getPriceData(timePeriod,ticker),
  //   {
  //     staleTime: 60000, // Cache data for 60 seconds
  //     enabled: !!ticker && !!timePeriod,
  //     refetchOnWindowFocus: false,
  //     onSuccess: (data) => {
  //      getGraphDataSuccess(data)
  //       // Dispatch Redux action to update state
  //     },
  //     onError: (error) => {
  //       getGraphDataFailure(error);
  //     },
  //   }
  // );
  // if (error) {
  //   return <p>Please reoload the page API failed...</p>;
  // }
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // useEffect(()=>{
  //   if(data && Object?.keys(data)[1])
  //   {
  //   const timeData=Object.keys(data)[1]
  //   console.log(data[timeData])
  //   const formattedData = Object.keys(data[timeData]).map(date => {
  //     console.log(date,'date')
  //     return ({
    
  //     x: new Date(date),
  //     y: [
  //       parseFloat(data[timeData][date]['1. open']),
  //       parseFloat(data[timeData][date]['2. high']),
  //       parseFloat(data[timeData][date]['3. low']),
  //       parseFloat(data[timeData][date]['4. close']),
  //     ],
  //   })});
  //   console.log(formattedData)
  //   setStockData(formattedData);
  // }
  // },[data])
  const options = {
    chart: {
      id: 'responsive-chart',
      type: 'line',
      height: 400,
      toolbar: {
        show: false,
      }
    },
    xaxis: {
      type: 'datetime',
    },
    responsive: [
      // {
      //   breakpoint: 480,
      //   options: {
      //     chart: {
      //       width:300,
      //     },
      //   },
      // },
      // {
      //   breakpoint: 760,
      //   options: {
      //     chart: {
      //       width: 600,
      //     },
      //   },
      // },
      // {
      //   breakpoint:1020,
      //   options: {
      //     chart: {
      //       width: 600,
      //     },
      //   }
      // },
      // {
      //   breakpoint: 1200,
      //   options: {
      //     chart: {
      //       width: 800, // Adjust width in pixels for screens with a maximum width of 1200px (desktop)
      //     },
      //   },
      // }
    ],
  };

  const series = [
    {
      data: stockData,
    },
  ];
  return (
    <div className="border p-8">
    {/* {(typeof data!=="undefined" &&stockData?.length>0 && Object.keys(data)[1])&&
     <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={400}
     />
    } */}
    </div>
  );
}
export default CandleStickChart