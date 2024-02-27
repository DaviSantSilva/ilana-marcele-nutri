import Image from "next/image";

export default function About() {
  return (
    <section className=" mt-32 flex flex-col items-center justify-center h-screen text-im-grey lg:grid lg:grid-cols-2 lg:gap-1 lg:p-20 lg:pr-40 ">
      <div className=" flex flex-col w-full px-10 justify-start lg:order-2 lg:col-start-2 lg:pt-48 ">
        <div className=" text-4xl w-full">Ilana Marcele</div>
        <div className=" text-xl font-light">CRN xxxxxxxxxx</div>
      </div>
      <div className=" py-4 px-10 text-md lg:order-3 lg:col-start-2">
        Figma ipsum component variant main layer. Rotate move outline flows
        layer community ipsum. Rotate scale arrange clip layout group pencil.
        Share move prototype outline ellipse boolean. Group scrolling pen share
        rectangle vector share rectangle. Variant font
      </div>
      <div className="p-4 text-lg flex justify-start w-full px-10 lg:order-4 lg:col-start-2">
        <button
          className="rounded-full text-sm lg:text-xl bg-im-green px-5 py-4 text-im-peach font-semibold shadow-sm hover:bg-im-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-im-green md:px-8 md:py-6"
          type="button"
        >
          Minha Trajetória
        </button>
      </div>
      <div className=" lg:order-1 lg:col-start-1 lg:row-span-10 lg:pl-80 lg:mr-20 md:scale-150 md:pt-40 ">
        <Image src={"/img/ilana.png"} alt="" height={502} width={335} />
      </div>
    </section>
  );
}
