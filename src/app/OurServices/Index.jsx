import React, { useEffect } from "react";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import Faqs from "../../components/faqs/Faqs";
import banner from "../../images/banner.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ReviewCart from "../../components/reviewCart/ReviewCart";
import  { CartOurServices }  from "../../components/Cards";
import Aos from "aos";


export default function OurServices() {
useEffect(()=>{
  Aos.init({duration: 1000})
},[])

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="bg-[#f7f7f7] font-bold text-5xl max-sm:text-3xl max-sm:h-20 text-center py-32">
          <h1>Our Services </h1>
        </div>
        {/* --------------our services---------------- */}
        <div data-aos="fade-up" className="text-center mt-10">
          <p className=" uppercase font-bold text-md text-red-500">our services</p>
          <h1 className=" capitalize font-bold text-3xl m-4 ">what we do?</h1>
        <CartOurServices/>
        </div>
        {/* --------------Review Section ----------------- */}
        <div className="bg-[#f7f7f7] mx-auto py-20 max-sm:py-10">
          <div className="flex flex-wrap justify-center ">
            <div data-aos="fade-right">
              <p className="text-red-500 font-semibold">TOP PROPERTISE</p>
              <h1 className="text-3xl font-bold py-4">
                What's People
                <br /> Say's
              </h1>
              <p className="w-[300px] pb-4">
                Our seasoned team excels in real estate with years of successful
                market navigation, offering informed decisions and optimal
                results.
              </p>
              <div className="flex flex-wrap">
                <button className="bg-red-500 text-white text-3xl p-3 m-3">
                  <IoIosArrowBack />
                </button>
                <button className="hover:bg-red-500 hover:text-white text-3xl p-3 m-3">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div className=" max-sm:justify-center max-sm:mx-6">
              <ReviewCart />
            </div>
          </div>
        </div>

        {/* -----------------FAQ ------------------- */}
        <div data-aos="fade-up" className="text-center font-bold pt-10 ">
          <h3 className=" text-red-500 ">FAQS</h3>
          <h1 className="text-3xl max-sm:text-xl">Quick Answers To Questions</h1>
          <div>
            <Faqs />
          </div>
        </div>
        {/* ------------------Become Partners=------------------- */}
        <div>
          <div data-aos="fade-right" className=" flex flex-wrap max-sm:pl-10 w-[1250px] max-sm:w-[380px] items-center font-bold pl-10 bg-[#f7f7f7] my-20 mx-auto rounded-3xl ">
            <div>
              <p className="uppercase text-md text-red-500 py-4">
                become partners
              </p>
              <h1 className=" capitalize text-3xl pb-6 ">
                list your propertise on <br /> homeya, join us now!
              </h1>
              <button
                type="button"
                className="bg-red-500 text-white py-2 px-4 hover:bg-red-600"
              >
                Become A Hosting
              </button>
            </div>
            <div>
              <img
                className=" translate-x-24 -translate-y-5 scale-110 max-sm:-translate-x-4 max-sm:-translate-y-0"
                src={banner}
                alt=""
              />
            </div>
          </div>
        </div>
      </main>

      <footer data-aos="fade-up">
        <Footer />
      </footer>
    </div>
  );
}
