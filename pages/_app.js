import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
// import "../public/css/navbar.css";
import "../public/css/index.css";
import "../public/css/navbar.css";
import "../public/css/about.css";
import "../public/css/ourproducts.css";
import "../public/css/contact.css";
import "../public/css/category.css";
import Footer from "@/component/Footer";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingOverlay from "react-loading-overlay-ts";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loader, setloader] = useState(false);
  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      setloader(true);
      // console.log("url", url);
    });
    router.events.on("routeChangeComplete", (url) => {
      setloader(false);
      // console.log("url", url);
    });
    router.events.on("routeChangeError", (url) => {
      setloader(false);
    });
  }, []);
  return (
    <div id="page">
       <LoadingOverlay
        active={loader}
        spinner
        styles={{
          content: {
            height: "auto",
            width: "100%",
          },
          spinner: (base) => ({
            ...base,
            position: "fixed",
            height: "100%",
            left: "42%",
            right: "42%",
          }),
        }}
      ><Navbar />
      <Component {...pageProps} />
      {/* <Navbar1/> */}
      <Footer/>
      </LoadingOverlay>
      
    </div>
  );
}
