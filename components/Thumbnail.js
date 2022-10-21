import Image from "next/image";
import { useRouter } from "next/router";

const Thumbnail = ({ result, type }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const router = useRouter();
  return (
    <div
      className="thumbnail group"
      onClick={() => router.push(`/${type}/${result.id}`)}
    >
      <Image
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkcCisBwACKwEyDVJacgAAAABJRU5ErkJggg=="
      />
      <div className="absolute h-full w-full  items-center text-center justify-center flex md:hidden  group-hover:flex rounded-lg object-cover p-6 bg-[#040714] bg-opacity-30 md:bg-opacity-60">
        {result.name || result.title}
      </div>
    </div>
  );
};

export default Thumbnail;
