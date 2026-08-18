import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useBooking } from "../../context/BookingContext";
import Step1_ServiceSelect from "./Step1_ServiceSelect";
import Step2_Picker from "./Step2_Picker";
import Step3_Summary from "./Step3_Summary";

const oswald = {fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05rem"};
const bebas = {fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.05rem"};

function BookingModal(){

    const {isOpen, initialService, closeBooking} = useBooking();

    // Internal Booking state --
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectTime, setSelectedTime] = useState(null);
    const [persons, setPersons] = useState(1);

    // When modal opens: decide which step to start at
    useEffect(() => {
        if(isOpen){
            if(initialService){
                //Came from a specific page- skip step 1
                setSelectedService(initialService);
                setStep(2);
            }else{
                // came from Navbar 
                setSelectedService(null);
                setStep(1);
            }

            //Reset date/time/persons every time modal opens
            setSelectedDate(null);
            setSelectedTime(null);
            setPersons(1);
        }
    }, [isOpen, initialService]);

    //Close on Escape key
    useEffect(() =>{
        const handler = (e) => {
            if (e.key === "Escape") closeBooking();
        };
        window.addEventListener("keydown", handler);
        return ()=>window.removeEventListener("keydown", handler);
    }, [closeBooking]);

    if(!isOpen) return null;

    return (
        //Overlay -clicking outside close the modal
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={closeBooking}>

            {/* Modal panel-- stopPropagation prevents the overlay click from firing */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
                 onClick={(e) => e.stopPropagation()}>
                
                {/* Cloase Button */}
                <button onClick={closeBooking}
                        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center
                                   justify-center hover:bg-slate-900 hover:text-white transition-all duration-200">
                    <FiX size={16} />
                </button>

                {/* Step indicator - only show when more than 1 step */}
                {!initialService && (<StepIndicator step={step} />)}

                {/* Step content */}
                <div className="pt-4 p-6">
                    {step === 1 && (
                        <Step1_ServiceSelect onSelect={(service) => {
                            setSelectedService(service);
                            setStep(2);
                        }} />
                    )}

                    {step === 2 && (
                        <Step2_Picker service={selectedService}
                                      selectedDate={selectedDate} setSelectedDate={setSelectedDate}
                                      selectTime={selectTime} setSelectedTime={setSelectedTime}
                                      persons={persons} setPersons={setPersons}
                                      onBack={() => initialService ? closeBooking() : setStep(1)}
                                      onNext={() => setStep(3)} />
                    )}

                    {step === 3 && (
                        <Step3_Summary service={selectedService}
                                       date= {selectedDate}
                                       time= {selectTime}
                                       persons = {persons}
                                       onBack={()=> setStep(2)}
                                       onClose = {closeBooking} />
                    )}
                </div>
            </div>
        </div>
    );
}

//Step indicator BAr------------------
function StepIndicator({step}){
    const steps = [
        {num: 1, label: "Service"},
        {num: 2, label: "Date & Time"},
        {num:3, label: "Summary"},
    ];

    return (
        <div className="flex items-center justify-center gap-2 pt-6 px-6 pb-2">
            {steps.map((s, i) => (
                <div key={s.num} className="flex items-center gap-2">
                    
                    {/* Circlee + label */}
                    <div className="flex items-center gap-1.5">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                            ${step > s.num ? "bg-cyan-500 text-white" : step === s.num ? "bg-cyan-500 text-white ring-4 ring-cyan-100" : "bg-slate-100 text-slate-400"}`}
                            style={oswald}>
                                {step >s.num ? "✓" : s.num}
                        </div>

                        <span className={`text-xs hidden sm:inline transition-colors duration-300 
                              ${step === s.num ? "text-cyan-600 font-semibold" : "text-slate-400"}`}
                              style={oswald}>
                            {s.label}
                        </span>
                    </div>

                    {/* Connector line between circles */}
                    {i < steps.length -1 && (
                        <div className={`w-8 h-0.5 rounded-full transition duration-300
                             ${step > s.num ? "bg-cyan-500" : "bg-slate-200"}`} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default BookingModal;