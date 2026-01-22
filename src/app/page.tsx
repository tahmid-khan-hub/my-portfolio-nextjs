import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div id="banner"><Banner></Banner></div>
      <div id="about"><About></About></div>
      <div id="skills"><Skills></Skills></div>
      <div id="projects"><Projects></Projects></div>
      <div id="education"><Education></Education></div>
      <div id="contact"><Contact></Contact></div>
    </div>
  );
}
