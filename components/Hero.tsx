import Image from "next/image"
import { profile } from "@/data/profile"
import { FaGithub } from "react-icons/fa"

export default function Hero(){

return(

<section className="min-h-screen flex items-center pt-28">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div>

<p className="text-sm text-mocha-base mb-3">
Welcome to my portfolio
</p>

<h1 className="text-5xl font-bold text-mocha-dark leading-tight">
Hello,
<br/>
{profile.name}
</h1>

<p className="mt-4 text-mocha-dark/80">
{profile.title}
</p>

<p className="mt-4 max-w-lg text-mocha-dark/70">
{profile.description}
</p>

<div className="flex gap-4 mt-8">

<a
href="#contact"
className="
px-6 py-3
rounded-full
bg-accent-blue
text-mocha-dark
hover:bg-blue-200
transition
"
>
Contact Me
</a>

<a
href={profile.github}
target="_blank"
className="
px-6 py-3
rounded-full
border border-mocha-base/30
flex items-center gap-2
text-mocha-dark
"
>

<FaGithub/>
GitHub

</a>

</div>

</div>

<div className="flex justify-center">

<Image
src="/profile/me.jpg"
alt="profile"
width={260}
height={260}
className="
rounded-[13%]
shadow-[0_20px_40px_rgba(0,0,0,0.15)]
float
"
/>

</div>

</div>

</section>

)

}