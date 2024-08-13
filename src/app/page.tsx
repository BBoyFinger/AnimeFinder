"use client";
import LandingPage from "@/components/LandingPage/page";

import useFetchData from "./hooks/useFetchData";
import Loading from "@/components/Button/Loading";

export default function Home() {
  const { isLoading, banner } = useFetchData({
    url: "home",
    categoryUrl: "featured",
    fetchBanner: true,
  });

  console.log(banner);
  return (
    <div className="container">{isLoading ? <Loading /> : <LandingPage bannerData={banner} />}</div>
  );
}
