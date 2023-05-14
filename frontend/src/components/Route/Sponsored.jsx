import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="http://www.phct.com.tn/images/logopct01.png"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.cnopt.tn/cnoptMTD/themes/twentyseventeen/images/logo.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="http://www.cims.tn/wp-content/uploads/2020/11/logo-cims2021.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="http://fr.e-participation.tn/uploads/Image/52/SIT_Epart_324_SIT_EGOVTN_979_logo.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="http://www.dpm.tn/images/bann-tunis.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
