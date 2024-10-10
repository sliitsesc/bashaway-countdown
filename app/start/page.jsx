import Image from "next/image";
import Link from "next/link";

export default function Start() {
  return (
    <div className="p-10 flex flex-col justify-center items-center h-screen">
      <Image
        width={500}
        height={300}
        src={"/bashaway-logo.png"}
        className="mb-14"
      />
      <Link href="/countdown">
        {" "}
        <button className="bg-black text-white rounded-full text-[28px] px-6 py-3">
          Start Competition
        </button>
      </Link>
      <Link href="/" className="h-20 w-full  absolute bottom-0"></Link>
      <Link href="/" className="h-20 w-full  absolute top-0"></Link>
    </div>
  );
}
