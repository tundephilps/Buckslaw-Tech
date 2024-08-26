import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

export default () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of Bizcom",
      quote:
        "Law Court Services provided exceptional guidance and support throughout my entire case. Their expertise and professionalism gave me peace of mind, and their results exceeded my expectations. I highly recommend them to anyone seeking top-notch legal representation.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "I was impressed by the level of attention and care I received from Law Court Services. They took the time to understand my unique situation and developed a tailored strategy that achieved the best possible outcome. Their dedication and expertise are truly unmatched.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "Construction Engineer",
      quote:
        "They made a difficult and complex process seem effortless. Their communication was clear, concise, and timely, and their knowledge of the law is unparalleled. I'm grateful for their help and would confidently recommend them to anyone in need of exceptional legal services.",
    },
  ];

  return (
    <section
      className="py-14 "
      id="Testimonials"
      style={{
        background:
          "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
      }}
    >
      <div className="lg:px-16 mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-indigo-600 font-semibold pb-6">
            What people are saying
          </h3>
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <figure>
                  <blockquote>
                    <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                      “{item.quote}“
                    </p>
                  </blockquote>
                  <div className="mt-6">
                    <img
                      src={item.avatar}
                      className="w-16 h-16 mx-auto rounded-full"
                    />
                    <div className="mt-3">
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
