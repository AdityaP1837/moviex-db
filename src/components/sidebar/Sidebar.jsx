import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidMoviePlay, BiCalendar } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
	return (
		<div className="sidebar hidden absolute top-[70px] left-0 w-[200px] bg-blue-darker mt-[10px] rounded-[10px] py-[5px]">
			{/* <div className="toggleBtn">

                <MdKeyboardArrowLeft/>
                <MdKeyboardArrowRight/>
            </div> */}
			<ul className="flex flex-col list-none gap-y-[50px] ">
				<li className="text-pink text-3xl text-center mx-auto">
					<FaHome />
				</li>
				<li className="text-pink text-3xl text-center mx-auto">
					<BiSolidMoviePlay />
				</li>
				<li className="text-pink text-3xl text-center mx-auto">
					<PiTelevisionSimpleFill />
				</li>
				<li className="text-pink text-3xl text-center mx-auto">
					<BiCalendar />
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
