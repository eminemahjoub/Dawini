import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 300px:min-h-[10vh] w-full  flex justify-center items-center mx-auto ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/shopping-cart-with-pill-foils-copy-space_23-2148533453.jpg?w=740&t=st=1680354681~exp=1680355281~hmac=92ff208008af0260ad9320d17ba9bb62fd8ddf73bbf9e26d38ba6d337ab1c8c7)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h3
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Convenient, affordable, and always here for you <br />💗 DAWINI💗
        </h3>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
