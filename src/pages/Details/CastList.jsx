import React from 'react'
import LazyLoadingImage from '../../components/LazyLoadImage/LazyLoadingImage'

const CastList = ({data}) => {
    const newData = data?.cast?.filter(item => item.order < 10)

  return (
		<div className="Casts px-[10px] py-[20px] lg:p-0 lg:pb-[20px]">
			<div className="title text-white text-3xl">
				<h3>Casts</h3>
			</div>
			<div className="carousel">
				<div className="carousel-item">
					<ul className="scrollbar flex items-center gap-[20px] pb-4 mt-[20px] overflow-y-hidden m-0 p-0">
						{newData?.map((castItem) => (
							<li key={castItem.order}>
								<div className="img w-[175px] h-[175px] mid-sl:w-[150px] mid-sl:h-[150px] lg:w-[110px] lg:h-[110px] overflow-hidden rounded-[50%]">
									<LazyLoadingImage
										imgUrl={
											"https://image.tmdb.org/t/p/original" +
											castItem.profile_path
										}
										imgwidth={"100%"}
										imgheight={"100%"}
									/>
								</div>

								<h4 className="name text-white text-center text-[18px] overflow-hidden mid-sl:text-[16px] whitespace-nowrap mid-sl:w-[150px] lg:w-[120px] text-ellipsis">
									{castItem.name}
								</h4>
								<h4 className="character_name text-white opacity-60 text-center text-[15px] mid-sl:w-[150px] lg:w-[120px] text-ellipsis overflow-hidden whitespace-nowrap">
									{castItem.character}
								</h4>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CastList
