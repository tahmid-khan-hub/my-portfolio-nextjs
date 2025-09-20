import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="max-w-[1350px] mx-auto p-6">
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}
