import { 
FaPython,
FaJava,
FaGitAlt,
FaDocker,
FaNodeJs,
FaReact,
FaGithub
} from "react-icons/fa"

import {
SiJavascript,
SiTypescript,
SiNextdotjs,
SiSupabase,
SiPostgresql,
SiMongodb,
SiMysql,
SiDart,
SiArduino,
SiGooglecloud,
SiDjango,
SiFlutter,
SiCplusplus,
SiTailwindcss
} from "react-icons/si"

export const skills = {

Languages: [

{ name:"Python", icon:FaPython },
{ name:"JavaScript", icon:SiJavascript },
{ name:"TypeScript", icon:SiTypescript },
{ name:"C++", icon:SiCplusplus }

],

Frameworks: [

{ name:"Next.js", icon:SiNextdotjs },
{ name:"Node.js", icon:FaNodeJs },
{ name:"React", icon:FaReact },
{ name:"Django", icon:SiDjango },
{ name:"Flutter", icon:SiFlutter },
{ name:"Tailwind CSS", icon:SiTailwindcss },


],

Database: [

{ name:"Supabase", icon:SiSupabase },
{ name:"PostgreSQL", icon:SiPostgresql },
{ name:"MySQL", icon:SiMysql },
{ name:"MongoDB", icon:SiMongodb }

],

Tools: [

{ name:"GitHub", icon:FaGithub },
{ name:"Docker", icon:FaDocker },
{ name:"GCP", icon:SiGooglecloud },
{ name:"Arduino IDE", icon:SiArduino }

],



}