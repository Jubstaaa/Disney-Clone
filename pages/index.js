import Head from "next/head";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Slider from "../components/Slider";
import Brands from "../components/Brands";
import Collection from "../components/Collection";
import { getSession, useSession } from "next-auth/react";
import Footer from "../components/Footer";

export default function Home({
  popularMovies,
  popularShows,
  topRatedMovies,
  topRatedShows,
}) {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Disney+</title>
        <meta
          name="description"
          content="Disney+ Clone made by İlker Balcılar"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.ico"
        />
      </Head>
      <Header />
      {!session ? (
        <HomePage />
      ) : (
        <main className="mainPage">
          <Slider />
          <Brands />
          <Collection
            results={popularMovies}
            title="Popular Movies"
            type="movie"
          />

          <Collection
            results={topRatedMovies}
            title="Top Rated Movies"
            type="movie"
          />
          <Collection
            results={popularShows}
            title="Popular Shows"
            type="show"
          />
          <Collection
            results={topRatedShows}
            title="Top Rated Shows"
            type="show"
          />
        </main>
      )}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const [
    popularMoviesRes,
    popularShowsRes,
    topRatedMoviesRes,
    topRatedShowsRes,
  ] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1&region=tr
     `),

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1&region=tr
     `),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1&region=tr`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1&region=tr
      `
    ),
  ]);
  const [popularMovies, popularShows, topRatedMovies, topRatedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      topRatedMoviesRes.json(),
      topRatedShowsRes.json(),
    ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      topRatedMovies: topRatedMovies.results,
      topRatedShows: topRatedShows.results,
    },
  };
}
