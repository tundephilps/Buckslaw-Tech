import logo from "../assets/images/Logo.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export default () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "About",
    },
    {
      href: "javascript:void()",
      name: "Blog",
    },
    {
      href: "javascript:void()",
      name: "",
    },
    {
      href: "javascript:void()",
      name: "Team",
    },
    {
      href: "javascript:void()",
      name: "Careers",
    },

    {
      href: "javascript:void()",
      name: "Suuport",
    },
  ];

  const instagramUrl =
    "https:/www.instagram.com/smartstartup_ng?igsh=bWxudm93amp4dGhi&utm_source=qr";

  const whatsappNumber = "+2349094568701"; // Replace with your WhatsApp number
  const startWhatsAppChat = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, "_blank");
  };

  const recipientEmail = "Buckslaw@gmail.com";
  const subject = "Subject of the email";
  const body = "Body of the email";

  const handleClick = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer className="text-gray-500 bg-[#132554] px-4 py-5  mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img src={logo} className="w-64 h-12 sm:mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px]">
          Easily incorporate your company, get tax and banking set up, manage
          legal and compliance filings, from anywhere in the world.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className=" hover:text-gray-800">
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2000-2024 Buckslaw Technology All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link
                to="www.facebook.com"
                target="_blank"
                data-number={whatsappNumber}
                data-message="Hello, I have a question"
                onClick={startWhatsAppChat}
              >
                <FaWhatsapp className="text-green-600 h-6 w-6" />
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link to={instagramUrl} target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram className="text-red-600 h-6 w-6" />
              </Link>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <div onClick={handleClick} target="_parent">
                <SiGmail className="text-yellow-600 h-6 w-6" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};
