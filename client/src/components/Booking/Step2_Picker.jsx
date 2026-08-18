import { useState} from "react";
import { FiChevronLeft, FiChevronRight, FiMinus, FiPlus, FiArrowRight } from "react-icons/fi";

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December",
];

const DAY_NAMES = [
    "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"
];

// HELPERs-------------------------------

function startofDay(d){
    const copy = new Date(d);
    copy.setHours(0,0,0,0);
    return copy;
}

function buildMonthGrid(year, month){
    const firstWeekday = new Date(year, month, 1).getDay(); //0=Sunday
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const cells = [];
    for (let i=0; i<firstWeekday; i++) cells.push(null); //leading blanks
    for (let d=1; d<=daysInMonth; d++) cells.push(new Date(year, month, d));
    while(cells.length %7 !==0) cells.push(null) // trailing blanks
    return cells;
}

function isSameDay(a,b){
    if(!a || !b) return false;
    return(
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

// Component ------------------
function Step2_Picker({
    service, selectedDate, setSelectedDate, selectTime, setSelectedTime, persons, setPersons, onBack, onNext
}){
    const today = startofDay(new Date());
    const maxDate = (()=>{
        const d = startofDay(new Date());
        d.setDate(d.getDate()+ 30);
        return d;
    })();

    const [calYear, setCalYear] = useState(today.getFullYear());
    const [calMonth, setCalMonth] = useState(today.getMonth());

    const cells = buildMonthGrid(calYear, calMonth);

    //Can we go backward -> only if not already on today's month
    const canGoPrev= calYear > today.getFullYear() || calMonth > today.getMonth();

    //Can we go forward -> Only if month starts on or before 30-day window
    const canGoNext= new Date(calYear, calMonth+1, 1) <= new Date(maxDate.getFullYear(), maxDate.getMonth()+1, 1);

    function classifyDay(date){
        if(!date) return "empty";
        const d = startofDay(date);
        if(d < today) return "past";
        if(d > maxDate) return "future";
        if(isSameDay(d, today)) return "today";

        return "available";
    }

    //Fall back to safe defaults if service doesn't carry these fields
    const minPersons = service?.minPersons ?? 1;
    const maxPersons = service?.maxPersons ?? 20;

    const canProceed = selectedDate && selectTime;

    // Month navigation handlers
    function prevMonth(){
        if(calMonth === 0){setCalYear(y => y-1); setCalMonth(11);}
        else setCalMonth(m=>m-1);
    }

    function nextMonth(){
        if(calMonth === 11) {setCalYear(y=>y+1); setCalMonth(0);}
        else setCalMonth(m=>m+1);
    }

    return (
        <div className="flex flex-col gap-5">

            {/* Service reminder --  */}
            {service && (
                <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border-slate-100">
                    <span className="text-2xl">{service.emoji}</span>
                    <div>
                        <p className="text-slate-900 text-sm font-semibold" style={bebas}>{service.name}</p>
                        {/* SHOW package stretch */}
                        {service.packageLabel && (
                            <p className="text-cyan-600 text-xs font-semibold" style={oswald}>{service.packageLabel}</p>
                        )}
                        <p className="text-slate-400 text-xs" style={oswald}>{service.priceNote}</p>
                    </div>
                </div>
            )}

            {/* CALENDER---------- */}
            <div className="p-5">
                <p className="text-slate-700 text-xs uppercase tracking-widest mb-4" style={oswald}>
                    📅 Select a Date
                </p>

                {/* Month navigation row */}
                <div className="flex items-center justify-between mb-2">
                    <button onClick={prevMonth} disabled={!canGoPrev}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100
                                       disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                            <FiChevronLeft size={17} />
                    </button>

                    <span className="text-slate-900 text-lg" style={bebas}>
                        {MONTH_NAMES[calMonth]} {calYear}
                    </span>

                    <button onClick={nextMonth} disabled={!canGoNext}
                            className="w-5 h-5 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100
                                       disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                            <FiChevronRight size={17} />
                    </button>
                </div>

                {/* Day-of-week header row */}
                <div className="grid grid-cols-7 mb-1">
                    {DAY_NAMES.map((d)=>(
                        <div key={d} className="text-center text-xs text-slate-400 py-1" style={oswald}>
                            {d}
                        </div>
                    ))}
                </div>

                {/* Day cells grid */}
                <div className="grid grid-cols-7 gap-0.5">
                    {cells.map((date, idx) => {
                        const status = classifyDay(date);
                        const isSelected = isSameDay(date, selectedDate);

                        //Empty padding cell
                        if(status === "empty") return <div key={`e-${idx}`} />;

                        // Build class string based on status + selection
                        let cls = "w-full h-9 rounded-lg text-sm flex flex-col items-center justify-center " + 
                                   "relative transition-all duration-200";

                        if(isSelected){
                            cls += "bg-cyan-900 border-cyan-600 text-black font-bold shadow-md shadow-cyan-200 scale-105";
                        }else if(status === "past" || status === "future"){
                            cls += "text-slate-300 cursor-not-allowed";
                        }else if(status === "today"){
                            cls += "bg-cyan-50 text-cyan-700 font-bold ring-2 ring-cyan-400 cursor-pointer hover:bg-cyan-100";
                        }else {
                            cls += "text-slate-700 cursor-pointer hover:bg-slate-100";
                        }

                        return(
                            <button key={idx} disabled={status === 'past' || status === "future"}
                                    onClick={()=>{
                                        setSelectedDate(date);
                                        setSelectedTime(null);
                                    }}
                                    className={cls}>
                                {date.getDate()}
                                {/* Dot under "Today" when not selected */}
                                {status === "today" && !isSelected && (
                                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-cyan-500" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* LEGEND--- */}
                {/* TIME SLOTS----------------- */}
                {selectedDate && (
                    <div>
                        <p className="text-slate-700 text-xs uppercase tracking-widest mb-3" style={oswald}>
                            ⏰ Select a Time
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {service?.timings?.map((time) => (
                                <button key={time} onClick={()=> setSelectedTime(time)}
                                        className={`py-2 px-3 rounded-xl text-xs font-semibold border-2 transition-all duration-200
                                                    ${selectTime === time ? "bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-200"
                                                                        : "border-slate-100 text-slate-600 hover:border-cyan-400 hover:bg-cyan-50"
                                                    }`}
                                        style={oswald}>
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* PERSONS COuNTER------------------------ */}
                <div>
                    <p className="text-slate-700 text-xs uppercase tracking-widest mb-3" style={oswald}>
                        👥 Number of Persons
                    </p>
                    <div className="flex items-center gap-4">
                        <button onClick={() => setPersons(p=> Math.max(minPersons, p-1))}
                                disabled= {persons <= minPersons}
                                className="w-9 h-9 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-cyan-400 hover:bg-cyan-50 disabled:opacity-30 disbaled:cursor-not-allowed transition-all duration-200">
                            <FiMinus size={14} />
                        </button>

                        <span className="text-slate-900 text-2xl w-8 text-center" style={bebas}>
                            {persons}
                        </span>

                        <button onClick={() => setPersons(p => Math.min(maxPersons, p+1))}
                                disabled={persons >= maxPersons}
                                className="w-9 h-9 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-cyan-400 hover:bg-cyan-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200">
                            <FiPlus size={14} />
                        </button>

                        <span className="text-slate-400 text-xs" style={oswald}>
                            (max {maxPersons})
                        </span>
                    </div>
                </div>

                {/* NAV BUTTONS------------------- */}
                <div className="flex items-center justify-between pt-2">
                    <button onClick={onBack}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-slate-200 text-slate-600 text-sm hover:border-slate-400 transition-all duration-200"
                            style={oswald}>
                        <FiChevronLeft size={16}/> Back
                    </button>

                    <button onClick={onNext}
                            disabled={!canProceed}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-500 text-white text-sm hover:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200"
                            style={oswald}>
                        Continue <FiArrowRight size={16}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Step2_Picker;