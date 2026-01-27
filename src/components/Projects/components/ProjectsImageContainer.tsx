import Image from "next/image";

const ProjectsImageContainer = ({image, title}:{image: string; title: string;}) => {
  return (
    <div className="p-2">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="rounded-lg mb-4 object-cover w-full h-56"
      />
    </div>
  );
};

export default ProjectsImageContainer;
