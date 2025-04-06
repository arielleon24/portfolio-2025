import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
      <main className="relative min-h-screen overflow-hidden">
        <AnimatedBackground/>
        <div className="relative-z-10">
          <Navbar/>
        </div>
      </main>
  );
}
