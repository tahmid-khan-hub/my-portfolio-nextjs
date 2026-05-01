import Loading from "@/app/loading";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "../ProjectData";
import AnimateOnView from "@/hooks/AnimateOnView";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

export const metadata: Metadata = {
  title: "Portfolio | Project-Details",
};

export default async function ProjectDetails({ params, }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const project = ProjectData.find((p) => p.id === Number(id));
    if(!project) return <Loading></Loading>;

    return <div className="bg-[#0c1220] py-10 min-h-screen">
        <AnimateOnView direction="up" delay={0.25} duration={0.6}><div className="max-w-337.5 mx-auto px-4 md:px-3 ">
            {/* content */}
            <div className="mt-9 pb-5 pt-4 rounded-xl">
                {/* title */}
                <Link href={"/"}><h1 className="flex text-left text-3xl text-gray-300 font-bold mb-10"><FaLongArrowAltLeft className="mr-3 mt-0.5" size={35} />Project Details</h1></Link>
                {/* image */}
                <div className="border border-gray-500">
                <Image
                    src={project.image}
                    alt="project image"
                    width={1500}
                    height={1200}
                    className="w-full h-auto px-2"
                    />
                </div>
                {/* project - title */}
                <h1 className="text-left text-4xl text-gray-300 font-bold mt-10 mb-4">{project.title}</h1>
                {/* description */}
                <div className="">
                    <p className="text-gray-300 bg-gray-900 border border-gray-700 hover:bg-gray-800 rounded-lg p-3">{project.description}</p>
                </div>
                {/* features */}
                <div className="">
                    <h5 className="text-4xl text-gray-300 font-bold mt-10 mb-4">Features</h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {project.features.map((feature: string, i: number) => {
                        return <div key={i} className="h-full text-gray-300 bg-gray-900 border border-gray-700 hover:bg-gray-800 rounded-lg p-3 pb-7 pl-4">
                            <MdOutlineTipsAndUpdates
                            className="text-blue-500 mt-0.5 mb-2.5 shrink-0" size={25} />
                            <span>{feature}</span>
                        </div>
                    })}
                    </div>
                </div>
                {/* tech stack */}
                <div className="">
                    <h5 className="text-xl text-gray-300 font-semibold mt-7 mb-2">Tech Stack</h5>
                    {project.technologies.map((tech: string, i: number) => {
                        return <button key={i} className="px-3 py-1 mr-2 my-2 md:my-1 lg:my-0 text-xs bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600/80 hover:text-blue-200">
                        {tech}
                        </button>
                    })}
                </div>
                {/* challenges */}
                <div className="">
                    <h5 className="text-xl text-gray-300 font-semibold mt-7 mb-2">Challenegs I faced</h5>
                    <p className="text-gray-400">{project.challenges}</p>
                </div>
                {/* learned */}
                <div className="">
                    <h5 className="text-xl text-gray-300 font-semibold mt-7 mb-2">What I learned</h5>
                    <p className="text-gray-400">{project.whatILearned}</p>
                </div>
                {/* future plan */}
                <div className="pb-7 ">
                    <h5 className="text-xl text-gray-300 font-semibold mt-7 mb-2">Future Plans</h5>
                    <p className="text-gray-400">{project.futurePlans}</p>
                </div>
            </div>
        </div></AnimateOnView>
    </div>
}