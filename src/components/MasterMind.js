import { useState, useEffect } from "react";
import $ from "jquery";

function MasterMind() {
  const [allResults, setAllResults] = useState([]);
  const [solution, setSolution] = useState("");
  const [visible, setVisible] = useState("visible")
  const [attempts, setAttempts] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false)

  const possible = ["r", "b", "j", "v"];
  const colors = {
  r: "red",
  b: "blue",
  j: "yellow",
  v: "green",
  };
  const [buttonColors, setButtonColors] = useState(
    possible.map(() => Math.floor(Math.random() * possible.length))
  );

  function createSolution(){
    let newSolution = '';
    for (let i = 0; i <= 3; i++) {
      newSolution += possible[Math.floor(Math.random() * 4)]
    }
    setSolution(newSolution)
  }

  useEffect(() => {
    createSolution();
  }, []);

  const getColor = (letter) => {
  switch (letter) {
    case 'r':
      return 'red';
    case 'b':
      return 'blue';
    case 'j':
      return 'yellow';
    case 'v':
      return 'green';
    default:
      return 'black';
  }
};

  const handleButtonClick = (index) => {
    setButtonColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = (newColors[index] + 1) % possible.length;
      return newColors;
    });
  };

  const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        setAttempts((prevAttempts) => prevAttempts + 1);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: {
              solution: solution,
              proposition: e.target.button1.value+e.target.button2.value+e.target.button3.value+e.target.button4.value,
            },
            success(data) {
                setAllResults((prevResults) => [...prevResults, data]);
                if (attempts >= 9) {
                  setVisible("hidden");
                }
                if (data[5] === "4") {
                  setIsGameWon(true);
                  setVisible("hidden");
                }
            },
        });
    };

  const renderAllResults = () => {
    return (
      <div>
        {isGameWon && <p>Victoire !</p>}    
        {attempts === 10 && isGameWon === false && (
          <div>
            <p>La réponse était :</p>
            {solution.split("").map((letter, i) => (
              <button
                key={i}
                disabled
                style={{ backgroundColor: getColor(letter), width: 25, height: 25, marginRight: 10 }}
              ></button>
            ))}
          </div>
        )}
        {allResults.reverse().map((result, index) => (
        <div key={`attempt_${index}`}>
          <p>____________________</p>
          <p>Nombre de tentative : {allResults.length - index}</p>
          {result.slice(0, 4).map((letter, i) => (
            <button
              key={i}
              disabled
              style={{ backgroundColor: getColor(letter), width: 25, height: 25, marginRight: 10 }}
            ></button>
          ))}
          <p>mal placé : {result[4]} / correct : {result[5]}</p>
        </div>
      ))}
    </div>
    );
  };

  return (
    <div className="App">
      <form
        action="http://localhost:8000/mastermind.php"
        method="post"
        onSubmit={(event) => handleSubmit(event)}
      >
      <input type="text" name='solution' value={solution} readOnly="readonly" style={{visibility: "hidden"}}/><br/>
        {possible.map((color, index) => (
        <button
          key={index}
          type="button"
          name={`button${index + 1}`}
          value={possible[buttonColors[index]]}
          style={{
            backgroundColor: colors[possible[buttonColors[index]]],
            width: 25,
            height: 25,
            marginRight: 10,
          }}
          onClick={() => handleButtonClick(index)}
        ></button>
      ))}
        <button type="submit"
        style={{
          visibility: visible
        }}>Valider</button>
      </form>
      <div>{renderAllResults()}</div>
    </div>
  );
}

export default MasterMind;