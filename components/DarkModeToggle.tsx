"use client"

import { useEffect, useState } from "react"
import { FiMoon, FiSun } from "react-icons/fi"

export default function DarkModeToggle() {

const [dark,setDark] = useState(false)

useEffect(()=>{

const root = window.document.documentElement

if(dark){
root.classList.add("dark")
}else{
root.classList.remove("dark")
}

},[dark])

return(

<button
onClick={()=>setDark(!dark)}
className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
>

{dark ? <FiSun/> : <FiMoon/>}

</button>

)

}