import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const movie = useSelector((state) =>
    state.data.find((movie) => movie.id === parseInt(id))
  );
  if (!movie) {
    return <div>Film is not found</div>;
  }
  return (
    <div className="flex flex-col w-full justify-center items-center relative bg-black">
        <Link to='/movies' className="absolute z-20 md:top-5 top-1 md:right-5 right-1 md:text-xl text-base border-b">Diziler Sayfasına Dön</Link>
        <img src={movie.diziResim} alt="resim" className="w-full h-screen opacity-20 object-cover" />
      <div className="w-[50%] object-cover flex flex-col absolute z-10 h-screen bg-black">
        <div className="relative">
        <img src={movie.diziResim} alt="resim" className="w-full" />
        <button className="flex md:w-[200px] w-[100px]  m-2 text-lg text-center p-2 bg-white text-black items-center justify-center rounded absolute bottom-5 left-6">
              <FaPlay className="mr-2" />
              Oynat
            </button>
        </div>
        <div className="flex flex-wrap">
          <div className="p-3">
            <p className="text-5xl font-bold mb-2 text-red-700">{movie.diziIsim}</p>
            <p className="text-xl">{movie.diziAciklama}</p>
          </div>
          <div className="p-3">
            <p className="text-gray-500 mb-2">Oyuncu Kadrosu: <span className="text-white">{movie.diziOyuncuKadrosu}</span></p>
            <p className="text-gray-500">Dizi Türü: <span className="text-white">{movie.diziTur}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
