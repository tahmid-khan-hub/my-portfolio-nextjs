import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Portfolio | Project-Details",
};

export default async function ProjectDetails({params}: { params: { id: string } }) {
    const res = await fetch("http://localhost:3000/projectsData.json");
    const data = await res.json();

    const project = data.find((p) => p.id === params.id);
    console.log(project);
    return <div className="bg-[#0c1220] pb-10">
        <div className="max-w-[1350px] mx-auto px-4 md:px-3 ">
            {/* back button */}
            <Link href={'/'}><button className="border p-2 px-4 mt-11 text-blue-500 hover:text-white hover:border-blue-700 hover:bg-blue-500  text-xl transition rounded-xl"><FaArrowLeftLong size={25} /></button></Link>

            {/* content */}
            <div className="mt-9 pb-5 pt-4 bg-[#162036] rounded-xl">
                {/* title */}
                <h1 className="text-center text-3xl font-bold mb-5 mt-3">{project.title}</h1>
                {/* image */}
                <div>
                <Image
                    src={project.image}
                    alt="project image"
                    width={1500}
                    height={1200}
                    className="w-full h-auto px-2"
                    />
                </div>
                {/* description */}
                <div className="pl-4">
                <h5 className="text-xl font-semibold mt-7 mb-2">Description</h5>
                <p>{project.description}</p>
                </div>
                {/* features */}
                <div className="pl-9">
                    <h5 className="text-xl font-semibold mt-7 mb-2 -ml-4">Features</h5>
                    {project.features.map((f: string, i: number) => {
                        return <li key={i} className="">{f}</li>
                    })}
                </div>
                {/* tech stack */}
                <div className="pl-4">
                    <h5 className="text-xl font-semibold mt-7 mb-2">Tech Stack</h5>
                    {project.technologies.map((tech: string, i: number) => {
                        return <button key={i} className="px-3 py-1 mr-2 my-2 md:my-1 lg:my-0 text-xs bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600/80 hover:text-blue-200">
                        {tech}
                        </button>
                    })}
                </div>
                {/* challenges */}
                <div className="pl-4">
                    <h5 className="text-xl font-semibold mt-7 mb-2">Challenegs I faced</h5>
                    <p>{project.challenges}</p>
                </div>
                {/* learned */}
                <div className="pl-4">
                    <h5 className="text-xl font-semibold mt-7 mb-2">What I learned</h5>
                    <p>{project.whatILearned}</p>
                </div>
                {/* future plan */}
                <div className="pb-7 pl-4">
                    <h5 className="text-xl font-semibold mt-7 mb-2">Future Plans</h5>
                    <p>{project.futurePlans}</p>
                </div>
            </div>
        </div>
    </div>
}