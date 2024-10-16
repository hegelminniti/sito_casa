import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // Stile di base
import 'react-date-range/dist/theme/default.css'; // Stile a tema
import '../../Styles/PrenotazioneDate.css';


const PrenotazioneDate = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    console.log('Check-in:', ranges.selection.startDate);
    console.log('Check-out:', ranges.selection.endDate);
  };

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={dateRange}
        minDate={new Date()} // Impedisce la selezione di date passate
      />
      <button>PRENOTA</button>
    </div>
  );
};

export default PrenotazioneDate;
