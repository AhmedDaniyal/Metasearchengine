import HeaderOption from "./HeaderOption";
import {
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
  ShareIcon
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";



export default function HeaderOptions() {

  const router = useRouter();
   
  return (
    <div className="flex w-full text-gray-700  justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px] ">
      {/* Left */}

      <div  className="flex space-x-6 justify-evenly sm:justify-start w-full sm:w-auto  ">
      
        <HeaderOption Icon={SearchIcon} title="All" selected />
        
        
        <HeaderOption Icon={PhotographIcon}  title=" Images"/>
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        
        <HeaderOption Icon={ShareIcon} title=" View Cluster" />

        
      </div>
      {/* Right */}
      <div className="hidden space-x-4  sm:inline-flex">
        
      </div>
    </div>
  );
}
