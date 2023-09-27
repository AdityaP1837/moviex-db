import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const capitalize = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};

const NavigationTab = ({ title, activeTab, onTabChange, values, tab }) => {
	const navigation = (dir) => {
		const container = tab.current;
		const scrollAmount =
			dir === "left"
				? container.scrollLeft - (container.offsetWidth + 5)
				: container.scrollLeft + (container.offsetWidth + 5);

		container.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<div className="navigation flex items-center justify-between p-[10px] l:p-[5px]">
			<h3 className="text-black-lighter ml-[18px] l:ml-[10px] l:text-[22px] mid-sm:text-[20px] mid-sm:ml-[5px] text-[25px] font-[800]">
				{title}
			</h3>
			<div className="tools flex items-center gap-7">
				<div className="swtichTabs flex items-center bg-[#000000] rounded-[10px]">
					<h3
						className={`lg:w-[55px] lg:text-[16px] l:w-[50px] l:text-[14px] w-[75px] text-[18px] text-center text-black-light font-bold rounded-lg p-[5px] cursor-pointer ${
							activeTab == values[0] ? "activeTab" : ""
						}`}
						onClick={onTabChange}
					>
						{capitalize(values[0])}
					</h3>
					<h3
						className={`lg:w-[55px] lg:text-[16px] l:w-[50px] l:text-[14px] w-[75px] text-[18px] text-center text-black-light font-bold rounded-lg p-[5px] cursor-pointer ${
							activeTab == values[1] ? "activeTab" : ""
						}`}
						onClick={onTabChange}
					>
						{capitalize(values[1])}
					</h3>
				</div>
				<div className="navigateIcons min-l:hidden flex items-center gap-3">
					<h4
						onClick={() => navigation("left")}
						className="text-[25px] cursor-pointer text-black-lighter f-[400] hover:text-black-hover hover:transition-all ease-in"
					>
						<FaArrowLeft />
					</h4>
					<h4
						onClick={() => navigation("right")}
						className="text-[25px] cursor-pointer text-black-lighter f-[400] hover:text-black-hover hover:transition-all ease-in"
					>
						<FaArrowRight />
					</h4>
				</div>
			</div>
		</div>
	);
};

export default NavigationTab;
