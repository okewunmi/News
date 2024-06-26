import React from "react";
import { Wrapper } from "./styles";
import Link from "next/link";
import { SiGooglemaps } from "react-icons/si";
import { VscSignIn } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { AiFillNotification } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";
import { FaBusinessTime, FaBookmark } from "react-icons/fa6";
import { MdSportsEsports, MdScience } from "react-icons/md";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { RiHealthBookFill, RiCriminalFill } from "react-icons/ri";

import { GrTechnology } from "react-icons/gr";
import { PiTelevisionFill } from "react-icons/pi";
import { RiGovernmentFill } from "react-icons/ri";

const Menu = () => {
  return (
    <Wrapper>
      <div className="container">
        <header>
          <Link href="/">
            <div className="logo">
              <GiNewspaper />
            </div>
          </Link>
          {/* <div className="link">
            <Link href="/home">
              <IoMdHome className="icon" />
            </Link>
          </div> */}
          <div className="link">
            <Link href="/politics">
              <RiGovernmentFill />
            </Link>
          </div>
          {/* <div className="link">
            <Link href="/crime">
              <RiCriminalFill />
            </Link>
          </div> */}

          <div className="link">
            <Link href="/business">
              <FaBusinessTime />
            </Link>
          </div>
          <div className="link">
            <Link href="/technology">
              <GrTechnology />
            </Link>
          </div>

          <div className="link">
            <Link href="/sport">
              <MdSportsEsports />
            </Link>
          </div>
          <div className="link">
            <Link href="/entertainment">
              <PiTelevisionFill />
            </Link>
          </div>
          <div className="link">
            <Link href="/science">
              <MdScience />
            </Link>
          </div>

          <div className="link">
            <Link href="/health">
              <RiHealthBookFill />
            </Link>
          </div>
          <div className="link">
            <Link href="/bookmark">
              <FaBookmark />
            </Link>
          </div>
          <div className="link">
            <Link href="#">
              <FiSearch />
            </Link>
          </div>
        </header>

        <div className="link">
          <Link href="#">
            <VscSignIn />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Menu;
