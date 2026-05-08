import { useState , useEffect} from 'react';
import '../App.css'
import { applyTreeDeltas, defaultValueTypes } from 'framer-motion';
import { div } from 'framer-motion/client';



function Calendar() {
	const MONTH_NAMES = [
		"January","February","March","April","May","June",
		"July","August","September","October","November","December"
	  ];
	  
	  const MONTH_SHORT_NAMES = [
		"Jan","Feb","Mar","Apr","May","Jun",
		"Jul","Aug","Sep","Oct","Nov","Dec"
	  ];
	  
	  const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	
		const [datepickerValue, setDatepickerValue] = useState("");
		const [selectedDate] = useState(null);
		const [dateFormat] = useState("DD-MM-YYYY");
		const [month, setMonth] = useState(0);
		const [year, setYear] = useState(0);
		const [noOfDays, setNoOfDays] = useState([]);
		const [blankDays, setBlankDays] = useState([]);
	  
    const [recordDiv , setrecordDiv] = useState(false)

		useEffect(() => {
		  initDate();
		}, []);
	  
		useEffect(() => {
		  getNoOfDays();
		}, [month, year]);
	  
		const initDate = () => {
		  let today = selectedDate ? new Date(selectedDate) : new Date();
		  setMonth(today.getMonth());
		  setYear(today.getFullYear());
		  setDatepickerValue(formatDateForDisplay(today));
		};
	  
		const formatDateForDisplay = (date) => {
		  let formattedDay = DAYS[date.getDay()];
		  let formattedDate = ("0" + date.getDate()).slice(-2);
		  let formattedMonth = MONTH_NAMES[date.getMonth()];
		  let formattedMonthShort = MONTH_SHORT_NAMES[date.getMonth()];
		  let formattedMonthNum = ("0" + (date.getMonth() + 1)).slice(-2);
		  let formattedYear = date.getFullYear();
	  
		  if (dateFormat === "DD-MM-YYYY") {
			return `${formattedDate}-${formattedMonthNum}-${formattedYear}`;
		  }
		  if (dateFormat === "YYYY-MM-DD") {
			return `${formattedYear}-${formattedMonthNum}-${formattedDate}`;
		  }
		  if (dateFormat === "D d M, Y") {
			return `${formattedDay} ${formattedDate} ${formattedMonthShort} ${formattedYear}`;
		  }
		  return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`;
		};
	  
		const isToday = (date) => {
		  const today = new Date();
		  const d = new Date(year, month, date);
		  return today.toDateString() === d.toDateString();
		};
	  
		const isSelectedDate = (date) => {
		  const d = new Date(year, month, date);
		  return datepickerValue === formatDateForDisplay(d);
		};
	  
		const getDateValue = (date) => {
		  let selected = new Date(year, month, date);
		  setDatepickerValue(formatDateForDisplay(selected));
		};
	  
		const getNoOfDays = () => {
		  let daysInMonth = new Date(year, month + 1, 0).getDate();
		  let dayOfWeek = new Date(year, month).getDay();
	  
		  let blank = [];
		  for (let i = 1; i <= dayOfWeek; i++) blank.push(i);
	  
		  let days = [];
		  for (let i = 1; i <= daysInMonth; i++) days.push(i);
	  
		  setBlankDays(blank);
		  setNoOfDays(days);
		};
	  
  return (  
    <>

          <div className="bg-gray-300  ml-6 rounded-lg shadow p-4 w-150">

            <div className="flex justify-between items-center mb-2 ">
              <div>
                <span className="text-lg font-bold text-gray-800 ">
                  {MONTH_NAMES[month]}
                </span>
                <span className="ml-1 text-lg text-gray-600">
                  {year}
                </span>
              </div>

              <div>
                <button
                  onClick={() => {
                    if (month === 0) {
                      setYear(year - 1);
                      setMonth(11);
                    } else {
                      setMonth(month - 1);
                    }
                  }}
                  className="p-1"
                >
                  ◀
                </button>

                <button
                  onClick={() => {
                    if (month === 11) {
                      setYear(year + 1);
                      setMonth(0);
                    } else {
                      setMonth(month + 1);
                    }
                  }}
                  className="p-1"
                >
                  ▶
                </button>
              </div>
            </div>

X
            {/* Days */}
            <div className="flex flex-wrap mb-2 ">
              {DAYS.map((day) => (
                <div key={day} className="w-[14.28%] text-center text-sm">
                  {day}
                </div>
              ))}
            </div>


            {/* Dates */}
            <div className="flex flex-wrap">
              {blankDays.map((_, i) => (
                <div key={i} className="w-[14.28%] p-1"></div>
              ))}

              {noOfDays.map((date) => (
                <div key={date} className="w-[14.28%] p-1 ">
                  <div
                    onClick={() => {setrecordDiv(true)
                      getDateValue(date) 
                    }}
                    className={`text-sm rounded-sm h-12  flex justify-center items-center cursor-pointer bg-red-500 ${
                      isToday(date)
                        ? "bg-indigo-200"
                        : isSelectedDate(date)
                        ? "text-white"
                        : "hover:bg-gray-600"
                    }`}
                  >
                    {date}

              
                  </div>
                </div>
              ))}
            </div>
          </div>
    </>
  )
}
export default Calendar
