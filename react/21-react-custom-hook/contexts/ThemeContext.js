import { createContext, useState } from "react";

export const ThemeContext=createContext();

export default function ThemeProvider({children}){
  const [isdark, setIsDark] = useState(JSON.parse(localStorage.getItem('isdark')));
    return(
        <ThemeContext.Provider value={[isdark,setIsDark]}>
            {children}
        </ThemeContext.Provider>
    )
}



