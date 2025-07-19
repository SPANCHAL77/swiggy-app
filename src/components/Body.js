import { useEffect, useState } from "react";
import RestoCard from "./RestroCard";

const Body = () => {
	const [restorants, setRestorants] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const data = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
			);
			const json = await data.json();
			setRestorants(
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants || [],
			);
		} catch (err) {
			console.error("Fetch error:", err);
			setRestorants([]);
		}
	};
	const handleFilter = () => {
		const topRated = restorants.filter(
			(items) => items?.info?.avgRating > 4,
		);
		setRestorants(topRated);
	};

	return (
		<div className="body">
			<button className="filter-btn" onClick={handleFilter}>
				{" "}
				Top Rated Restaurants
			</button>
			<div className="res-container">
				{restorants.map((restorant, index) => (
					<RestoCard key={index} restoInfo={restorant} />
				))}
			</div>
		</div>
	);
};
export default Body;
