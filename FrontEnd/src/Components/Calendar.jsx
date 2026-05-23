import { useState , useEffect} from 'react';
import '../App.css'

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

          { recordDiv && ( 
                      <>
                         <div className='absolute h-full w-full backdrop-blur-sm shadow-lg  shadow-black flex justify-center items-center'>
                            <div className='h-80 w-100 bg-gray-600 border border-gray-400 mx-auto rounded-2xl p-4 shadow-lg shadow-black'>

                               <button onClick={()=> {
                                 setrecordDiv(false)
                               }} className='bg-white rounded-xl hover:bg-red-500 hover:text-white flex ml-auto shadow-sm shadow-black'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" class="size-5 hover:fill-white">
                                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                               </button>

                               <div className='flex flex-col gap-5 mt-5 justify-center items-center p-2'>
                                  <div className='bg-green-500 h-25 w-50 p-3 text-2xl flex justify-center items-center text-white rounded-xl shadow-lg shadow-black hover:bg-green-700 hover:-translate-y-0.5 hover:shadow-sm border border-green-900'>Mark as Present</div>
                                  <div className='bg-red-500 h-25 w-50 p-3 text-2xl flex justify-center items-center text-white rounded-xl shadow-lg shadow-black hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-sm border border-red-900'>Mark as Absent</div>
                               </div>
                               


                            </div>
                         </div>
                      </>
            )}


  <div className="flex justify-center">
          <div className="bg-gray-800 rounded-lg flex flex-col p-4 w-150 border-1 shadow-xl shadow-black">
                 
            <div className="flex justify-between items-center mb-2 ">

              
              <div> 
                <span className="text-3xl font-semibold text-gray-800 text-white">
                  {MONTH_NAMES[month]}
                </span>
                <span className="ml-3 text-gray-200">
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6 hover:fill-white">
                     <path  d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                  </svg>

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
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6 hover:fill-white">
                     <path d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                  </svg>

                </button>
              </div>
            </div>

            {/* Days  */}
            <div className="flex flex-wrap mb-2 ">
              {DAYS.map((day) => (
                <div key={day} className="w-[14.28%] text-center text-yellow-600">
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
                <div key={date} className="w-[14.28%] p-1 text-gray-400">
                  <div
                    onClick={() => {
                      setrecordDiv(true)
                      getDateValue(date) 
                    }}
                    className={`text-sm rounded-sm h-12 flex justify-center items-center cursor-pointer  shadow-sm shadow-black hover:text-black hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 ${
                      isToday(date)
                        ? "bg-stone-600"
                        : isSelectedDate(date)
                        ? "text-white"
                        : "hover:bg-gray-400"
                    }`}
                  >
                    {date}

              
                  </div>
                </div>
              ))}
              </div>
                 
            </div>
            </div>
    </>
  )
}
export default Calendar
