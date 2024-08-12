"use client";
import React, { useCallback, useEffect, useState } from "react";
import { getPageData } from "../action";
import { BannerDataType } from "@/lib/interface";

const useFetchData = ({ url = "", fetchBanner = false }) => {
  const [banner, setBanner] = useState<BannerDataType>({
    title: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getPageData(url);
      if (fetchBanner) setBanner(data.bannerData);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setIsLoading(false);
    }
  }, [url, fetchBanner]);

  useEffect(() => {
    getData();
  }, [getData]);
  return { banner, isLoading };
};

export default useFetchData;
