"use client";
import Link from "next/link";
import { useContext } from "react";
import { predictContext } from "../context/PredictStore";
import { cropsImages } from "../utilities/Images";
import "./style.css";

const Predction = () => {
  const { predictData, setPredictData } = useContext(predictContext);
  const handleGoBack = () => {
    setPredictData([]);
  };

  return (
    <div className="relative pt-4 bg-gradient-to-r h-[100vh] from-[#6017CD] to-[#0B54E7] ">
      <div className="crops_container  border-[1px] bg-stone-500 border-stone-400 mx-auto px-6 pb-6 pt-2 w-[650px] rounded-lg  shadow-lg">
        {cropsImages.map((item) =>
          item.name === `${predictData?.value}` ? (
            <div>
              <h1 className="text-2xl opacity-90 text-center mb-3 py-2 text-green-600 bg-orange-300 rounded-lg">
                আপনার জমিতে {item.bengali} চাষ করলে সবথেকে বেশি লাভবান হবেন।
              </h1>
              <div className="imgContainer">
                {item.images.map((img, index) => (
                  <img
                    className="w-[200px] h-[200px] shadow-lg border-[1px] border-blue-300 rounded-md"
                    key={index}
                    src={img}
                    alt=""
                  />
                ))}
                <div className="w-[200px] bg-orange-100 text-green-700 h-[200px] border-[1px] border-blue-800 rounded-lg ">
                  <Link href="/form">
                    <button onClick={handleGoBack} className="w-full h-full">
                      পুনরায় দেখার জন্য এখানে ক্লিক করুন
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="absolute top-[15%]">
        <img
          className="w-[300px]"
          src="./assets/images/home/farmer1.png"
          alt=""
        />
      </div>
      <div className="absolute top-[15%] right-0">
        <img
          className="w-[300px]"
          src="./assets/images/home/farmer2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Predction;
