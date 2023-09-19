import React from "react";
import { IoMdClose } from "react-icons/io";
import ReactPlayer from "react-player/youtube";

const VideoPopUp = () => {
	// const hidePopup = () => {
	//     setShow(false);
	//     // setVideoId(null);
	// };
	const show = true;
	//   return (
	//     <div className={`videoTab ${show ? 'block opacity-100 visible' : 'hidden opacity-0'} flex items-center justify-center w-full h-full fixed top-0 left-0  invisible z-[9]`}>
	//       <div style={{background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(3.5px)", WebkitBackdropFilter: "blur(3.5px)"}} className={`opacityLayer absolute top-0 left-0 w-full h-full transition-opacity 400ms ${show ? 'opacity-100' : 'opacity-0'}`}></div>
	//       <div className={`videoPlayer relative w-[800px] aspect-[16/9] bg-white transition-transform 250ms  ${show ? 'scale-[1]' : 'scale-[0.2]'}`}>
	//         <span className='closeBtn'><IoMdClose/></span>
	//         <ReactPlayer
	//             url={`https://www.youtube.com/watch?v=4wxyy8Rcz4k`}
	//             controls
	//             width="100%"
	//             height="100%"
	//         />
	//       </div>
	//     </div>
	//   )
	return (
		<div className="videoPopUp active">
            <div className="opacityLayer"></div>
			<div className="videoPlayer">
                <span className="closeBtn"><IoMdClose/></span>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=4wxyy8Rcz4k`}
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
