import React from "react";
import Head from "next/head";
import Header from "./Header";
import HomePage from "./HomePage";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/solid";
import Recommended from "./Recommended";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";

function Context({ result, recommended, session }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const [showPlayer, setShowPlayer] = useState(false);
  console.log(result);
  const youtubeKey =
    result.videos.results.length > 1 ? result.videos.results[0].key : null;
  const router = useRouter();
  const type = router.route.split("/").reverse()[1];
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
    if (!result.id) {
      router.push("/404");
    }
    const closeVideo = (e) => {
      if (e.path[0].tagName !== "BUTTON" && e.path[1].tagName !== "BUTTON") {
        setShowPlayer(false);
      }
    };

    document.body.addEventListener("click", closeVideo);
    return () => document.body.removeEventListener("click", closeVideo);
  });
  return (
    <div>
      <Head>
        <title>{result.title || result.original_name} | Disney+</title>
        <meta name="description" content={result.overview} />
      </Head>
      <Header />
      {!session ? (
        <HomePage />
      ) : (
        <section className="relative z-20">
          <div className="relative min-h-[calc(100vh-72px)] ">
            <Image
              src={`${BASE_URL}${result.poster_path || result.backdrop_path}`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute w-100 h-100 inset-0 bg-context"></div>
          </div>
          <div className="absolute inset-28 md:inset-y-auto md:top-44 inset-x-4 md:inset-x-12 space-y-6 z-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {result.title || result.original_name}
            </h1>
            <p className="text-xs md:text-sm">
              {(result.release_date && result.release_date.split("-").at(0)) ||
                (result.first_air_date &&
                  result.first_air_date.split("-").at(0)) ||
                "Unknown"}{" "}
              •{" "}
              {result.runtime
                ? Math.floor(result.runtime / 60) +
                  "h " +
                  (result.runtime % 60) +
                  "m"
                : result.seasons
                ? result.seasons.length + " Season"
                : "undefined"}
            </p>
            <p className="text-xs md:text-sm">
              {result.genres &&
                result.genres.map((genre, i, arr) => {
                  if (arr.length - 1 === i) {
                    return genre.name;
                  } else {
                    return genre.name + ",";
                  }
                })}
            </p>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button
                className="contextButton bg-[#f9f9f9]
               text-black"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  className="h-6 md:h-8"
                  src="/images/play-icon-black.svg"
                  alt=""
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <PlusIcon className="h-6" />
              </div>
              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <img src="/images/group-icon.svg" alt="" />
              </div>
            </div>
            <h4 className="block text-sm md:text-lg max-w-4xl">
              {result.overview}
            </h4>
            <Recommended recommended={recommended} type={type} />
          </div>
          {showPlayer && (
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-20"></div>
          )}
          <div
            className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
              showPlayer ? "block z-20" : "hidden"
            }`}
          >
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${youtubeKey}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Context;
