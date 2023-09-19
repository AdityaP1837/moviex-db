import React from 'react'
import LazyLoadingImage from '../../components/LazyLoadImage/LazyLoadingImage'
import {FaPlay} from 'react-icons/fa'

const VideosList = ({data}) => {
  return (
    <div className='Videos px-[10px] py-[20px]'>
        <div className="title text-white text-3xl">
            <h3>Official Videos</h3>
        </div>
        <div className="carousel">      
            <div className="carousel-item">
                <ul className='scrollbar flex items-center gap-[20px] pb-8 mt-[20px] overflow-y-hidden m-0 p-0'>
                    {data?.results?.map((video) => (
                        <li key={video.id} className='videoItem w-[280px] h-[190px]'>
                            <div className="relative w-[280px] hover:opacity-70 cursor-pointer transition-all .7s ease-in-out">
                                <LazyLoadingImage imgUrl={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} imgwidth={"100%"} imgheight={"100%"}/>
                                <div className="playbtn absolute hidden">
                                    <FaPlay/>
                                </div>
                            </div>
                            
                            <h4 className="name text-white text-center text-[16px] break-words">{video.name}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default VideosList
