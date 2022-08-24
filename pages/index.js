import Head from "next/head";
import Image from "next/image";
import {
  ViewGridIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="description of your project" />
          <meta name="theme-color" content="#000" />
          <title>Findit</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/icon.png" />
        </Head>

        {/* Header */}
        <header className="flex w-full items-center justify-between p-5 text-sm text-amber-400  md:font-medium">
          {/* Left */}
          <div className="flex space-x-4 items-center">
            
          </div>
          {/* Right */}
          <div className="flex flex-col space-x-4 items-center ">
            
            <ViewGridIcon className="h-10 w-10 p-2 cursor-pointer hover:animate-spin bg-amber-100  rounded-full" />
          
          </div>
        </header>
        {/* Body */}
       

        <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
           src="/logo/logo.png"
            className="w-225 md:w-300 md:h-100"
            width={300}
            height={100}
            alt=""
          />
   
         

          <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
       max-w-md rounded-full border border-amber-200 px-5 py-3 items-center
       sm:max-w-xl lg:max-w-2xl">
         
            
            <input
              ref={searchInputRef}
              type="text"
              className="focus:outline-none w-full flex-grow  custom-input"
            />
            <button type="submit" onClick={search} cursor-pointer>
            <SearchIcon  className=" h-8 mr-3  text-amber-500 " />
            </button>
            
          </div>

          <div className="flex flex-row  space-y-0 w-[90%] justify-center mt-8 space-x-3 sm:space-x-4">
            
            
          </div>
        </form>

        <Footer className=" group-even:focus:invisible" />
      </div>

      <div id="portal"></div>
    </>
  );
}
