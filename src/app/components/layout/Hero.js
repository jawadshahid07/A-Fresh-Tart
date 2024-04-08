import Right from "../icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero bg-extra md:mt-4 px-5 mb-5">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Start your day<br />
          with&nbsp;
          <span className="text-primary">
            A Fresh Tart
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Bring a little sweetness in your life with our selection of desserts
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/cake.png'} layout={'fill'} objectFit={'contain'} alt={'Cake'} />
      </div>
    </section>
  );
}