/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import * as React from "react";
import logo from "../../../assets/images/logo-white.svg";
export type SideDisplayProps = {
  header?: string;
  content?: string;
};

export const SideDisplay = <
  PROPS extends SideDisplayProps
>({}: PROPS): JSX.Element => {
  return (
    <div
      className={`flex items-start justify-center bg-[url('https://img.freepik.com/free-vector/gradient-purple-wavy-background_52683-74031.jpg?w=900&t=st=1667887208~exp=1667887808~hmac=7237cf35ae4955671d1696dbd872f63a39558f9fe9ec2d48bf93a64c3de6f20a')] bg-cover`}
      style={{ width: "550px", height: "832px" }}
    >
      <div className="flex-row mt-24 ">
        <div className="justify-center">
          <img className="w-80 h-20 " src={logo} />
        </div>
        <div
          className="flex flex-col mt-12 space-y-2 items-center justify-end"
          style={{ width: "432px", height: "206px" }}
        >
          <p
            className={`text-4xl font-bold tracking-wider text-white`}
            style={{ width: "432px" }}
          >
            Welcome guest!
          </p>
          <p
            className={`text-xl tracking-wider text-white`}
            style={{ width: "432px", height: "143px" }}
          >
            ut eu sem integer vitae justo eget magna fermentum iaculis eu non
            diam phasellus vestibulum lorem sed risus ultricies tristique
          </p>
        </div>
      </div>
    </div>
  );
};
