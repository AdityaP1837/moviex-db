import React from "react";
import LazyLoadingImage from "../LazyLoadImage/LazyLoadingImage";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import dateConverter from '../../utils/dateConverter'
import {useNavigate} from 'react-router-dom';

const MovieCard = ({ imgUrl, title, releaseDate, rating, mediaType, id }) => {
    const navigate = useNavigate();
	return (
		<div
			key={id}
			className="mid-ul:w-[190px] mid-x:w-[180px] mid-sl:w-[170px]  mid-xl:w-[160px] min-xl:w-[145px] lg:w-[140px] lg:m-[7px] l:w-[120px] l:m-[5px] mid-sm:w-[110px] sm:w-[90px] w-[200px] m-[10px] relative"
		>
			<div
				className="image rounded-[10px] cursor-pointer"
				onClick={() => navigate(`/${mediaType}/${id}`)}
			>
				<LazyLoadingImage
					imgUrl={imgUrl == "" ? "src/assests/no-poster.png" : imgUrl}
					imgwidth="100%"
					imgheight="100%"
				/>
			</div>
			<div className="info">
				<div className="rating">
					<h3 className="absolute bottom-[48px] left-[-12px] text-red-600 p-[5px] rounded-tl-[10px] rounded-br-[20px] text-center font-bold text-[1.2rem] w-[55px] l:w-[50px] l:bottom-[52px] mid-sm:w-[45px] mid-sm:bottom-[49px]">
						<CircularProgressbar
							className="circularProgress"
							value={rating}
							maxValue={10}
							text={`${Number(rating).toFixed(1)}`}
							background={true}
							styles={buildStyles({
								textColor: "white",
								trailColor: "black",
								pathColor: "#da2f68",
								textSize: "28 sm:text-[10px]",
								backgroundColor: "black",
							})}
						/>
					</h3>
				</div>
				<div className="title">
					<h3 className="text-orangeText l:w-[115px] l:text-[16px] mid-sm:text-[15px] mid-sm:w-[105px] mid-sm:mt-[5px] text-[18px] ml-[5px] mt-[10px] mb-[5px] w-[185px] font-bold overflow-hidden text-ellipsis whitespace-nowrap">
						{title}
					</h3>
				</div>
				<div className="release">
					<h3 className="text-orangeLightText l:w-[115px] l:text-[13px] mid-sm:text-[10px] mid-sm:w-[105px] ml-[5px] text-sm font-[500]">
						{dateConverter(releaseDate)}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
