import '../styles/Header.css'

function Header () {
	return (
		<div className="header">
			<a href="/cv" className="link">CV</a>
			<a href="/anime" className="link">Anime</a>
			<a href="/mastermind" className="link">MasterMind</a>
			<a href="https://github.com/skiifiire/Project" className="link" target="_blank" rel="noreferrer">Github</a>
		</div>
		)
}

export default Header