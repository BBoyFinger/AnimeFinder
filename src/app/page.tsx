"use client"
import LandingPage from "@/components/LandingPage/page";

import useFetchData from "./hooks/useFetchData";


export default function Home() {
  const {isLoading, banner} = useFetchData({url: "home", fetchBanner: true});
  console.log(banner);
  return (
    <div> 
      <LandingPage bannerData={banner} />
    </div>
  );
}
