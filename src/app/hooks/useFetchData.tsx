"use client";
import React, { useCallback, useEffect, useState } from "react";
import { getPageData, getProductByCategory } from "../action";
import { BannerDataType } from "@/lib/interface";

const useFetchData = ({ url = "", categoryUrl = "", fetchBanner = false }) => {
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState<BannerDataType>({
    title: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getPageData(url);
      if (categoryUrl != "") {
        const products = await getProductByCategory("featured");
      }
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
