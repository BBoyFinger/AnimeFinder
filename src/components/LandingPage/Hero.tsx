import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { BannerDataType } from "@/lib/interface";
import Image from "next/image";
interface HeroProps {
  bannerData: BannerDataType;
}
const Hero: React.FC<HeroProps> = ({ bannerData }) => {
  return (
    <div className="font-DMSans relative flex items-center flex-col mt-12">
      <Image
        src={bannerData.image}
        width={960}
        height={960}
        alt="Hero banner"
        className="w-full h-auto rounded-xl object-contain"
        quality={100}
      />
      <div className="absolute top-[80%] text-white flex flex-col items-center">
        <Link href={"mens-clothing"}>
          <Button
            variant={"secondary"}
            className="h-6 mt-2 md:h-10 md:text-[1.5rem] md:mt-4 md:p-4 font-light"
          >
            Buy Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
