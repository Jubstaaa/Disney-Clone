import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";
export default function FourOhFour() {
  return (
    <>
      <Header />
      <div className=" relative min-h-[calc(100vh-72px)] ">
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image src="/images/bg-404.jpg" layout="fill" objectFit="cover" />
          <div className="absolute w-100 h-100 inset-0 bg-black/60"></div>
        </div>
        <div className="flex justify-center items-center inset-0 absolute">
          <div className="text-center flex flex-col space-y-8  justify-center items-center max-w-screen-sm mx-auto p-8 md:p-0  ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
              The page you were looking for cannot be found.
            </h1>
            <p className=" text-gray-400 ">
              Please go to the Disney+ home page by clicking the button below
            </p>
            <Link href="/">
              <button className="bg-blue-600 uppercase  tracking-wide rounded hover:bg-[#0485ee] p-5 text-sm font-extrabold">
                Disney+ Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
