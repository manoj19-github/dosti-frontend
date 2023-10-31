import React from "react";
import Image from "next/image";
const SignInPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="h-[85vh] w-10/12 border border-red-500 flex items-center justify-center">
        <div className="w-1/2 h-full border-red-500 border relative ">
          <div className="w-[230px] h-[120px]  flex items-center justify-center box1 absolute top-[40%] right-[26%] ">
            <div className="w-2/3 h-2/3 relative">
              <Image src="/undraw_maker_launch_crhe.svg" fill alt="logo" />
            </div>
          </div>

          <div className="w-[230px] h-[120px]  flex items-center justify-center box2 absolute top-[21%] right-[24%]">
            <div className="w-2/3 h-2/3 relative">
              <Image src="/undraw_post_online_dkuk.svg" fill alt="logo" />
            </div>
          </div>

          <div className="w-[230px] h-[120px]  flex items-center justify-center box3 absolute top-[45%] left-[5%]">
            <div className="w-2/3 h-2/3 relative">
              <Image src="/undraw_segmentation_uioo.svg" fill alt="logo" />
            </div>
          </div>

          <div className="w-[230px] h-[120px]  flex items-center justify-center box4 absolute absolute top-[30%] left-[15%]">
            <div className="w-2/3 h-2/3 relative">
              <Image src="/undraw_social_growth_d0y3.svg" fill alt="logo" />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
    </div>
  );
};

export default SignInPage;
