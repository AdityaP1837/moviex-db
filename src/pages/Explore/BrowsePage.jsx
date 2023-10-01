import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
// import LoaderIcon from "../../../components/loaderIcon/LoaderIcon";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ResultsMovieCard from "../../../components/movieCard/ResultsMovieCard";
import "./style.css";

const capitalize = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};

let filters = {};

const sortbyData = [
	{ value: "popularity.desc", label: "Popularity Descending" },
	{ value: "popularity.asc", label: "Popularity Ascending" },
	{ value: "vote_average.desc", label: "Rating Descending" },
	{ value: "vote_average.asc", label: "Rating Ascending" },
	{
		value: "primary_release_date.desc",
		label: "Release Date Descending",
	},
	{ value: "primary_release_date.asc", label: "Release Date Ascending" },
	{ value: "original_title.asc", label: "Title (A-Z)" },
];

const BrowsePage = () => {
	const [sortby, setSortBy] = useState(null);
	const [genres, setGenres] = useState(null);

	const { mediaType } = useParams();
	return (
		<div className="explorePage py-2">
			<div className="explorecontent w-full max-w-[1200px] mx-auto px-[20px] min-lg:px-[10px] min-sl:max-w-[600px] lg:max-w-[400px] l:max-w-[350px]">
				<div className="exploreOptions flex items-center justify-between flex-row mb-[25px]">
					<div className="title my-5">
						<h4 className="text-white text-3xl min-l:text-[18px]">
							Browse {capitalize(mediaType)}:
						</h4>
					</div>

					<div className="filters">
						<Select
							name="genres"
							value={genres}
							isClearable={true}
							options={sortbyData}
							placeholder="Sort By"
							className="dropdown-container genresData"
							classNamePrefix="genres"
						/>
						<Select
							name="sortby"
							value={sortby}
							isClearable={true}
							options={sortbyData}
							placeholder="Sort By"
							className="dropdown-container sortBy"
							classNamePrefix="sortBy"
						/>
					</div>
				</div>

				<div className="exploreData"></div>
			</div>
		</div>
	);
};

export default BrowsePage;
