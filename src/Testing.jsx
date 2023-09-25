import React, { useState } from "react";
import useFetchData from "./hooks/useFetchData";
import MovieCard from "./components/movieCard/MovieCard";
import NavigationTab from "./components/NavigationTab/NavigationTab";
import Slider from "react-slick";

const Testing = () => {
	const [activeTab, setActiveTab] = useState("movie");

	const onTabChange = () => {
		if (activeTab == "movie") {
			setActiveTab("tv");
		} else if (activeTab == "tv") {
			setActiveTab("movie");
		}
	};

	const settings = {
		dots: false,
		infinite: false,
		speed: 700,
		slidesToShow: 7,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 3,
					infinite: false,
					dots: false,
				},
			},
			{
				breakpoint: 1380,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 3,
				},
			},
		],
	};

	const { data, loading } = useFetchData(`/${activeTab}/top_rated`);

	return (
		<div className="mt-[5%] mx-[50px]">
			{!loading ? (
				<div className="tab-scroll">
					<Slider {...settings}>
						{data.results?.map((item) => (
							<MovieCard
								key={item.id}
								imgUrl={
									"https://image.tmdb.org/t/p/original" + item.poster_path
								}
								title={item.title == undefined ? item.name : item.title}
								releaseDate={
									item.release_date == undefined
										? item.first_air_date
										: item.release_date
								}
								rating={item.vote_average}
								mediaType={activeTab}
								id={item.id}
							/>
						))}
					</Slider>
				</div>
			) : (
				<div className="loadingSkeleton">""</div>
			)}
		</div>
	);
	// return (
	// 	<div>
	// 		<NavigationTab
	// 			title={"Top Rated"}
	// 			activeTab={activeTab}
	// 			onTabChange={onTabChange}
	// 			values={["movie", "tv"]}
	// 		/>
	// 		<div className="popularContent p-[10px] l:p-[5px]">
	// 			<div className="carousel">
	// 				<Slider {...settings}>
	// 					{!loading ? (
	// 						<div className="tab-scroll">
	// 							{data.results?.map((item) => (
	// 								<MovieCard
	// 									key={item.id}
	// 									imgUrl={
	// 										"https://image.tmdb.org/t/p/original" + item.poster_path
	// 									}
	// 									title={item.title == undefined ? item.name : item.title}
	// 									releaseDate={
	// 										item.release_date == undefined
	// 											? item.first_air_date
	// 											: item.release_date
	// 									}
	// 									rating={item.vote_average}
	// 									mediaType={activeTab}
	// 									id={item.id}
	// 								/>
	// 							))}
	// 						</div>
	// 					) : (
	// 						<div className="loadingSkeleton">""</div>
	// 					)}
	// 				</Slider>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
};

export default Testing;
