import cv from "../assets/Cv.png"

function Cv () {
	console.log({cv})
	return (
		<img alt={cv} width="900" 
			style={{ "display": "block",
  					 "margin-left": "auto",
  					 "margin-right": "auto"}} 
  		src={cv}/>
	)
}

export default Cv;