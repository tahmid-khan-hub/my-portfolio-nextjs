import Image from "next/image";

const ProjectsImageContainer = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="p-2 w-full h-full">
      <div className="relative w-full h-full min-h-[260px] rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </div>
    </div>
  );
};

export default ProjectsImageContainer;
