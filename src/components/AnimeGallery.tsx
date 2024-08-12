import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {};

const AnimeGallery = (props: Props) => {
  return (
    <div className="">
      <Card>
        <CardHeader>
          <Image src="" alt="" />
        </CardHeader>
        <CardContent>
          <p> Card content</p>
        </CardContent>
      </Card>
    </div>
  );
};


export default AnimeGallery;