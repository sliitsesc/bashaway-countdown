import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 flex flex-col justify-center items-center h-screen">
      <Image
        width={600}
        height={300}
        src={"/bashaway-logo.png"}
        // className="mb-20"
      />
      <Link href="/start" className="h-20 w-full  absolute top-0"></Link>
      <Link href="/countdown" className="h-20 w-full  absolute bottom-0"></Link>
    </div>
  );
}
