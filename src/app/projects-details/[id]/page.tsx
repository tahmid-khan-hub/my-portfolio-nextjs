import Loading from "@/app/loading";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ProjectData } from "../ProjectData";
import AnimateOnView from "@/hooks/AnimateOnView";

export const metadata: Metadata = {
  title: "Portfolio | Project-Details",
};

export default async function ProjectDetails({ params, }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const project = ProjectData.find((p) => p.id === Number(id));
    if(!project) return <Loading></Loading>;

    return <div className="bg-[#0c1220] pb-10">
        <AnimateOnView direction="up" delay={0.25} duration={0.6}><div className="max-w-[1350px] mx-auto px-4 md:px-3 ">
            {/* back button */}
            <AnimateOnView direction="scale" delay={0.25} duration={0.6}><Link href={'/'}><button className="border p-2 px-4 mt-11 text-blue-500 hover:text-white hover:border-blue-700 hover:bg-blue-500  text-xl transition rounded-xl"><FaArrowLeftLong size={25} /></button></Link></AnimateOnView>

            {/* content */}
            <div className="mt-9 pb-5 pt-4 bg-[#162036] rounded-xl">
                {/* title */}
                <h1 className="text-center text-3xl text-gray-300 font-bold mb-5 mt-3">{project.title}</h1>
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
                <h5 className="text-xl text-gray-300 font-semibold mt-7 mb-2">Description</h5>
                <p className="text-gray-400">{project.description}</p>
                </div>
                {/* features */}
                <div className="pl-9">
                    <h5 className="text-xl text-gray-300 font-semibold mt-7 mb-2 -ml-4">Features</h5>
                    {project.features.map((f: string, i: number) => {
                        return <li key={i} className="text-gray-400">{f}</li>
                    })}
                </div>
                {/* tech stack */}
                <div className="pl-4">
                    <h5 className="text-xl text-gray-300 font-semibold mt-7 mb-2">Tech Stack</h5>
                    {project.technologies.map((tech: string, i: number) => {
                        return <button key={i} className="px-3 py-1 mr-2 my-2 md:my-1 lg:my-0 text-xs bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600/80 hover:text-blue-200">
                        {tech}
                        </button>
                    })}
                </div>
                {/* challenges */}
                <div className="pl-4">
                    <h5 className="text-xl text-gray-300 font-semibold mt-7 mb-2">Challenegs I faced</h5>
                    <p className="text-gray-400">{project.challenges}</p>
                </div>
                {/* learned */}
                <div className="pl-4">
                    <h5 className="text-xl text-gray-300 font-semibold mt-7 mb-2">What I learned</h5>
                    <p className="text-gray-400">{project.whatILearned}</p>
                </div>
                {/* future plan */}
                <div className="pb-7 pl-4">
                    <h5 className="text-xl text-gray-300 font-semibold mt-7 mb-2">Future Plans</h5>
                    <p className="text-gray-400">{project.futurePlans}</p>
                </div>
            </div>
        </div></AnimateOnView>
    </div>
}