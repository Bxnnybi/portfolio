import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"

export default function Contact(){

return(

<section
id="contact"
className="py-28 flex flex-col items-center text-center"
>

<h2 className="text-3xl font-bold text-mocha-dark">
Let's Work Together
</h2>

<p className="mt-3 text-mocha-dark/70 max-w-md">
If you're looking for a passionate developer for an internship or collaboration, I'd love to connect.
</p>

<div className="grid grid-cols-3 gap-12 mt-10">

{/* EMAIL */}

<div className="flex flex-col items-center">

<FaEnvelope className="text-xl text-mocha-dark"/>

<p className="mt-2 font-medium">
Email
</p>

<a
href="mailto:firdaws.sss17@gmail.com"
className="text-sm text-mocha-dark/70 hover:underline"
>
firdaws.sss17@gmail.com
</a>

</div>


{/* GITHUB */}

<div className="flex flex-col items-center">

<FaGithub className="text-xl text-mocha-dark"/>

<p className="mt-2 font-medium">
GitHub
</p>

<a
href="https://github.com/bxnnybi"
target="_blank"
className="text-sm text-mocha-dark/70 hover:underline"
>
github.com/bxnnybi
</a>

</div>


{/* PHONE */}

<div className="flex flex-col items-center">

<FaPhone className="text-xl text-mocha-dark"/>

<p className="mt-2 font-medium">
Phone
</p>

<p className="text-sm text-mocha-dark/70">
+66 630-322-936
</p>

</div>

</div>

</section>

)

}