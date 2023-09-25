import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import NavigationTab from "../../components/NavigationTab/NavigationTab";
import Carousel from "../../components/carousel/Carousel";

const Popular = () => {
	const [activeTab, setActiveTab] = useState("movie");

	const onTabChange = () => {
		if (activeTab == "movie") {
			setActiveTab("tv");
		} else if (activeTab == "tv") {
			setActiveTab("movie");
		}
	};

	const { data, loading } = useFetchData(`/${activeTab}/popular`);

	return (
		<div>
			<Carousel
				data={data}
				loading={loading}
				title={"Popular"}
				activeTab={activeTab}
				onTabChange={onTabChange}
				values={["movie", "tv"]}
			/>
		</div>
	);
};

export default Popular;
