import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <div id="about"><About></About></div>
      <div id="skills"><Skills></Skills></div>
      <Contact></Contact>
    </div>
  );
}
