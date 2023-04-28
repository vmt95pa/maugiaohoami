import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Head>
          <title>Mầm non quốc tế Đức Tài</title>
          <link rel="shortcut icon" href="assets/images/logo/logo.png" />
          <link
            rel="apple-touch-icon-precomposed"
            href="assets/images/Favicon.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Salsa&display=swap"
            rel="stylesheet"
          />
        </Head>
        {loader && <PreLoader />}
        <Component {...pageProps} />
      </Fragment>
    </Provider>

  );
};
export default App;
