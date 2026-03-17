import { FaGraduationCap, FaSchool } from "react-icons/fa"

export default function Education() {

return(

<section id="education" className="py-28">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

<div>

<h2 className="text-4xl font-bold text-[#4B3A33] dark:text-white mb-6">
Education
</h2>

<p className="text-mocha-dark/70 max-w-md">
My academic journey focuses on building a strong foundation in 
<strong> Computer Engineering </strong> at Prince of Songkla University.  
I continuously improve my technical skills through software development,
full-stack projects, and IoT systems.
</p>

</div>


{/* RIGHT SIDE */}

<div className="relative pl-8 border-l border-gray-300 dark:border-gray-700 space-y-10">

{/* PSU */}

<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 relative">

<div className="absolute -left-[34px] top-6 bg-white dark:bg-gray-800 border rounded-full p-2">
<FaGraduationCap className="text-[#4B3A33]" />
</div>

<h3 className="font-semibold text-lg text-gray-900 dark:text-white">
Prince of Songkla University
</h3>

<p className="text-sm text-gray-600 dark:text-gray-400">
Bachelor of Engineering in Computer Engineering
</p>

<p className="text-sm text-gray-500 mt-1">
2021 - Present
</p>

{/* GPA */}

<div className="mt-4 flex items-center gap-4 text-sm">

<span className="text-gray-600 dark:text-gray-300">
GPAX: 2.94
</span>

<span className="bg-[#E0E7FF] text-[#3730A3] px-3 py-1 rounded-full font-semibold">
Recent GPA: 3.58
</span>

</div>

</div>


{/* SCHOOL */}

<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 relative">

<div className="absolute -left-[34px] top-6 bg-white dark:bg-gray-800 border rounded-full p-2">
<FaSchool className="text-[#4B3A33]" />
</div>

<h3 className="font-semibold text-lg text-gray-900 dark:text-white">
Islamic Santitham Foundation School
</h3>

<p className="text-sm text-gray-600 dark:text-gray-400">
Science-Math Program
</p>

<p className="text-sm text-gray-500 mt-1">
2015 - 2020
</p>

</div>

</div>

</div>

</section>

)

}