import { useEffect, useState } from "react";
import RestoCard from "./RestroCard";
import { Link } from "react-router-dom";

const Body = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const data = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
			);
			const json = await data.json();
			const restaurants =
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants || [];

			setAllRestaurants(restaurants);
			setFilteredRestaurants(restaurants);
		} catch (err) {
			console.error("Fetch error:", err);
			setAllRestaurants([]);
			setFilteredRestaurants([]);
		}
	};

	const handleFilter = () => {
		const topRated = allRestaurants.filter(
			(item) => item?.info?.avgRating > 4,
		);
		setFilteredRestaurants(topRated);
	};

	const handleSearch = () => {
		const searchFiltered = allRestaurants.filter((res) =>
			res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
		);
		setFilteredRestaurants(searchFiltered);
	};

	return (
		<div className="body">
			<div className="filter">
				<div>
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<button className="search-btn" onClick={handleSearch}>
						Search
					</button>
				</div>
				<button className="filter-btn" onClick={handleFilter}>
					Top Rated Restaurants
				</button>
			</div>

			<div className="res-container">
				{filteredRestaurants.map((restaurant, index) => (
					<Link to={`restaurant/view/${restaurant?.info?.id}`}>
						<RestoCard key={index} restoInfo={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
