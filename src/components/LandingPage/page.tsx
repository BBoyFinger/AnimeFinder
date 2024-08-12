import React from 'react'
import Hero from './Hero'
import { BannerDataType } from '@/lib/interface'
interface LandingPageProps{
  bannerData: BannerDataType
}
const LandingPage: React.FC<LandingPageProps> = ({bannerData}) => {
  return (
    <section className='flex flex-col w-full'>
        <Hero bannerData={bannerData} />
    </section>
  )
}

export default LandingPage