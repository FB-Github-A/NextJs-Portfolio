import Image from "next/image";
import ProjectCard from "./components/ProjectCard"; // Ensure correct import path

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <Image
          src="/profile.jpg" // Ensure this file exists in the 'public/' directory
          alt="Farwa-batool"
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-300 shadow-md"
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">Farwa Batool</h1>
        <p className="text-gray-600 text-center mt-2">
          Bachelors of Education, Karachi University (2010) <br />
          Experienced professional at Dianetics since 2011.
        </p>
      </div>

      <p className="text-lg text-gray-700 text-center max-w-2xl mt-6">
      Welcome to my portfolio! I have a strong background in education and years of experience working in an international organization.
      My expertise lies in guiding, managing, and contributing to impactful projects.</p>
      <div className="mt-8">
        <ProjectCard
          title="Awesome Project"
          description="A brief description of my project."
        />
      </div>
    </main>
  );
}
