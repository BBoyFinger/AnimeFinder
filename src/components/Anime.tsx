import React from 'react'
import Image from "next/image"
import {Anime} from "@/interface/Anime"

type Props = {}

const AnimeComponent = ({anime} : Anime) => {
  return (
    <div>
        <div>
            <Image src={anime.imageString} alt={anime.title}/>
        </div>
    </div>
  )
}

export default AnimeComponent