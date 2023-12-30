import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
// import say_hi from "../assets/images/home/say_hi.gif";
const HomePage = () => {
  return (
    <div className="bg-gradient-to-r flex justify-center items-center from-[#6017CD] to-[#0B54E7] w-full h-[100vh]">
      <div className="md:w-[600px]  mx-auto">
        <div className="flex justify-center">
          <img
            className="w-[200px] h-[200px] rounded-full ring-2"
            src="./assets/images/home/say_hi.gif"
            alt=""
          />
        </div>
        <div className="text-center my-6">
          <h4 className="text-2xl font-mono text-center text-white">
            হ্যালো, আমি AI মডেল বেইসড একটি রোবট। আপনার জমির মাটির ধরন অনুযায়ী
            আমি বলে দিতে পারবো আপনার জমিতে কি ধরনের ফসল চাষ করলে বেশি লাভবান
            হবেন। ধন্যবাদ ।
          </h4>

          <Link href="/form">
            <button className="flex justify-center items-center gap-2 px-4 py-2 rounded-full my-6 mx-auto bg-gradient-to-r from-[#FFA524] to-[#FFDE1D] text-black">
              চলুন চেষ্টা করি{" "}
              <span>
                <IoArrowForward />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
