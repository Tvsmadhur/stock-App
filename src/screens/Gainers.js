import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router';
import { useQuery, useQueries } from "react-query";
import { getCompanyInfo } from "../../services/getTopGainersService";

// const useMultipleSymbolQueries = (symbols) => {
// 	console.log("....", symbols);
// 	return useQueries(

// 			symbols.map((symbol)=>{
// 				return({
// 					queryKey:symbol.ticker,
// 					queryFn:()=>getCompanyInfo(symbol.ticker)
// 				})
// 			})
// 	);
// };

function Gainers({ gainers }) {
  // const  companyData = useMultipleSymbolQueries(gainers)
  const router = useRouter();
  console.log(gainers, "..gainers");
  return (
    <div class="flex card-container mt-5 mb-5">
      {gainers.map((gainer, index) => {
        return (
          <>
            <Card className="cursor-pointer" key={index} onClick={()=>{
              router.push({
                pathname:"/company",
                query:{
                 ticker:gainer.ticker,
                 current_price:"10.92",
                 is_profit:true,
                 change_percentage:gainer.change_percentage
                }
              })
            }}>
              <CardContent>
							<h1 className="text-base font-bold">{gainer.ticker}</h1>
							<p className="mt-4">${gainer.price}</p>
							<div className="flex items-center">
							<p className="text-sm font-bold text-green-700">+{gainer.change_percentage}</p>
							<img className="pl-2"src="./triangle-16.png"/>
							</div>
							</CardContent>
            </Card>
          </>
        );
      })}
    </div>
  );
}
export default Gainers;
