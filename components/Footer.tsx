import React from "react";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import logo from "@/assets/kocart_logo.png";
import Image from "next/image";
import footer_bg from "@/assets/footer_bg.svg";
import AppStore from "@/assets/AppStore.png";
import GooglePlay from "@/assets/GooglePlay.png";
import qrCode from "@/assets/qr_code.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      className="px-5 md:px-10 pt-14 pb-5 text-white flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url(${footer_bg.src})`,
      }}
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between mb-5">
        <Image src={logo} alt="Kocart Logo" className="w-28 h-28" />
        <div className="flex gap-10">
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Our Korean Brands</h3>
              <div className="bg-white h-[3px] rounded-full"></div>
            </div>
            <ul className="space-y-2">
              {[
                "Dr.Piel",
                "LOTTE",
                "AMUSE",
                "Samyang",
                "rom&nd",
                "Binggrae",
                "See all",
              ].map((brand, index) => (
                <li key={index}>{brand}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Our Categories</h3>
              <div className="bg-white h-[3px] rounded-full"></div>
            </div>

            <ul className="space-y-2">
              {["Clothes", "Shoes", "Bags", "Food", "Offers"].map(
                (category, index) => (
                  <li key={index}>{category}</li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Download App</h3>
          <div className="flex space-x-4 px-10">
            <Image src={qrCode} alt="App QR Code" className="w-1/2" />
            <div className="flex flex-col justify-between w-1/2">
              <Image src={AppStore} alt="App Store Link" className="w-full" />
              <Image
                src={GooglePlay}
                alt="Google Play Link"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex space-x-4 mt-4 w-full justify-evenly py-2">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
      <hr className="border-gray-700"></hr>
      <div className="flex gap-2 justify-center mt-5 text-gray-700">
        <Copyright />
        <p>Copyright KoCart 2024. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
