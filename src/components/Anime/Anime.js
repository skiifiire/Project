import {useState} from 'react'
import '../../styles/Anime.css'
import Select from 'react-select'
import AnimeList from './AnimeList'

function getCurrentSeason() {
  const now = new Date();
  const month = now.getMonth() + 1;

  if (month >= 3 && month <= 5) {
    return 0;
  } else if (month >= 6 && month <= 8) {
    return 1;
  } else if (month >= 9 && month <= 11) {
    return 2;
  } else {
    return 3;
  }
}

function Anime() {
  const seasonOptions = [
    {value: 'spring', label: "Spring"},
    {value: 'summer', label: "Summer"},
    {value: 'fall', label: "Fall"},
    {value: 'winter', label: "Winter"}
    ];

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: currentYear - 1998 }, (_, index) => {
    const year = 2000 + index;
    return { value: year.toString(), label: year.toString() };
  });
  const reversedYearOptions = [...yearOptions].reverse();


  const defaultSeasonOption = seasonOptions[getCurrentSeason()];
  const currentYearOption = { value: currentYear, label: currentYear.toString()};


  const [selectedYear, setSelectedYear] = useState(currentYearOption.value);
  const [selectedSeason, setSelectedSeason] = useState(defaultSeasonOption.value);

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption.value);
  };

  const handleSeasonChange = (selectedOption) => {
    setSelectedSeason(selectedOption.value);
  };

  return (
    <div>
      <div className="seasonYear">
        <span className="text">Season : </span>
        <Select options={seasonOptions} className="firstSelect" defaultValue={defaultSeasonOption} onChange={handleSeasonChange}/>
        <span className="text">Year : </span>
        <Select options={reversedYearOptions} className="secondSelect" defaultValue={currentYearOption} onChange={handleYearChange}/>
      </div>
      <AnimeList year={selectedYear} season={selectedSeason} />
    </div>
  );
}

export default Anime