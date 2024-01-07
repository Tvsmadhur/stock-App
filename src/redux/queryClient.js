import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query-devtools";
import { Provider } from "react-redux";
import { useStore } from "react-redux";
import { store } from "./store.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export const QueryClientProviderWithRedux = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </Provider>
  </QueryClientProvider>
);
