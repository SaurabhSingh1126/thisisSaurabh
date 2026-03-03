import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import saurabhPortrait from "@/assets/saurabh-new-portrait.jpg";
import resumeFile from "@/assets/saurabh's.resume.pdf";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);
  const bubbleContainerRef = useRef(null);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-heading", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
      gsap.from(".hero-subheading", {
        y: 60,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        delay: 0.6,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".hero-buttons", {
        y: 40,
        opacity: 0,
        delay: 0.9,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          // Animate social icons only AFTER buttons appear
          gsap.to(".social-links a", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          });
        },
      });
      gsap.from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        delay: 1.4,
        duration: 1.2,
        ease: "elastic.out(1,0.8)",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Bubble background effect
  useEffect(() => {
  const container = bubbleContainerRef.current;

  for (let i = 0; i < 5; i++) {   // 👈 changed from 10 to 5
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.width = `${15 + Math.random() * 25}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.animationDuration = `${8 + Math.random() * 6}s`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(bubble);
  }
}, []);

  // Magnetic effect
  const addMagnetic = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(target, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const resetMagnetic = (e) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.4, ease: "power3.out" });
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background/90 to-background"
    >
      {/* Bubble Effect Background */}
      <div
        ref={bubbleContainerRef}
        className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      ></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h1 className="hero-heading text-5xl lg:text-7xl font-bold text-foreground">
                Hi, I'm <span className="text-accent">Saurabh Singh</span>
              </h1>
              <h2 className="hero-subheading text-xl lg:text-2xl text-muted-foreground font-medium">
                Passionate IT Student | Aspiring Full-Stack Developer
              </h2>
              <p className="hero-text text-lg text-muted-foreground max-w-xl leading-relaxed">
                Building innovative web solutions and learning cutting-edge
                technologies to create real-world impact. Currently pursuing
                B.Tech in Information Technology at ABES Engineering College.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="magnetic bg-accent text-accent-foreground hover:bg-accent/90 transition-smooth text-lg px-8 py-3 rounded-lg shadow-lg"
                onMouseMove={addMagnetic}
                onMouseLeave={resetMagnetic}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
              <Button
               variant="outline"
                size="lg"
                className="magnetic border-border text-foreground hover:bg-secondary transition-smooth text-lg px-8 py-3 rounded-lg shadow-lg"
                 onMouseMove={addMagnetic}
                 onMouseLeave={resetMagnetic}
                  asChild
      >
     <a href={resumeFile} download="Saurabh_Singh_Resume.pdf">
     Download Resume
   </a>
 </Button>
            </div>

            {/* Social Links */}
            <div className="social-links flex space-x-4 mt-8">
              {[
                {
                  href: "https://github.com/SaurabhSingh1126",
                  svg: (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.387 7.865 10.915.575.106.785-.25.785-.555 
                      0-.273-.01-1.152-.015-2.088-3.2.696-3.878-1.544-3.878-1.544-.523-1.332-1.278-1.686-1.278-1.686-1.045-.714.079-.699.079-.699 
                      1.157.081 1.767 1.188 1.767 1.188 1.028 1.762 2.697 1.253 3.354.958.104-.745.402-1.253.73-1.54-2.553-.29-5.235-1.278-5.235-5.686 
                      0-1.257.45-2.285 1.187-3.092-.119-.29-.515-1.454.113-3.031 0 0 .968-.31 3.172 1.181a11.045 11.045 0 0 1 2.889-.389c.98.004 
                      1.969.133 2.889.389 2.204-1.491 3.171-1.181 3.171-1.181.629 1.577.233 2.741.114 3.031.739.807 1.187 1.835 1.187 3.092 
                      0 4.42-2.688 5.392-5.253 5.675.414.356.781 1.056.781 2.131 0 1.539-.014 2.78-.014 3.159 
                      0 .308.208.667.791.554C20.71 21.383 24 17.085 24 12c0-6.352-5.148-11.5-12-11.5Z"
                    />
                  ),
                },
                {
                  href: "https://linkedin.com/in/saurabh-singh-5913252a3",
                  svg: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  ),
                },
               {
  href: "mailto:saurabhsingh26rajput@gmail.com",
  svg: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 
         0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 0l8 6 8-6m-16 0v12h16V4"
    />
  ),
}

              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-smooth flex items-center justify-center shadow-md opacity-0 translate-y-6"
                  onMouseMove={addMagnetic}
                  onMouseLeave={resetMagnetic}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    stroke={idx === 2 ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                  >
                    {link.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative hero-image">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl"></div>
              <img
                src={saurabhPortrait}
                alt="Saurabh Singh - Full Stack Developer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-card border border-border"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bubble Effect Styles */}
      <style>{`
        .bubble {
          position: absolute;
          bottom: -100px;
          background: rgba(12, 53, 63, 0.3);
          border-radius: 50%;
          animation: rise linear infinite;
        }
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-120vh) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
