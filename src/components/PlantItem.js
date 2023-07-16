import CareScale from "./CareScale.js"
import "../styles/PlantItem.css"

function PlantItem({id, cover, name, water, light}) {
	return (
		<li key={id} className="lmj-plant-item">
			<img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`}/>
			{name}
			<CareScale careType="water" scaleValue={water} />
			<CareScale careType="light" scaleValue={light} />
		</li>
	)
}

export default PlantItem