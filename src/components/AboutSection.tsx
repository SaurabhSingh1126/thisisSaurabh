"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Fade + slide-in animation
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
    });

    // Stats bobble animation
    gsap.to(statsRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
    });

    // Icon bobble animation
    gsap.to(iconRef.current, {
      y: -8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1.5,
    });

    // Floating bubbles animation
    const bubbles = bubbleRef.current?.querySelectorAll(".bubble");
    if (bubbles) {
      bubbles.forEach((bubble) => {
        gsap.to(bubble, {
          y: -150 - Math.random() * 100,
          repeat: -1,
          duration: 8 + Math.random() * 4,
          ease: "none",
          delay: Math.random() * 5,
        });
      });
    }

    // Magnetic hover effect
    const card = cardRef.current;
    if (card) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(card, {
          x: x * 0.05,
          y: y * 0.05,
          rotateX: -y * 0.05,
          rotateY: x * 0.05,
          ease: "power3.out",
          duration: 0.5,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          ease: "power3.out",
          duration: 0.5,
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-secondary/20 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Floating Bubbles (Reduced to 6) */}
      <div ref={bubbleRef} className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => {
          const size = 20 + Math.random() * 40;
          return (
            <div
              key={i}
              className="bubble absolute rounded-full bg-accent/30"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
            ></div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and driven by curiosity to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-foreground">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am <span className="text-accent font-semibold">Saurabh Singh</span>, a passionate IT student with a strong interest in web development and problem-solving. I enjoy learning new technologies and building projects that create real-world impact.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My career goal is to become a skilled full-stack software developer and contribute to innovative solutions that make life easier and more connected.
              </p>
            </div>

            {/* Quick Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-accent">2027</div>
                <div className="text-sm text-muted-foreground">Expected Graduation</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-accent">12+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div ref={cardRef}>
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4" ref={iconRef}>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-accent-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        Education
                      </h3>
                      <p className="text-muted-foreground">
                        Current Academic Journey
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-xl font-semibold text-foreground">
                      B.Tech in Information Technology
                    </h4>
                    <p className="text-accent font-medium">
                      ABES Engineering College, Ghaziabad
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Expected 2027
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Focusing on software development, data structures, algorithms, and modern web technologies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;