import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-red-500 flex flex-col-reverse py-1 ">
      <div  className="bg-green-700 container mx-auto p-12 max-w-screen-xl flex flex-col py-24 ">
        <div className="bg-purple-800 py-10 px-5 hidden lg:flex font-display text-2xl text-im-grey ">
          Descubra como pequenas mudanças podem levar a grandes resultados.
        </div>
        <div className="bg-orange-500 py-10 justify-center flex flex-wrap">
          <button className="rounded-full text-3xl  bg-im-green px-5 py-4 text-im-peach font-semibold shadow-sm hover:bg-im-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-im-green" type="button">Descobrir</button>
        </div>
      </div>
      <div className="pt-12">
        <Image  src="/img/food01.png" alt="food 01" width={845} height={534}/>
      </div>
      <div className="bg-purple-800 py-10 px-5 font-display text-4xl text-im-grey">
          Descubra como pequenas mudanças podem levar a grandes resultados.
        </div>
    </section>
  );
}
