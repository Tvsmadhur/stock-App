import Background from "../../public/icons8-search.svg";
import Chip from "@mui/material/Chip";
import { useQuery } from "react-query";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import useDebounce from "../../hooks/useDebounce";
import { getStockMatches } from "../../services/getSearchStocksService"
import { getStockMatchesSuccess,getStockMatchesFailure } from "../redux/actions";
function SearchBar() {
  const [togglePopUp, setTogglePopUp] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const value=useDebounce(searchValue,1000)
  
   const { data, error, isLoading } = useQuery(
    ["getStockInfo",value],
    ()=>getStockMatches(value),
    {
       enabled:!!value,
      staleTime: 60000, // Cache data for 60 seconds
      onSuccess: (data) => {
        getStockMatchesSuccess(data);
        // Dispatch Redux action to update state
      },
      onError: (error) => {
      getStockMatchesFailure(data);
      },
    }
  );
  if(error)
  {
    return <p>Please reload the page API failed...</p>
  }
  if(isLoading)
  {
    return <p>Loading...</p>
  }
  // const data = [
  //   {
  //     "1. symbol": "ABLVW",
  //     "2. name": "Able View Global Inc - Warrants (17/08/2028)",
  //     "3. type": "Equity",
  //     "4. region": "United States",
  //     "5. marketOpen": "09:30",
  //     "6. marketClose": "16:00",
  //     "7. timezone": "UTC-04",
  //     "8. currency": "USD",
  //     "9. matchScore": "1.0000",
  //   },
  //   {
  //     "1. symbol": "ABLVW",
  //     "2. name": "Able View Global Inc - Warrants (17/08/2028)",
  //     "3. type": "Equity",
  //     "4. region": "United States",
  //     "5. marketOpen": "09:30",
  //     "6. marketClose": "16:00",
  //     "7. timezone": "UTC-04",
  //     "8. currency": "USD",
  //     "9. matchScore": "1.0000",
  //   },
  // ];
  const changeHandler = (event) => {
    const element = document.getElementById("input");
    if (event.target.value === "") {
      element.classList.add("background-image");
    } else {
      element.classList.remove("background-image");
    }
    setSearchValue(event.target.value);
  };
  return (
    <>
      <div className="m-auto">
        <div className="relative">
          <input
            id="input"
            type="text"
            className="search-bar p-2 pr-4 rounded-3xl bg-amber-900 outline-none placeholder-white background-image"
            placeholder="Search stocks & etfs"
            onFocus={() => setTogglePopUp(true)}
            onBlur={() => setTogglePopUp(false)}
            onChange={changeHandler}
          />
          { data && data["bestMatches"]?.length > 0 && togglePopUp && (
            <ul className="bg-amber-900 rounded-xl  mt-1 absolute search-bar z-40">
              <li className="p-2 border-b m-2">
                <Stack direction="row" spacing={2}>
                  <Chip
                    label={`All`}
                    variant="outlined"
                    style={{
                      color: "white",
                      backgroundColor: "rgb(146 64 14)",
                    }}
                  />
                  <Chip
                    label={`Stock`}
                    variant="outlined"
                    style={{
                      color: "white",
                      backgroundColor: "rgb(146 64 14)",
                    }}
                  />
                  <Chip
                    label={`Etfs`}
                    variant="outlined"
                    style={{
                      color: "white",
                      backgroundColor: "rgb(146 64 14)",
                    }}
                  />
                </Stack>
              </li>
              {data["bestMatches"].map((optionName, index) => {
                return (
                  <>
                    <li
                      className={
                        index === data?.length - 1 ? " m-2" : "border-b m-2"
                      }
                    >
                      <p className="text-white">{optionName["2. name"]}</p>
                      <p className="text-sm text-slate-400">
                        {optionName["1. symbol"]}
                      </p>
                    </li>
                  </>
                );
                // return <li>{optionName}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
export default SearchBar;
