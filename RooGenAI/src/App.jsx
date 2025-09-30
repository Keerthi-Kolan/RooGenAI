import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import AboutCarousel from "./components/AboutCarousel";
import MeetOurAdvisors from "./components/MeetOurAdvisors";
import MeetOurTeam from "./components/MeetOurTeam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const homeRef = useRef(null);
  const meetOurTeamRef = useRef(null);
  const meetOurAdvisorsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen text-neutral-300 bg-black">
      {/*This is the radial Background behind the common black Background*/}
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-[-1]"></div>
      </div>

      {/* Sticky Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          meetOurTeamRef,
          meetOurAdvisorsRef,
          contactRef,
        }}
      />

      {/* Page Content */}
      <div className="container mx-auto px-8 pb-24">
        <div ref={homeRef} className="scroll-mt-28">
          <AboutCarousel />
        </div>
        <div ref={meetOurTeamRef} className="scroll-mt-28">
          <MeetOurTeam />
        </div>
        <div ref={meetOurAdvisorsRef} className="scroll-mt-28">
          <MeetOurAdvisors />
        </div>
        <div ref={contactRef} className="scroll-mt-28">
          <Contact />
        </div>
        <div className="scroll-mt-28">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
