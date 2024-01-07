import "../styles/globals.css";
import { QueryClientProviderWithRedux } from "../src/redux/queryClient";
import Layout from "../src/components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProviderWithRedux>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProviderWithRedux>
    </>
  );
}

export default MyApp;
