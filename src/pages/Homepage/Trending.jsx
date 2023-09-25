import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import Carousel from "../../components/carousel/Carousel";
import NavigationTab from "../../components/NavigationTab/NavigationTab";

const Trending = () => {
	const [activeTab, setActiveTab] = useState("day");

	const onTabChange = () => {
		if (activeTab == "day") {
			setActiveTab("week");
		} else if (activeTab == "week") {
			setActiveTab("day");
		}
	};

	const { data, loading } = useFetchData(`/trending/all/${activeTab}`);
	return (
		<div>
			<Carousel
				data={data}
				loading={loading}
				title={"Trending"}
				activeTab={activeTab}
				onTabChange={onTabChange}
				values={["day", "week"]}
			/>
		</div>
	);
};

export default Trending;
