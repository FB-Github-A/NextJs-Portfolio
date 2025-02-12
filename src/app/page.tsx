import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <Image
          src="/pic.jpg" // Ensure this path is correct
          alt="Ismat Zehra"
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-300 shadow-md"
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">Ismat Zehra</h1>
        <p className="text-gray-600 text-center mt-2">
          Bachelor's of Education, Karachi University (2010) <br />
          Experienced professional at Dianetics since 2011.
        </p>
      </div>

      <p className="text-lg text-gray-700 text-center max-w-2xl mt-6">
        Welcome to my portfolio! I have a strong background in education and years of experience working in an international organization. 
        My expertise lies in guiding, managing, and contributing to impactful projects.
      </p>

      <div className="mt-8">
        <ProjectCard
          title="Awesome Project"
          description="A brief description of my project."
        />
      </div>
    </main>
  );
}
