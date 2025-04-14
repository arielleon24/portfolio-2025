import About from "@/components/about";
import AnimatedBackground from "@/components/animated-background";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Skills from "@/components/skills";

export default function Home() {
  return (
      <main className="relative min-h-screen overflow-hidden">
        <AnimatedBackground/>
        <div className="relative-z-10">
          <Navbar/>
          <Intro/>
          <About/>
          <Resume/>
          <Skills/>
          <Projects/>
          <Footer/>
        </div>
      </main>
  );
}
