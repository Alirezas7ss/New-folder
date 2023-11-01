import React from "react";
import styles from "./cv2.css";
import back from "../../assets/untitled-e2.webp";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import Cvimg from "../../assets/cvph.png";
export default function Cv() {
  return (
    <div className="cvContainer2">
      <Link to="/fa" className="linkHome2">
        خانه
      </Link>
      <a href={Cvimg} target="_blank" className="downloadCv2" download={Cvimg}>
        دانلود
      </a>
      <div className="textContainer2">
        <div className="leftText2">
          <div>
            <a href="" target="_blank">
              alirezas76s76@gmail.com : ایمیل <MdEmail />
            </a>
          </div>
          <div>
            <a href="https://t.me/ali76rez" target="_blank">
              @ali76rez : تلگرام <FaTelegramPlane />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/alireza-soltanian76-nonstop/"
              target="_blank"
            >
              alireza-soltanian76-nonstop : لینکدین <GrLinkedin />
            </a>
          </div>
          <p>
            <span> : نمونه کار</span>
            <br />
            صفحه ی وبی برای نمونه کار و فعالیت هام درست کردم که همه چی رو به طور
            منظم قرار دادم و بروزش میکنم ولی این تنها صفحه فعالیت من نیست صفحه
            های دیگه مثل گیت هاب و دریبل هستند که نمونه کارهام رو داخلشون قرار
            می دهم
            <br></br>
            <a target="_blank" href="https://www.alirezasoltanian.ir">
              https://www.alirezasoltanian.ir
            </a>{" "}
            : وبسایت
            <br />
            <a target="_blank" href="https://github.com/Alirezas7ss">
              https://github.com/Alirezas7ss
            </a>{" "}
            : گیتهاب <br />
            <a target="_blank" href="https://dribbble.com/Soltanian76">
              https://dribbble.com/Soltanian76
            </a>{" "}
            : دریبل <br />
            <br></br>
            <span> : مهارت ها </span>
            <br /> : فرانت اند
            <br /> ( Javascript ,React , Nextjs , Typescript , Redux ,
            Framer-motion , Tailwind , Bootstrap , GraphQL , PWA ,Sass ) <br />
            ( Solidity , Web3 js , Ether js , Truffle , Hardhat ) : بلاکچین
            <br />( Figma , Photoshop ) : UI/UX <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span></span>
          </p>
        </div>
        <div className="line2">
          <h1>|</h1>
        </div>
        <div className="rightText2">
          <h1>علی رضا</h1>
          <h2>سلطانیان</h2>
          <p>
            <span> : درباره ی من </span>
            <br />
            من علی رضا سلطانیان توسعه دهنده فرانت اند و وب3 با یک سال سابقه ، به
            دنیای وب ، تکنولوژی و دیجیتال مارکتینگ علاقه دارم. هر روز و هر لحظه
            در حال یادگیری هستم و این مسیر ادامه دارد...
            <br /> تمام مهارت های مورد نیاز به این رشنه در بخش مهارت ها آورده ام
            و از طریق لینک های آورده شده می توانید به سابقه ام دسترسی داشته
            باشید و با من ارتباط بگیرید
            <br></br>
            <br />
            <span> : مهارت های اضافه </span>
            <br />
            Premiere
            <br />
            Photoshop
            <br />
            Kyshot
            <br />
            Team work
            <br />
            Research <br />
          </p>
        </div>
      </div>
      <img src={back} alt="im" />
    </div>
  );
}
