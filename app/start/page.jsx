import Image from "next/image";
import Link from "next/link";

export default function Start() {
  return (
    <div className="p-10 flex flex-col justify-center items-center h-screen">
      <Image
        width={500}
        height={300}
        src={"/xtreme logo.svg"}
        className="mb-14 -ml-4"
      />
      <Link href="/countdown">
        {" "}
        <button className="bg-white drop-shadow-white-glow text-black rounded-2xl text-[24px] px-8 py-4 font-semibold">
          Initiate Competition
        </button>
      </Link>
      <Link href="/" className="h-20 w-full  absolute bottom-0"></Link>
      <Link href="/" className="h-20 w-full  absolute top-0"></Link>
    </div>
  );
}
