import SearchBar from "./SearchBar";
function Header({ children }) {
  return (
    <div>
      <div className="h-16 w-full bg-amber-800 flex items-center justify-center">
        <div className="flex items-center sm:w-[80%]">
          <h1 className="text-lg font-bold text-white hidden sm:block">GrowwStocks</h1>
          <SearchBar />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
export default Header;
