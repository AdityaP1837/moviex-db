import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Homepage/HomePage"
import Navbar from "./components/Navbar/Navbar"
import DetailsPage from "./pages/Details/DetailsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import SearchResults from "./pages/SearchResults/SearchResults";
import BrowsePage from "./pages/Explore/BrowsePage";

function App() {
	const [sidebarActive, setSidebarActive] = useState(false);

	const toggleSidebarActive = () => {
		setSidebarActive(true);
	};
	const toggleSidebarNotActive = () => {
		setSidebarActive(false);
	};

	return (
		<>
			<Navbar
				sidebarActive={sidebarActive}
				toggleSidebarActive={toggleSidebarActive}
				toggleSidebarNotActive={toggleSidebarNotActive}
			/>
			<div className="">
				<div className="content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/explore/:mediaType" element={<BrowsePage />} />
						<Route path="/search/:query" element={<SearchResults />} />
						<Route path="/:mediaType/:id" element={<DetailsPage />} />
					</Routes>
				</div>
			</div>
		</>
	);
}


export default App
