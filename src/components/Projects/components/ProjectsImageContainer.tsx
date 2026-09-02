import Image from "next/image";

const ProjectsImageContainer = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="relative w-full h-[280px] md:h-[320px] rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(min-width: 768px) 40vw, 100vw"
      />
    </div>
  );
};

export default ProjectsImageContainer;
