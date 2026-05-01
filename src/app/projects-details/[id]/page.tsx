import Loading from "@/app/loading";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "../ProjectData";
import AnimateOnView from "@/hooks/AnimateOnView";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

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
                <div className="border border-gray-700 rounded-lg">
                <Image
                    src={project.image}
                    alt="project image"
                    width={1500}
                    height={1200}
                    className="w-full px-2"
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
                    <h5 className="text-4xl text-gray-300 font-bold mt-10 mb-4">Tech Stack</h5>
                    {project.technologies.map((tech: string, i: number) => {
                        return <button key={i} className="px-5 py-2 mr-2 my-2 bg-gray-900 border border-gray-800 text-blue-500 rounded-full hover:bg-blue-600/80 hover:text-blue-200">
                        {tech}
                        </button>
                    })}
                </div>
                {/* challenges */}
                <div className="mt-7">
                    <h5 className="text-4xl text-gray-300 font-bold mt-10 mb-4">Challenges Faced</h5>
                    <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                        <div className="border-l-2 border-blue-500 pl-4">
                        <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
                        </div>
                    </div>
                </div>
                {/* learned */}
                <div className="">
                    <h5 className="text-4xl text-gray-300 font-bold mt-10 mb-4">What I learned</h5>
                    <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                        <div className="border-l-2 border-blue-500 pl-4">
                        <p className="text-gray-400 leading-relaxed">{project.whatILearned}</p>
                        </div>
                    </div>
                </div>
                {/* future plan */}
                <div className="pb-7">
                    <h5 className="text-4xl text-gray-300 font-bold mt-10 mb-4">Future Plans</h5>
                    {project.futurePlans.map((plans: string, i: number) => {
                        return <div key={i} className="ml-3">
                            <p className="flex">
                                <HiOutlineChevronDoubleRight size={20} className="mb-5 mr-2 mt-0.5 text-blue-500" />
                                <span className="text-gray-300">{plans}</span>
                            </p>
                        </div>
                    })}
                </div>
            </div>
        </div></AnimateOnView>
    </div>
}