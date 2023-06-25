import Image from "next/image";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row w-full lg:p-24">
        <Carousel />
      </div>
    </main>
  );
}
