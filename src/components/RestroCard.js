import { CDN_URL } from "../utils/constants";

const RestoCard = ({ restoInfo }) => {
	const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
		restoInfo?.info;
	return (
		<div className="res-card">
			<img
				className="img-logo"
				src={`${CDN_URL}${cloudinaryImageId}`}
				alt="res-image"
			/>
			<h2>{name}</h2>
			<h3>{cuisines.join(",")}</h3>
			<h3>{avgRating} stars</h3>
			<h3>{costForTwo}</h3>
		</div>
	);
};

export default RestoCard;
