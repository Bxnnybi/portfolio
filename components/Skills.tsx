import { skills } from "@/data/skills"

export default function Skills() {

    return (

        <section id="skills" className="py-28">

            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-12">

                    <h2 className="text-3xl font-bold text-mocha-dark">
                        Technical Skills
                    </h2>

                    <p className="text-mocha-dark/70 mt-3 max-w-2xl mx-auto">
                        A collection of technologies and tools I use to design, build, and deploy modern applications.
                    </p>

                </div>

                {Object.entries(skills).map(([category, items]) => (

                    <div key={category} className="mb-10">

                        <h3 className="font-semibold mb-4 text-mocha-dark">
                            {category}
                        </h3>

                        <div className="grid md:grid-cols-4 gap-4">

                            {items.map((skill) => {

                                const Icon = skill.icon

                                return (

                                    <div
                                        key={skill.name}
                                        className="
bg-white
border border-slate-200
rounded-xl
shadow-card
transition
hover:shadow-hover
p-4
flex items-center gap-4
"

                                    >

                                        <Icon className="text-mocha-base" />

                                        <span className="text-sm text-mocha-dark">
                                            {skill.name}
                                        </span>

                                    </div>

                                )

                            })}

                        </div>

                    </div>

                ))}

            </div>

        </section>

    )

}