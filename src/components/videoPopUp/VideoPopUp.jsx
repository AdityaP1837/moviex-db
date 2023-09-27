import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ReactPlayer from "react-player/youtube";

const VideoPopUp = ({ showVideo, videoId, hidePopup }) => {
	return (
		<div className={`videoPopUp ${showVideo ? "active" : "hidden"}`}>
			<div className="opacityLayer" onClick={hidePopup}></div>
			<div className="videoPlayer l:mx-[5px]">
				<span className="closeBtn" onClick={hidePopup}>
					<IoMdClose />
				</span>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${videoId}`}
					controls
					width="100%"
					height="100%"
				/>
			</div>
		</div>
	);
};

// {show, setShow, videoId, setVideoId}

export default VideoPopUp;
