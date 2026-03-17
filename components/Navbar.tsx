export default function Navbar(){

return(

<header
className="
fixed top-0 w-full z-50
backdrop-blur-md
bg-white/70
border-b border-mocha-base/20
"
>

<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

<h1 className="font-semibold text-mocha-dark">
Firdaws.dev
</h1>

<nav className="flex gap-6 text-sm text-mocha-dark/80">

<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#education">Education</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

</nav>

</div>

</header>

)

}