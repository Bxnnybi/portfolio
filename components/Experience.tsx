import { experiences } from "@/data/experience"

export default function Experience() {

    return (

        <section className="py-24">

            <h2 className="text-3xl text-center font-bold">
                Experience
            </h2>

            <div className="max-w-4xl mx-auto mt-12 space-y-8">

                {experiences.map(exp => (

                    <div
                        key={exp.role}
                        className="bg-white p-6 rounded-xl shadow"
                    >

                        <div className="flex justify-between">

                            <h3 className="font-bold">
                                {exp.role}
                            </h3>

                            <span className="text-gray-500">
                                {exp.date}
                            </span>

                        </div>

                        <p className="text-gray-600 mt-1">
                            {exp.company}
                        </p>

                        <ul className="list-disc ml-5 mt-4 space-y-1 text-sm">

                            {exp.points.map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}

                        </ul>

                    </div>

                ))}

            </div>

        </section>

    )

}