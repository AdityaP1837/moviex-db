import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import "./style.css";
import LoaderIcon from "../../components/loaderIcon/LoaderIcon";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchData from "../../hooks/useFetchData";
import { fetchApiData } from "../../utils/api";
import ResultsMovieCard from "../../components/movieCard/ResultsMovieCard";

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
	const [pageNum, setPageNum] = useState(1);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const { mediaType } = useParams();

	const { data: genresData } = useFetchData(`/genre/${mediaType}/list`);

	const fetchInitialData = () => {
		setLoading(true);
		fetchApiData(`/discover/${mediaType}`, filters).then((res) => {
			setData(res);
			setPageNum((prev) => prev + 1);
			setLoading(false);
		});
	};

	const fetchNextPageData = () => {
		fetchApiData(`/discover/${mediaType}?page=${pageNum}`, filters).then(
			(res) => {
				if (data?.results) {
					setData({
						...data,
						results: [...data?.results, ...res.results],
					});
				} else {
					setData(res);
				}
				setPageNum((prev) => prev + 1);
			}
		);
	};

	useEffect(() => {
		filters = {};
		setData(null);
		setPageNum(1);
		setSortBy(null);
		setGenres(null);
		fetchInitialData();
	}, [mediaType]);

	const onChange = (selectedItems, action) => {
		if (action.name === "sortby") {
			setSortBy(selectedItems);
			if (action.action !== "clear") {
				filters.sort_by = selectedItems.value;
			} else {
				delete filters.sort_by;
			}
		}

		if (action.name === "genres") {
			setGenres(selectedItems);
			if (action.action !== "clear") {
				let genreId = selectedItems.map((g) => g.id);
				genreId = JSON.stringify(genreId).slice(1, -1);
				filters.with_genres = genreId;
			} else {
				delete filters.with_genres;
			}
		}

		setPageNum(1);
		fetchInitialData();
	};

	return (
		<div className="explorePage">
			<div className="explorecontent">
				<div className="exploreOptions">
					<div className="Explore__title">
						Browse {mediaType === "tv" ? "Tv Shows" : "Movies"}:
					</div>

					<div className="filters">
						<Select
							isMulti
							name="genres"
							value={genres}
							closeMenuOnSelect={false}
							options={genresData?.genres}
							onChange={onChange}
							getOptionLabel={(option) => option.name}
							getOptionValue={(option) => option.id}
							placeholder="Select Genres"
							className="react-select-container genresDD"
							classNamePrefix="react-select"
						/>
						<Select
							name="sortby"
							value={sortby}
							isClearable={true}
							options={sortbyData}
							onChange={onChange}
							placeholder="Sort By"
							className="react-select-container sortbyDD"
							classNamePrefix="react-select"
						/>
					</div>
				</div>
				{loading && <LoaderIcon size={25} />}
				<>
					{data?.results?.length > 0 ? (
						<InfiniteScroll
							className="exploreData__container"
							dataLength={data?.results?.length || []}
							next={fetchNextPageData}
							hasMore={pageNum <= data?.total_pages}
							loader={<LoaderIcon size={25} />}
						>
							{data?.results?.map((item, index) => {
								if (item.media_type === "person") return;
								return (
									<ResultsMovieCard
										key={index}
										imgUrl={
											item.poster_path == undefined || item.poster_path == null
												? "/no-poster.png"
												: "https://image.tmdb.org/t/p/original" +
												  item.poster_path
										}
										title={item.title == undefined ? item.name : item.title}
										releaseDate={
											item.release_date == undefined
												? item.first_air_date
												: item.release_date
										}
										mediaType={mediaType}
										id={item.id}
									/>
								);
							})}
						</InfiniteScroll>
					) : (
						<span className="resultNotFound">Sorry, Results not found!</span>
					)}
				</>
			</div>
		</div>
	);
};

export default BrowsePage;
