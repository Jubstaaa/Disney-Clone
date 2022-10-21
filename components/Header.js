import Image from "next/image";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  const popupCenter = (url, title) => {
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;
    const width =
      window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

    const height =
      window.innerHeight ??
      document.documentElement.clientHeight ??
      screen.height;

    const systemZoom = width / window.screen.availWidth;

    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;

    var newWindow = window.open(
      url,
      title,
      `width=${500 / systemZoom},height=${
        550 / systemZoom
      },top=${top},left=${left}`
    );

    newWindow?.focus();
  };

  return (
    <header className="header">
      <Image
        priority={true}
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      />
      {session && (
        <div className=" mx-10 flex items-center space-x-6">
          <a
            className="header-link group "
            onClick={() => {
              router.push("/");
            }}
          >
            <HomeIcon className=" h-4 " />
            <span className="span hidden md:block">Home</span>
          </a>
          <a className="header-link group">
            <MagnifyingGlassIcon className=" h-4 " />
            <span className="span hidden md:block">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className=" h-4 " />
            <span className="span hidden md:block">Watchlist</span>
          </a>
          <a className="header-link group hidden md:flex">
            <StarIcon className=" h-4 " />
            <span className="span hidden md:block">Originals</span>
          </a>
          <a className="header-link group hidden md:flex">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span ">Movies</span>
          </a>
          <a className="header-link group hidden md:flex">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span ">Series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          className="ml-auto uppercase border px-5 py-2.5 rounded font-medium tracking-wider hover:bg-white hover:text-black transition duration-200 ease-menu"
          onClick={() => popupCenter("/google-signin", "Sample Sign In")}
        >
          Log in
        </button>
      ) : (
        <div className="ml-auto flex items-center justify-center space-x-4">
          <span className="hidden md:block">{session.user.name}</span>

          <img
            onClick={signOut}
            src={session.user.image}
            className="  h-12 w-12 rounded-full object-cover cursor-pointer"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
