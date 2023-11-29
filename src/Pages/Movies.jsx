import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Redux/Action";
import { Link } from "react-router-dom";
import { IoBookmarkSharp } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import MovieVideo from "../assets/Movie-Video.mp4";
import VanHelsingTitle from "../assets/van-helsing-title.png";

const Movies = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const top10 = data.filter((dizi) => dizi.top10);
  const action = data.filter((aksiyon) => aksiyon.diziTur === "Aksiyon");
  const youth = data.filter((genclik) => genclik.diziTur === "Gençlik");
  const scienceFiction = data.filter(
    (bilimKurgu) => bilimKurgu.diziTur === "Bilim Kurgu"
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <div className="w-full relative">
      <Navbar />
      <div className="w-full relative">
        <video
          className="w-screen max-h-[90vh] object-cover"
          autoPlay
          loop
          muted
        >
          <source src={MovieVideo} type="video/mp4" />
        </video>
        <div className="absolute bottom-[10vh] ml-5 w-96">
          <img src={VanHelsingTitle} alt="Lucifer" className="w-96 mb-5" />
          <div className="flex ">
            <button className="flex w-24  m-2 text-lg text-center p-2 bg-white text-black items-center justify-center rounded">
              <FaPlay className="mr-2" />
              Oynat
            </button>
            <button className="flex w-52 m-2 text-lg text-center p-2 bg-gray-200 items-center justify-center bg-opacity-30 rounded">
              <GrCircleInformation className="mr-2" />
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
        <div className="absolute bottom-[10vh] right-0 p-2 w-28 h-12 text-xl  bg-gray-400 bg-opacity-20 border-l-4">
          <p>+18</p>
        </div>
      </div>
      <h3 className="text-4xl m-2 font-semibold">
        Haftanın Top 10 Dizi Listesi
      </h3>
      <div className="flex h-[300px] items-center ">
        {top10.map((dizi, index) => (
          <div key={index} className="relative mx-2 my-5 bg-black h-[170px]">
            <Link to={`/movie/detail/${dizi.id}`}>
              <img
                src={dizi.diziResim}
                alt="resim"
                className="w-[300px] h-[170px] opacity-70 hover:w-[310px] hover:h-[180px] duration-300 object-cover"
              />
            </Link>
            <p className="absolute bottom-3 left-1 text-xl">{dizi.diziIsim}</p>
            <IoBookmarkSharp className="absolute -top-1 right-0 text-5xl text-red-600" />
            <p className="absolute top-1 right-4">10</p>
          </div>
        ))}
      </div>
      <h3 className="text-4xl m-2 font-semibold">Aksiyon Dizi Listesi</h3>
      <div className="flex h-[300px] items-center ">
        {action.map((action, index) => (
          <div key={index} className="relative mx-2 my-5 bg-black">
            <Link to={`/movie/detail/${action.id}`}>
              <img
                src={action.diziResim}
                alt="resim"
                className="w-[300px] h-[170px] opacity-70 hover:w-[320px] hover:h-[190px] duration-300 object-cover"
              />
            </Link>
            <p className="absolute bottom-3 left-1 text-xl">
              {action.diziIsim}
            </p>
            {action.top10 && (
              <div>
                <IoBookmarkSharp className="absolute -top-1 right-0 text-5xl text-red-600" />
                <p className="absolute top-1 right-4">10</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <h3 className="text-4xl m-2 font-semibold">Bilim Kurgu Dizi Listesi</h3>
      <div className="flex h-[300px] items-center ">
        {scienceFiction.map((bilimKurgu, index) => (
          <div key={index} className="relative mx-2 my-5 bg-black">
            <Link to={`/movie/detail/${bilimKurgu.id}`}>
              <img
                src={bilimKurgu.diziResim}
                alt="resim"
                className="w-[300px] h-[170px] opacity-70 hover:w-[320px] hover:h-[190px] duration-300 object-cover"
              />
            </Link>
            <p className="absolute bottom-3 left-1 text-xl">
              {bilimKurgu.diziIsim}
            </p>
            {bilimKurgu.top10 && (
              <div>
                <IoBookmarkSharp className="absolute -top-1 right-0 text-5xl text-red-600" />
                <p className="absolute top-1 right-4">10</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <h3 className="text-4xl m-2 font-semibold">Gençlik Dizi Listesi</h3>
      <div className="flex h-[300px] items-center ">
        {youth.map((genclik, index) => (
          <div key={index} className="relative mx-2 my-5 bg-black">
            <Link to={`/movie/detail/${genclik.id}`}>
              <img
                src={genclik.diziResim}
                alt="resim"
                className="w-[300px] h-[170px] opacity-70 hover:w-[320px] hover:h-[190px] duration-300 object-cover"
              />
            </Link>
            <p className="absolute bottom-3 left-1 text-xl">
              {genclik.diziIsim}
            </p>
            {genclik.top10 && (
              <div>
                <IoBookmarkSharp className="absolute -top-1 right-0 text-5xl text-red-600" />
                <p className="absolute top-1 right-4">10</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
