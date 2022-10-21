import { GlobeAltIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col space-y-4 justify-center items-center	">
        <Image src="/images/logo.svg" width={80} height={40} />
        <div className="flex space-x-6  justify-center items-center  whitespace-nowrap flex-wrap text-xs text-gray-400 font-semibold ">
          <div className="flex space-x-2  justify-center items-center mt-3 hover:text-white hover:underline">
            <GlobeAltIcon className="h-5" />
            <select
              className="text-gray-400 bg-transparent hover:text-white hover:underline"
              href="#"
              defaultValue={"en"}
            >
              <option className="text-black " value="en">
                English
              </option>
              <option className="text-black" value="tr">
                Türkçe
              </option>
            </select>
          </div>
          <a className="hover:text-white mt-3" href="#">
            Subscriber Agreement
          </a>
          <a className="hover:text-white mt-3" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-white mt-3" href="#">
            EMEA Privacy Rights
          </a>
          <a className="hover:text-white mt-3" href="#">
            Cookies Policy
          </a>
          <a className="hover:text-white mt-3" href="#">
            Interest-Based Ads
          </a>
          <a className="hover:text-white mt-3" href="#">
            Supported Devices
          </a>
          <a className="hover:text-white mt-3" href="#">
            Help Centre
          </a>
          <a className="hover:text-white mt-3" href="#">
            About Us
          </a>
          <a className="hover:text-white mt-3" href="#">
            Manage Preferences
          </a>
        </div>
        <p className="text-xs text-gray-400 text-center py-10 ">
          © 2022 Disney and its related entities. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
