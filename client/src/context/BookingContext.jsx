import { createContext, useContext, useState } from "react";


// 1. Create the context
const BookingContext= createContext(null);

// 2. The Provider
export function BookingProvider({children}){
    const [isOpen, setIsOpen] =  useState(false);
    const [initialService, setInitialService] = useState(null);
    // initialService = null -> open at Step 1
    // initialService = {...} -> open at Step 2 (service already chosen)

    function openBooking(service = null){
        setInitialService(service);
        setIsOpen(true);
    }

    function closeBooking(){
        setIsOpen(false);
        setInitialService(null);
    }

    return(
        <BookingContext.Provider value={{isOpen, initialService, openBooking, closeBooking}}>
            {children}
        </BookingContext.Provider>
    );
}

// 3. The Hook - call this inside any component to open/close the model

export function useBooking(){
    const ctx = useContext(BookingContext);
    if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
    return ctx;
}