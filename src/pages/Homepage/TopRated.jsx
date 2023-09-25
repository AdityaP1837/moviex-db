import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import Carousel from "../../components/carousel/Carousel";

const TopRated = () => {
	const [activeTab, setActiveTab] = useState("movie");

	const onTabChange = () => {
		if (activeTab == "movie") {
			setActiveTab("tv");
		} else if (activeTab == "tv") {
			setActiveTab("movie");
		}
	};

	const { data, loading } = useFetchData(`/${activeTab}/top_rated`);
	return (
		<div>
			<Carousel
				data={data}
				loading={loading}
				title={"TopRated"}
				activeTab={activeTab}
				onTabChange={onTabChange}
				values={["movie", "tv"]}
			/>
		</div>
	);
};

export default TopRated;
