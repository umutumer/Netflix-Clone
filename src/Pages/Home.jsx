import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import HomeVideo from "../assets/Home-Video.mp4";
import LuciTitle from "../assets/lucifer-title-logo.png";
import { GrCircleInformation } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Action";
import { IoBookmarkSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const top10 = data.filter((film) => film.top10);
  const comedy = data.filter((komedi) => komedi.filmTur === "Komedi");
  const scienceFiction = data.filter((bilimKurgu) => bilimKurgu.filmTur === "Bilim Kurgu");

  useEffect(() => {
    dispatch(fetchData());
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
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <div className="absolute bottom-[10vh] ml-5 w-96">
          <img src={LuciTitle} alt="Lucifer" className="w-96 mb-5" />
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
        Haftanın Top 10 Film Listesi
      </h3>
      <div className="flex h-[300px] items-center ">
        {top10.map((film, index) => (
          <div key={index} className="relative mx-2 my-5 bg-black h-[170px]">
            <Link to={`/detail/${film.id}`}>
            <img
              src={film.filmResim}
              alt="resim"
              className="w-[300px] h-[170px] opacity-70 hover:w-[310px] hover:h-[180px] duration-300 object-cover"
            />
            </Link>
            <p className="absolute bottom-3 left-1 text-xl">{film.filmIsim}</p>
            <IoBookmarkSharp className="absolute -top-1 right-0 text-5xl text-red-600" />
            <p className="absolute top-1 right-4">10</p>
          </div>
        ))}
      </div>
      <h3 className="text-4xl m-2 font-semibold">Komedi Film Listesi</h3>
      <div className="flex h-[300px] items-center ">
        {comedy.map((komedi, index) => (
          <div key={index} className="relative mx-2 my-5 bg-black">
            <Link to={`/detail/${komedi.id}`}>
            <img
              src={komedi.filmResim}
              alt="resim"
              className="w-[300px] h-[170px] opacity-70 hover:w-[320px] hover:h-[190px] duration-300 object-cover"
            />
            </Link>
            <p className="absolute bottom-3 left-1 text-xl">{komedi.filmIsim}</p>
            {komedi.top10 && (
              <div>
                <IoBookmarkSharp className="absolute -top-1 right-0 text-5xl text-red-600" />
                <p className="absolute top-1 right-4">10</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <h3 className="text-4xl m-2 font-semibold">Bilim Kurgu Film Listesi</h3>
      <div className="flex h-[300px] items-center ">
        {scienceFiction.map((bilimKurgu, index) => (
          <div key={index} className="relative mx-2 my-5 bg-black">
            <Link to={`/detail/${bilimKurgu.id}`}>
            <img
              src={bilimKurgu.filmResim}
              alt="resim"
              className="w-[300px] h-[170px] opacity-70 hover:w-[320px] hover:h-[190px] duration-300 object-cover"
            />
            </Link>
            <p className="absolute bottom-3 left-1 text-xl">{bilimKurgu.filmIsim}</p>
            {bilimKurgu.top10 && (
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

export default Home;
