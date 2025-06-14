import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

// interface StrapiImageProps {
//   src: string;
//   alt: string;
//   height: number;
//   width: number;
//   className?: string;
// }

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
}) {
  const imageUrl = getStrapiMedia(src);
  // console.log("StrapiImage called with src:", src, "and resolved URL:", imageUrl);
  if (!imageUrl) return null;
  // console.log("StrapiImage resolved URL:", imageUrl);

  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
}
