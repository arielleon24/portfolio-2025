import About from "@/components/about";
import AnimatedBackground from "@/components/animated-background";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import Resume from "@/components/resume";

export default function Home() {
  return (
      <main className="relative min-h-screen overflow-hidden">
        <AnimatedBackground/>
        <div className="relative-z-10">
          <Navbar/>
          <Intro/>
          <About/>
          <Resume/>
        </div>
      </main>
  );
}
