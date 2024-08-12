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
        width={600}
        height={400}
        alt="Hero banner"
        className="w-full h-auto rounded-xl object-contain"
        quality={100}
      />
      <div className="absolute top-[40%] text-white flex flex-col items-center">
        <p className="md:text-[6rem] text-[1.75rem] font-light text-center">
          {bannerData.title}
        </p>
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
