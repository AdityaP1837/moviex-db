import React from "react";
import { GridLoader } from "react-spinners";

const LoaderIcon = ({ size }) => {
	return (
		<div className={`w-[200px] mx-auto text-center`}>
			<GridLoader color="#f89e00" margin={5} size={size} />;
		</div>
	);
};

export default LoaderIcon;
