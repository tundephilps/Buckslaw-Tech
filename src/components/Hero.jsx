import React from "react";
import company from "../assets/images/Logo.jpeg";

const Hero = () => {
  const whatsappNumber = "+2349094568701"; // Replace with your WhatsApp number
  const startWhatsAppChat = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, "_blank");
  };

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Partners", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Team", path: "javascript:void(0)" },
  ];

  return (
    <section className="py-12">
      <div className="lg:px-16 px-4 mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5  sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm text-indigo-600 font-medium">
            Over 3000+ successful Cases...
          </h1>
          <h2 className="text-3xl text-gray-800 font-extrabold lg:text-5xl">
            Company Formation and Seamless Business Registration in Nigeria
          </h2>
          <p>
            Incorporate and register your businesses, file your annual returns,
            set up your Tax Identification Number, Tax Clearance Certificate and
            Taxpro Max, set up corporate bank accounts, manage legal and
            compliance fillings, trademarks, licensing and all necessary permits
            necessary for the Regitration, Profitability, Viability and
            Legal/Regulatory Compliance of Startups, MSME’s and
            businesses in Nigeria.
          </p>
          <button
            data-number={whatsappNumber}
            data-message="Hello, I have a question"
            onClick={startWhatsAppChat}
            class="overflow-hidden relative w-32 p-2 h-12 bg-[#132554] text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
          >
            Get Started
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span class="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
            <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <img src={company} className=" md:rounded-tl-[108px]" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
