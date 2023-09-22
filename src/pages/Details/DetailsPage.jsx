import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";
import LazyLoadingImage from "../../components/LazyLoadImage/LazyLoadingImage";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { runtimeModify } from "../../utils/runtime";
import dateConverter from "../../utils/dateConverter";
import CastList from "./CastList";
import VideosList from "./VideosList";
import { FaPlay } from "react-icons/fa";
import VideoPopUp from "../../components/videoPopUp/VideoPopUp";

const CreditsRow = ({ title, value }) => {
	return (
		<div className="itemContainer flex items-center mr-[25px] mid-sl:mr-[18px] min-l:mr-[10px] text-white">
			<h4 className="item mr-[5px] opacity-100">{title}</h4>
			<h4 className="item opacity-50">{value}</h4>
		</div>
	);
};

const DetailsPage = () => {
	const { id, mediaType } = useParams();
	const { data, loading } = useFetchData(`/${mediaType}/${id}`);
	const { data: credits, loading: creditsLoading } = useFetchData(
		`/${mediaType}/${id}/credits`
	);
	const { data: videos, loading: videosLoading } = useFetchData(
		`/${mediaType}/${id}/videos`
	);
	const trailer = videos?.results?.filter((v) => v.type === "Trailer");
	const directorList = credits?.crew?.filter((f) => f.job === "Director");

	const [videoId, setVideoId] = useState("");
	const [showVideo, setShowVideo] = useState(false);

	const hidePopup = () => {
		setShowVideo(false);
        setVideoId(null);
	};

	return (
		<div className={`w-[100%] h-[100vh]`}>
			<div className="backdrop w-full h-full absolute top-[60px] left-0 opacity-10 overflow-hidden">
				<img
					className="object-cover w-full h-full"
					src={"https://image.tmdb.org/t/p/original" + data.backdrop_path}
					alt=""
				/>
			</div>
			<div className="content relative w-[1200px] mid-l:w-[1050px] mid-x:w-[1000px] mid-sl:w-[950px] mid-xl:w-[850px] min-l:w-[770px] min-sl:w-[650px] lg:w-[95%] mx-auto mt-5">
				<div className="Hero flex items-center gap-10 min-sl:gap-7 lg:flex-col">
					<div className="left">
						<div className="hero-img w-[330px] mid-x:w-[300px] mid-sl:w-[280px] min-l:w-[260px] min-sl:w-[250px] lg:w-[200px]">
							<LazyLoadingImage
								imgUrl={
									"https://image.tmdb.org/t/p/original" + data.poster_path
								}
								imgwidth={"100%"}
								imgheight={"100%"}
							/>
						</div>
					</div>

					<div className="right mt-3">
						<div className="title text-white mb-[10px] lg:ml-[8px]">
							<h4 className="text-4xl mid-xl:text-3xl min-sl:text-2xl font-bold">
								{data.title ? data.title : data.name}
							</h4>
							<span className="text-xl min-sl:text-lg italic opacity-[0.6]">
								{data.tagline}
							</span>
						</div>
						<div className="genres lg:ml-[5px]">
							<ul className="flex list-none items-center gap-4">
								{data.genres?.map((genre) => (
									<li
										className="bg-pink pt-[2px] px-[5px] rounded-[10px]"
										key={genre.id}
									>
										<h4 className="text-black font-semibold mid-sl:text-[14px]">
											{genre.name}
										</h4>
									</li>
								))}
							</ul>
						</div>
						<div className="rating_trailer my-[25px]  lg:ml-[5px]">
							<div className="flex items-center gap-10 min-sl:gap-7">
								<div className="rating w-[8%] min-sl:w-[45px]">
									<CircularProgressbar
										value={Number(data.vote_average).toFixed(1)}
										maxValue={10}
										text={`${Number(data.vote_average).toFixed(1)}`}
										styles={buildStyles({
											textColor: "white",
											trailColor: "black",
											pathColor: "#da2f68",
											textSize: "29",
										})}
									/>
								</div>

								<div
									className="playBtn flex items-center gap-[10px] cursor-pointer"
									onClick={() => {
										setVideoId(trailer[0].key);
										setShowVideo(true);
									}}
								>
									<span className="text-4xl mid-sl:text-2xl min-sl:text-xl text-white opacity-70 ">
										<FaPlay />
									</span>
									<h4 className="text-white opacity-90 text-2xl min-sl:text-xl">
										Watch Trailer
									</h4>
								</div>
							</div>
						</div>
						<div className="overview my-[25px] mid-xl:my-[20px] text-white">
							<h4 className="text-lg font-[600] opacity-90">Overview</h4>
							<p className="text-justify opacity-80 mt-[10px] leading-[1.4]">
								{data.overview}
							</p>
						</div>

						<div className="credits">
							<div className="flex items-center py-[15px] lg:flex-wrap gap-[20px]">
								<CreditsRow title="Status:" value={data.status} />
								{!mediaType == "tv" ? (
									<CreditsRow
										title="Release Date:"
										value={dateConverter(data.release_date)}
									/>
								) : (
									<CreditsRow
										title="Aired:"
										value={`${dateConverter(data.first_air_date)}`}
									/>
								)}
								{!mediaType == "tv" ? (
									<CreditsRow
										title="Runtime:"
										value={runtimeModify(data.runtime)}
									/>
								) : (
									<CreditsRow title="Seasons:" value={data.number_of_seasons} />
								)}
							</div>
							<div className="flex items-center py-[15px]">
								<div className="itemContainer flex items-center mr-[25px] text-white">
									{!mediaType == "tv" ? (
										<>
											<h4 className="item mr-[5px] opacity-100">Director:</h4>
											<h4 className="item opacity-50">
												{directorList?.map((d, i) => (
													<span key={i}>
														{d.name}
														{directorList.length - 1 !== i && ", "}
													</span>
												))}
											</h4>
										</>
									) : (
										<>
											<h4 className="item mr-[5px] opacity-100">Created By:</h4>
											<h4 className="item opacity-50">
												{data?.created_by?.map((c) => (
													<span key={c.id}>{c.name}</span>
												))}
											</h4>
										</>
									)}
								</div>
							</div>
							<div className="flex items-center py-[15px]">
								<CreditsRow title="Bugdet($):" value={data.budget} />
								<CreditsRow title="Revenue($):" value={data.revenue} />
							</div>
						</div>
					</div>
				</div>
				{!videosLoading ? (
					<VideoPopUp
						videoId={videoId}
						showVideo={showVideo}
						hidePopup={hidePopup}
					/>
				) : (
					""
				)}
				{!creditsLoading ? <CastList data={credits} /> : ""}
				{!videosLoading ? (
					<VideosList
						data={videos}
						setVideoId={setVideoId}
						setShowVideo={setShowVideo}
					/>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default DetailsPage;
