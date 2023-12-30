"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { TbHandClick } from "react-icons/tb";
import { predictContext } from "../context/PredictStore";
import "./style.css";
const Test = () => {
  //base file
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const { predictData, setPredictData } = useContext(predictContext);
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(loader);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    try {
      const response = await fetch(`${baseURL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        setPredictData(result);
        setLoader(false);
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setFormData({
      nitrogen: "",
      phosphorus: "",
      potassium: "",
      temperature: "",
      humidity: "",
      ph: "",
      rainfall: "",
    });
  };
  useEffect(() => {
    if (predictData?.found === true || predictData?.found === false) {
      router.push("/predict");
    }
  }, [predictData]);

  return (
    <div className="w-full h-[100vh] relative bg">
      <img
        className="w-full h-[100vh]"
        src="https://cdn.pixabay.com/animation/2023/01/27/14/07/14-07-26-385_512.gif"
        alt=""
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 w-auto h-auto ">
        <div>
          <h1 className="text-center text-2xl font-sans my-2 text-black">
            নিচে দেওয়া ফর্মে তথ্য দিয়ে সহায়তা করুন
          </h1>
          <div className="form_container w-[700px] mx-auto bg-slate-400 opacity-90  rounded-lg px-3 py-5 shadow-lg">
            <form action="" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nitrogen">
                    আপনার জমির মাটিতে নাইট্রোজেনের পরিমাণঃ
                  </label>
                  <br />
                  <input
                    className="my-2 w-full rounded-md py-1 outline-none px-4 border-[1px] border-sky-400"
                    type="number"
                    name="nitrogen"
                    id="nitrogen"
                    onChange={handleInputChange}
                    value={formData.nitrogen}
                    placeholder="ex: 40"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phosphorus">
                    আপনার জমির মাটিতে ফসফরাসের পরিমাণঃ
                  </label>
                  <br />
                  <input
                    className="my-2 w-full rounded-md py-1 outline-none px-4 border-[1px] border-sky-400"
                    type="number"
                    name="phosphorus"
                    id="phosphorus"
                    onChange={handleInputChange}
                    value={formData.phosphorus}
                    required
                    placeholder="ex: 30"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                  <label htmlFor="potassium">
                    আপনার জমির মাটিতে পটাশিয়ামের পরিমাণঃ
                  </label>
                  <br />
                  <input
                    className="my-2 w-full rounded-md py-1 outline-none px-4 border-[1px] border-sky-400"
                    type="number"
                    name="potassium"
                    id="potassium"
                    onChange={handleInputChange}
                    value={formData.potassium}
                    required
                    placeholder="ex: 10"
                  />
                </div>
                <div>
                  <label htmlFor="temperature">
                    আপনার জমির মাটিতে তাপমাত্রার পরিমাণঃ
                  </label>
                  <br />
                  <input
                    className="my-2 w-full rounded-md py-1 outline-none px-4 border-[1px] border-sky-400"
                    type="number"
                    name="temperature"
                    id="temperature"
                    onChange={handleInputChange}
                    value={formData.temperature}
                    placeholder="ex: 56"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                  <label htmlFor="humidity">
                    আপনার জমির মাটিতে আর্দ্রতার পরিমাণঃ
                  </label>
                  <br />
                  <input
                    className="my-2 w-full rounded-md py-1 outline-none px-4 border-[1px] border-sky-400"
                    type="number"
                    name="humidity"
                    id="humidity"
                    onChange={handleInputChange}
                    value={formData.humidity}
                    required
                    placeholder="ex: 25"
                  />
                </div>
                <div>
                  <label htmlFor="ph">আপনার জমির মাটিতে Ph পরিমাণঃ</label>
                  <br />
                  <input
                    className="my-2 w-full rounded-md py-1 outline-none px-4 border-[1px] border-sky-400"
                    type="number"
                    name="ph"
                    id="ph"
                    onChange={handleInputChange}
                    value={formData.ph}
                    required
                    placeholder="ex: 8"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="rainfall">
                  আপনার জমির মাটিতে বৃষ্টিপাতের পরিমাণঃ
                </label>
                <br />
                <input
                  className="my-2 w-full rounded-md py-1 outline-none px-4 border-[1px] border-sky-400"
                  type="number"
                  name="rainfall"
                  id="rainfall"
                  onChange={handleInputChange}
                  value={formData.rainfall}
                  required
                  placeholder="ex: 234"
                />
              </div>
              <button className="flex gap-3 justify-center items-center text-white w-full my-6 bg-gradient-to-r from-[#6017CD] to-[#0B54E7] hover:bg-gradient-to-r hover:from-[#FFA524] hover:to-[#FFDE1D] hover:text-black rounded-full py-2 px-2">
                সম্পূর্ণ তথ্য দেওয়া হয়ে গেলে এখানে ক্লিক করুন
                <span>
                  <TbHandClick />
                </span>
              </button>
            </form>
            <div className="w-full flex justify-end">
              <Link href="/">
                <button className="text-sm bg-gradient-to-r from-[#FFA524] to-[#FFDE1D] px-2 py-1 rounded-md ">
                  পূর্ববর্তী পেইজে ফিরে যান
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
