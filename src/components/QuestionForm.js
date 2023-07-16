import {useState} from 'react'

function QuestionForm() {
	const [inputValue, setInputValue] = useState('posez votre question ici')
	return (
		<div>
			<textarea
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={() => alert(inputValue)}>Alertez Moi</button>
		</div>
		)
}

export default QuestionForm