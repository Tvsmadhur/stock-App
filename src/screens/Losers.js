import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouter } from 'next/router';
function Losers({ losers }) {
  const router = useRouter();
  return (
    <>
      <div class="flex card-container mt-5 mb-5">
        {losers?.map((loser, index) => {
          return (
            <>
              <Card
                className="cursor-pointer"
                key={index}
                onClick={() => {
                  router.push({
                    pathname: "/company",
                    query: {
                      ticker: loser.ticker,
                      current_price:"10.92",
                      is_profit:false,
                      change_percentage:loser.change_percentage
                    },
                  });
                }}
              >
                <CardContent>
                  <h1 className="text-base font-bold">{loser.ticker}</h1>
                  <p className="mt-4">${loser.price}</p>
                  <div class="flex items-center">
                    <p className="text-sm font-bold text-red-500">
                      {loser.change_percentage}
                    </p>
                    <div className="ml-2">
                      <img
                        className="pl-2 image-container"
                        src="./red-triangle.png"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Losers;
