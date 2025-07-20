import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MenuView = () => {
	const { resId } = useParams();
	const [restorantInfo, setRestorantInfo] = useState();
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`,
		);
		const json = await data?.json();
		setRestorantInfo(json);
	};
	console.log("sudheer", restorantInfo);
	return (
		<div className="menu">
			<h1>{restorantInfo?.data?.cards[0]?.card?.card?.text}</h1>
			<h3>
				Avarage Rating:
				{
					restorantInfo?.data?.cards[2]?.card?.card?.info?.avgRating
				}{" "}
				Cost:{" "}
				{
					restorantInfo?.data?.cards[2]?.card?.card?.info
						?.costForTwoMessage
				}
			</h3>
			<h2>Menu</h2>
			<ul>
				<li>{}</li>
				<li>Mc Donald</li>
				<li>Pizza</li>
				<li>Sabji</li>
			</ul>
		</div>
	);
};

export default MenuView;
