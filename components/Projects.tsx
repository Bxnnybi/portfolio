import { projects } from "@/data/projects"
import { FaGithub } from "react-icons/fa"

export default function Projects() {

return (

<section id="projects" className="py-28">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center text-mocha-dark mb-16">
Featured Projects
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{projects.map((project) => (

<div
key={project.title}
className="group rounded-2xl border bg-white dark:bg-gray-900 p-6 transition hover:shadow-xl hover:border-blue-300"
>

{/* CATEGORY */}

<span className="inline-block text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full mb-3">
{project.category}
</span>

{/* TITLE */}

<h3 className="font-semibold text-lg text-gray-900 dark:text-white">
{project.title}
</h3>

{/* DESCRIPTION */}

<p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
{project.description}
</p>

{/* TECH STACK */}

<div className="flex flex-wrap gap-2 mt-4">

{project.tech.map((t) => {

let color = "bg-gray-100 text-gray-700"

if (t.type === "frontend") color = "bg-blue-100 text-blue-700"
if (t.type === "backend") color = "bg-green-100 text-green-700"
if (t.type === "database") color = "bg-orange-100 text-orange-700"
if (t.type === "cloud") color = "bg-purple-100 text-purple-700"

return (

<span
key={t.name}
className={`text-xs px-2 py-1 rounded-full ${color}`}
>
#{t.name}
</span>

)

})}

</div>

{/* FOOTER */}

<div className="flex items-center justify-between mt-6">

<a
href={project.github}
target="_blank"
className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
>

<FaGithub />

View Code

</a>

</div>

</div>

))}

</div>

</div>

</section>

)

}