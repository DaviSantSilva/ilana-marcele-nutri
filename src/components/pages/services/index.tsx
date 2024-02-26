import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { CARDS } from "./cards";
import Link from "next/link";

export default function Services() {
  return (
    <section className="py-20">
      <div>
        Descubra nossos serviços personalizados em nutrição e bem-estar,
        nutrição infantil e segurança alimentar.
      </div>
      <div className="hidden lg:flex">
      <div className="w-full grid place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {CARDS.map(({ title, description, image, path }) => (
          <Link
            href={path}
            scroll={false}
            className="bg-white w-full h-4/5 relative flex flex-col rounded-lg shadow-sm drop-shadow-2xl cursor-pointer lg:transition lg:ease-in-out lg:hover:-translate-y-1 lg:hover:scale-105 lg:duration-500"
            key={`DifferentialsPoints_${title}`}
          >
            <div className="bg-gradient-to-r from-secondary-800 flex items-center justify-center pt-8 h-12 mb-4 rounded-lg">
              <div className="mt-5 h-20 w-20 flex items-center justify-center scale-200 rounded-full shadow-lg bg-primary drop-shadow-sm">
                <div className="text-7xl">{image}</div>
              </div>
            </div>
            <div className="p-8">
              <h1 className="font-website_title font-semibold text-xl text-secondary my-4 line-clamp-1 text-center">
                {title}
              </h1>
              <div className="flex flex-col indent-1">
                <p className="text-secondary font-website font-extralight text-sm w-full text-justify overflow-y-auto h-56 my-4 p-2 overflow-hidden tracking-tight ">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full my-4 flex fixed bottom-0 justify-center items-center px-8">
              <p className="text-blue-600 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500">
                Saiba Mais
              </p>
            </div>
          </Link>
        ))}
      </div>
      </div>
      <div className="lg:hidden">
        <Swiper
          spaceBetween={60}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className=" mySwiper min-h-90 w-4/5  h-full flex drop-shadow-2xl

"
        >
          {CARDS.map(({ title, description, image, path }) => (
            <SwiperSlide
              key={`Slide_${title}`}
              className="bg-im-white mt-4 text-center  rounded-lg "
            >
              <div className="bg-im-green flex items-center justify-center pt-8 h-16 mb-4 rounded-lg">
                <div className="mt-5 h-20 w-20 flex items-center justify-center scale-200 rounded-full shadow-lg bg-im-white  drop-shadow-sm">
                  <div className="text-7xl">{image}</div>
                </div>
              </div>
              <div className="p-8">
                <h1 className="font-website_title font-semibold text-xl text-secondary my-4 line-clamp-1 text-center">
                  {title}
                </h1>
                <div className="flex flex-col indent-1">
                  <p className="text-secondary font-website text-sm w-full text-justify overflow-y-auto h-56 my-4 p-2 overflow-hidden tracking-tight">
                    {description}
                  </p>
                </div>
              </div>
              <div className="w-full my-4 flex fixed bottom-0 justify-center items-center pb-4 px-8">
                <p className="text-blue-600 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500">
                  Saiba Mais
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
