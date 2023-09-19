import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import MovieCard from "../movieCard/movieCard";
import { endpoints } from "../../utils/endpoints";

const Carousel = ({ data, loading, mediaType }) => {
	return (
		<div className="carousel">
			{!loading ? (
				<div>
                    {data.map(item => (
                        <MovieCard
                            imgUrl={"https://image.tmdb.org/t/p/original" + item.poster_path}
                            title={item.title}
                            releaseDate={item.release_date}
                            rating={item.vote_average}
                            mediaType={mediaType}
                            id={item.id}
                        />
                    ))}
                </div>
			) : (
				<div className="loadingSkeleton">
					""
				</div>
			)}

			{/* {data?.map((item) => {
                    (
                    	<MovieCard
                    		imgUrl={() => endpoints.imgFullUrl(item.poster_path)}
                    		title={item.title}
                    		releaseDate={item.release_date}
                    		rating={item.vote_average}
                    		mediaType={"movie"}
                    	/>
                    );
                })} */}

			{/* <ContentWrapper content={}/> */}
			{/* {carouselData.results.map((item) => {
				// return (
				// 	<MovieCard
				// 		imgUrl={() => endpoints.imgFullUrl(item.poster_path)}
				// 		title={item.title}
				// 		releaseDate={item.release_date}
				// 		rating={item.vote_average}
				// 		mediaType={"movie"}
				// 	/>
				// );
                console.log('lol')
			})} */}
		</div>
	);
};

export default Carousel;
