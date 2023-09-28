import React, { useRef } from "react";
import MovieCard from "../movieCard/MovieCard";
import NavigationTab from "../NavigationTab/NavigationTab";

const skItem = () => {
	return (
		<div className="skeletonItem">
			<div className="posterBlock skeleton"></div>
			<div className="textBlock">
				<div className="title skeleton"></div>
				<div className="date skeleton"></div>
			</div>
		</div>
	);
};

const Carousel = ({
	data,
	loading,
	title,
	activeTab,
	onTabChange,
	values,
	mediaType,
}) => {
	const slider = useRef(null);
	return (
		<>
			<NavigationTab
				title={title}
				activeTab={activeTab}
				onTabChange={onTabChange}
				values={values}
				tab={slider}
			/>
			<div className="popularContent p-[10px] l:p-[5px]">
				<div className="carousel">
					{!loading ? (
						<div
							ref={slider}
							className="tab-scroll noScrollBar flex px-[5px] gap-[15px] overflow-x-auto scroll-smooth"
						>
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
									mediaType={mediaType == null ? item.media_type : mediaType}
									id={item.id}
								/>
							))}
						</div>
					) : (
						<div className="loadingSkeleton">
							{skItem()}
							{skItem()}
							{skItem()}
							{skItem()}
							{skItem()}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Carousel;
