import { Header } from '@/components/Header'

const Home = () => {
  return (
    <div className="px-2">
      <Header />
      <div>
        <video autoPlay loop playsInline poster="/topmovie_720p.jpg" className="size-full">
          <source src="/topmovie_720p.mp4" type="video/mp4" />
        </video>
        <div className="block h-[1000px]"></div>
      </div>
    </div>
  )
}

export default Home
