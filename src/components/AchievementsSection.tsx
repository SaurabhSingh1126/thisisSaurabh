import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Competitive Programming",
      description:
        "Solved 250+ problems focusing on Data Structures & Algorithms across major coding platforms.",
      platforms: ["LeetCode", "Codeforces", "HackerRank"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Full-Stack Development Projects",
      description:
        "Built 5+ real-world applications using React, Node.js & MySQL with authentication and REST API integration.",
      platforms: ["React", "Node.js", "MySQL"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Machine Learning Implementation",
      description:
        "Developed Gold Price Prediction system  using regression models and LSTM.",
      platforms: ["Python", "Scikit-learn", "LSTM"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3v18M3 12h18" />
        </svg>
      ),
      color: "from-green-500 to-emerald-600"
    },
    
  ];

  const certifications = [
    {
      title: "Web Development ",
      issuer: "Coursera",
      date: "2026",
      verified: true
    },
    {
      title: "Python for Beginners",
      issuer: "Coursera",
      date: "2024",
      verified: true
    },
    {
      title: "Digital Marketing",
      issuer: "udemy",
      date: "2024",
      verified: true
    },
    {
      title: "Java Programming",
      issuer: "Udemy",
      date: "2025",
      verified: true
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning, real-world development, and problem-solving excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary mb-6">Achievements</h3>
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-gradient-hero border-border shadow-card hover:shadow-glow transition-smooth"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {achievement.platforms.map((platform, i) => (
                      <Badge key={i} variant="outline" className="border-primary/30 text-primary">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-gradient-hero border-border shadow-card hover:shadow-glow transition-smooth"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {cert.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      {cert.verified && (
                        <div className="flex items-center space-x-2 text-green-500">
                          <span className="text-sm font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-secondary/30 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center p-6 bg-secondary/30 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Coding Platforms</div>
          </div>
          <div className="text-center p-6 bg-secondary/30 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 bg-secondary/30 rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;