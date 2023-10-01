import React from "react";
import LazyLoadingImage from "../LazyLoadImage/LazyLoadingImage";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import dateConverter from "../../utils/dateConverter";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ResultsMovieCard = ({ imgUrl, title, releaseDate, mediaType, id }) => {
	const navigate = useNavigate();
	return (
		<div key={id} className="moviecard">
			<div className="image" onClick={() => navigate(`/${mediaType}/${id}`)}>
				<LazyLoadingImage imgUrl={imgUrl} imgwidth="100%" imgheight="100%" />
			</div>
			<div className="info">
				<div className="title">
					<h3 className="text-orangeText w-full text-[18px] ml-[5px] mt-[10px] mb-[5px] font-bold overflow-hidden text-ellipsis whitespace-nowrap">
						{title}
					</h3>
				</div>
				<div className="release">
					<h3 className="text-orangeLightText w-full ml-[5px] text-sm font-[500]">
						{releaseDate == "" ||
						releaseDate == null ||
						releaseDate == undefined
							? "No Release Date"
							: dateConverter(releaseDate)}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default ResultsMovieCard;
