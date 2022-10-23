import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in  transform sm:hover:scale-105 hover:z-50 "
    >
      <Image
        alt="movie_poster"
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <div className="truncate max-w-md  ">{result.overview}</div>

        <h2 className="mt-1 text-2xl text-white  transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.original_title || result.title || result.name}
        </h2>
        <p className="flex item-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.release_date || result.first_air_date} .
          <HandThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
