import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <div id="banner"><Banner></Banner></div>
      <div id="about"><About></About></div>
      <div id="skills"><Skills></Skills></div>
      <Contact></Contact>
    </div>
  );
}
