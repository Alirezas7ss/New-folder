import React, { useEffect } from "react";
import CTA2 from "./CTA2";
import "./header2.css";
import Me from "../../assets/me31.png";
import HeaderSocials2 from "./HeaderSocials2";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
const Header = ({firstRef}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <header ref={firstRef} id="first">
      <div className="container header__container">
        {/* <h1 data-aos="zoom-in-down" data-aos-duration="1500">علیرضا سلطانیان</h1>
        <h5 className="text-light"  data-aos="zoom-in-down" data-aos-duration="1000">فرانت اند دولوپر</h5> */}
        <Typewriter

          className="text-xl"
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span >Hello World</span>')
              .pauseFor(25)
              .typeString(".")
              .deleteAll()
              .typeString("I'm frontend developer")
              .pauseFor(25)
              .deleteAll()
              .typeString(
                " (Nextjs & Typescript ... (another be experience page)) "
              )
              .deleteAll()
              .typeString("&")
              .deleteAll()
              .typeString("Web3 developer (solidity & Hardhat ...)")
              .start();
          }}
        />
        <CTA2 />
        <HeaderSocials2 />
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="me"
        >
          <img src={Me} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
