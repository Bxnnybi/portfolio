import { FaGithub } from "react-icons/fa"

export default function ProjectCard({
title,
desc,
tech,
github
}:{
title:string
desc:string
tech:string
github?:string
}) {

return (

<div
className="
bg-white
border border-slate-200
rounded-xl
shadow-md
transition
hover:-translate-y-2
hover:shadow-xl
"
>

<h3 className="text-xl font-bold text-mocha">
{title}
</h3>

<p className="text-gray-600 mt-3">
{desc}
</p>

<p className="text-sm text-whispy mt-4">
{tech}
</p>

{github && (

<a
href={github}
target="_blank"
className="flex items-center gap-2 mt-4 text-sm text-gray-600 hover:text-black"
>
<FaGithub />
View Code
</a>

)}

</div>

)

}