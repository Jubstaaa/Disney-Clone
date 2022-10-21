import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";
import { brands } from "./Data";

function Brand() {
  return (
    <ScrollContainer className="collection ">
      {brands.map((brand, i) => (
        <div key={i} className="brand group  ">
          <video
            autoPlay
            loop
            playsInline
            className="absolute group-hover:inline-block rounded-lg object-cover w-full h-full"
          >
            <source src={brand.video} type="video/mp4" />
          </video>

          <Image
            src={brand.image}
            width={330}
            height={210}
            objectFit="cover"
            className="bg-brand "
          />
        </div>
      ))}
    </ScrollContainer>
  );
}

export default Brand;
