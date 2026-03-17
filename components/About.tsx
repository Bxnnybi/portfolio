import { profile } from "@/data/profile"

export default function About(){

return(

<section className="py-28 bg-[#F5F1ED] dark:bg-[#0F213F]">

<div className="max-w-4xl mx-auto">

<h2 className="text-3xl font-bold text-[#4B3A33] dark:text-white">
About Me
</h2>

<p className="text-gray-600 dark:text-gray-300">
{profile.about}
</p>


</div>

</section>

)

}