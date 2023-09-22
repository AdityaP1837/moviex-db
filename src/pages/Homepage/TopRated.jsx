import React, { useState } from 'react'
import useFetchData from '../../hooks/useFetchData'
import MovieCard from "../../components/movieCard/MovieCard";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

const TopRated = () => {
    const [activeTab, setActiveTab] = useState('movie')

    const onTabChange = () => {
        let on = activeTab == "movie" ? 'movie' : 'tv'
        setActiveTab(on)
    }
    const {data, loading} = useFetchData(`/${activeTab}/top_rated`)
  return (
    <div>
      <div className="navigation flex items-center justify-between p-[10px] l:p-[5px]">
        <h3 className='text-black-lighter ml-[18px] l:ml-[10px] l:text-[22px] mid-sm:text-[20px] mid-sm:ml-[5px] text-[25px] font-[800]'>Top Rated</h3>
        <div className="tools l:hidden">
            <div className="navigateIcons flex items-center gap-3">
                <h4 className='text-[25px] cursor-pointer text-black-lighter f-[400] hover:text-black-hover hover:transition-all ease-in'><FaArrowLeft/></h4>
                <h4 className='text-[25px] cursor-pointer text-black-lighter f-[400] hover:text-black-hover hover:transition-all ease-in'><FaArrowRight/></h4>
            </div>
        </div>
      </div>
      <div className="popularContent p-[10px] l:p-[5px]">
        <div className="carousel">
			{!loading ? (
				<div className='tab-scroll noScrollBar flex px-[5px] gap-[15px] overflow-x-auto scroll-smooth'>
                    {data.results?.map(item => (
                        <MovieCard
                            key={item.id}
                            imgUrl={"https://image.tmdb.org/t/p/original" + item.poster_path}
                            title={item.title}
                            releaseDate={item.release_date == undefined ? item.first_air_date : item.release_date}
                            rating={item.vote_average}
                            mediaType={activeTab}
                            id={item.id}
                        />
                    ))}
                </div>
			) : (
				<div className="loadingSkeleton">
					""
				</div>
			)}
        </div>
      </div>
    </div>
  )
}

export default TopRated
