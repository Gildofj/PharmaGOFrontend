import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "../components/_UI/Card";
import Footer from "./Footer";
import Navbar from "./Navbar";

const categories = [
  {
    image: "/games/game-1.png",
    name: "League of Legends",
  },
  {
    image: "/games/game-2.png",
    name: "Dota 2",
  },
  {
    image: "/games/game-3.png",
    name: "Counter Strike",
  },
  {
    image: "/games/game-4.png",
    name: "Apex Legends",
  },
  {
    image: "/games/game-5.png",
    name: "Fortnite",
  },
  {
    image: "/games/game-6.png",
    name: "World of Warcraft",
  },
];

export default function Home() {
  return (
    <div className="bg-neutral-10">
      <Head>
        <title>PharmaGO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="w-full flex flex-col items-center justify-center mt-10">
        <section className="w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-red-100 mb-4">Categorias</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full"
          >
            {categories.map((category, i) => (
              <SwiperSlide key={i}>
                <Card
                  key={i}
                  href="#"
                  image={category.image}
                  width={150}
                  height={150}
                  text={category.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>

      <Footer />
    </div>
  );
}
