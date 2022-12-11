import Image from "next/image";
import Link from "next/link";

type CardProps = {
  image: string;
  width: number;
  height: number;
  text: string;
  href: string;
};

export default function Card({ image, width, height, text, href }: CardProps) {
  return (
    <Link href={href} className="rounded-lg overflow-hidden">
      <Image
        src={image}
        width={width}
        height={height}
        alt={text}
        loading="eager"
      />

      {/* <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold block text-white">{text}</strong>
      </div> */}
    </Link>
  );
}
