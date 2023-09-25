import React from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Popular from './Popular'
import Trending from './Trending'
import TopRated from './TopRated'

const HomePage = () => {
  return (
		<div className="HomePage">
			<ContentWrapper id={"Trending"} content={<Trending />} />
			<ContentWrapper id={"Popular"} content={<Popular />} />
			<ContentWrapper id={"TopRated"} content={<TopRated />} />
		</div>
	);
}

export default HomePage
