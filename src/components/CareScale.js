import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function handleClick(scaleValue, careType) {
	const range = [1, 2, 3]
	const quantite = ["peu", "modérément", "beaucoup"]

	range.map((rangeElem) =>
		scaleValue === rangeElem ? alert('la plante a besoin de '+quantite[scaleValue - 1]+' de '+careType) : null)
}

function CareScale({scaleValue, careType}) {
	const scaleType = careType === "light" ? <img src={sun} alt="sun-icon"/> : <img src={water} alt="water-icon"/>

	const range = [1, 2, 3]

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? <span onClick={() => handleClick(scaleValue, careType)} key={rangeElem.toString()}>{scaleType}</span>: null
			)}
		</div>
	)
}

export default CareScale