import Image from "next/image";

export default function Home() {
  return (
    <section className=" flex flex-col-reverse py-1 lg:flex-row lg:pt-52 lg:mr-40 ">
      <div
        className=" container mx-auto p-auto max-w-screen-xl flex flex-col  lg:w-1/2 justify-center 
       "
      >
        <div className=" py-10 px-5 hidden lg:flex font-display text-6xl text-im-grey ">
          Descubra como pequenas mudanças podem levar a grandes Resultados.
        </div>
        <div className=" p-4 md:pt-16 justify-center flex flex-wrap">
          <button
            className="rounded-full text-2xl  bg-im-green px-5 py-4 text-im-peach font-semibold shadow-sm hover:bg-im-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-im-green md:text-5xl md:px-8 md:py-6"
            type="button"
          >
            Descobrir
          </button>
        </div>
      </div>
      <div className=" pt-12 lg:scale-125 flex ">
        <Image src="/img/food01.png" alt="food 01" width={845} height={534} />
      </div>
      <div className=" py-10 px-1.5 font-display text-3xl text-im-grey lg:hidden md:px-5 md:py-20 md:text-5xl ">
        Descubra como pequenas mudanças podem levar a grandes{" "}
        <strong className="text-im-green"> Resultados.</strong>
      </div>
    </section>
  );
}
