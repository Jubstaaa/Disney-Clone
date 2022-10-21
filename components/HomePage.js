import Head from "next/head";
import Faq from "./Faq";
import Devices from "./Devices";
import Features from "./Features";
import Login from "./Login";
import Promotion from "./Promotion";

function HomePage() {
  return (
    <>
      <Head>
        <title>Log in | Disney+</title>
        <meta
          name="description"
          content="Disney+ Clone made by İlker Balcılar"
        />
      </Head>
      <Login />
      <Promotion />
      <Features />
      <Faq />
      <Devices />
    </>
  );
}

export default HomePage;
