// app/page.tsx
'use client'
import Banner from './components/Banner'
#import Carousel from './components/Carousel'
import DownloadApk from './components/DownloadApk'
import GamerComments from './components/GamerComments'


export default function Page() {
  return (
    <>
      {/* <Carousel /> */}
      <Banner />
      <DownloadApk />
      <GamerComments />

    </>

  )
}
