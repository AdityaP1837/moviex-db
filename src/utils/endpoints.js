export const endpoints = {
	multiSearch: (query) => {
        const newQuery = query.replaceAll(" ", "+")
		return "/search/multi?&include_adult=false&query=" + newQuery;
	},
	imgFullUrl: (url) => {
		return "https://image.tmdb.org/t/p/original" + url;
	},
	trending: {
		all: (time_window) => {
			if (time_window.toLocaleLowerCase() == "today")
				return "/trending/all/day";
			else if (time_window.toLocaleLowerCase() == "week")
				return "/trending/all/week";
		},
		movie: (time_window) => {
			if (time_window.toLocaleLowerCase() == "day")
				return "/trending/movie/day";
			else if (time_window.toLocaleLowerCase() == "week")
				return "/trending/movie/week";
		},
		tv: (time_window) => {
			if (time_window.toLocaleLowerCase() == "day") return "/trending/tv/day";
			else if (time_window.toLocaleLowerCase() == "week")
				return "/trending/tv/week";
		},
	},
	popular: (mediaType) => {
		return mediaType.toLocaleLowerCase() == "movie"
			? "/movie/popular"
			: "/tv/popular";
	},
	topRated: (mediaType) => {
		return mediaType.toLocaleLowerCase() == "movie"
			? "/movie/top_rated"
			: "/tv/top_rated";
	},
	movies: {
		details: (id) => "/movie/" + id,
		videos: (id) => "/movie/" + id + "/videos",
		credits: (id) => "/movie/" + id + "/credits",
		similar: (id) => "/movie/" + id + "/similar",
	},
	tv: {
		details: (id) => "/tv/" + id,
		videos: (id) => "/tv/" + id + "/videos",
		credits: (id) => "/tv/" + id + "/credits",
		similar: (id) => "/tv/" + id + "/similar",
		seasonInfo: (id, seasonNum) => {
			return "/tv/" + id + "/season/" + seasonNum;
		},
		seasonsEpisodeInfo: (id, seasonNum, episodeNum) => {
			return "/tv/" + id + "/season/" + seasonNum + "/episode/" + episodeNum;
		},
	},
    people: {
        details: (id) => "/person/" + id,
		images: (id) => "/person/" + id + "/images",
		credits: (id, mediaType) => mediaType.toLowerCase() == "movie" ? "/person/" + id + "movie_credits" : "/tv/" + id + "tv_credits",
		similar: (id) => "/tv/" + id + "/similar",
    }
};
