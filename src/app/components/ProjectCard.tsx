type ProjectCardProps = {
    title: string;
    description: string;
  };
  
  export default function ProjectCard({ title, description }: ProjectCardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  }
  