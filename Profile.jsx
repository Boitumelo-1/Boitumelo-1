"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Calendar, Star, Rocket, Zap, Code, Coffee } from "lucide-react"

export default function SpaceProfile() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [stars, setStars] = useState([])

  const funFacts = [
    "I started coding clueless about computers, and discovering how they work has been an exciting journey.🧩",
    "I've watched every Star Wars movie at least 5 times ⭐",
    "I code better with lo-fi music playing in the background 🎵",
    "I once debugged code for hours only to find out it was a missing semicolon😅",
    "I see both coding and modeling as forms of creativity—one builds logic, the other builds expression.🎨",
    "📸When I’m not coding, I like capturing moments through photography.",
  ]

  const skills = ["Java", "JavaScript", "Visual Basic", "Python", "SQL", "Git", "MongoDB"]

  const education = [
    {
      Qualification: "Diploma in ICT in Aplication Development",
      institution: "Walter Sisulu University",
      year: "2022 - 2024",
      description: "Specialized in Software Development",
    },
    {
      Qualification: "Matric",
      institution: "Boipelo Secondary School",
      year: "2016 - 2020",
      description: "Mathematics and Physical Sciences",
    },
  ]

  const certifications = [
    {
      title: "Java SE 8 Programmer",
      issuer: "Oracle",
      year: "2025",
      description: "1Z0-808 Certification",
    },
    {
      title: "Information Technology Specialist",
      issuer: "Certiport",
      year: "2025",
      description: "Professional Skills Certification",
    },
    {
      title: "AI Fundamentals",
      issuer: "IBM",
      year: "2025",
      description: "Artificial Intelligence Professional Skills",
    },
  ]

  const experience = [
    {
      title: "Software Development Trainee - Java Program",
      company: "Afrika Tikkun",
      period: "May 2025 - Present",
      description: [
        "Gained hands-on experience in Java programming (OOP, data structures, algorithms, exception handling)",
        "Developed and tested console and GUI-based applications using Java",
        "Collaborated in team projects, using Git/GitHub for version control",
        "Practiced debugging, testing, and documentation to ensure code quality",
      ],
    },
  ]

  const projects = [
    {
      title: "Cosmic Task Manager",
      description: "A space-themed productivity app with stellar animations",
      tech: ["React", "TypeScript", "Framer Motion"],
      status: "Live",
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for understanding AI architectures",
      tech: ["Python", "TensorFlow", "D3.js"],
      status: "In Progress",
    },
    {
      title: "Quantum Code Editor",
      description: "Next-gen code editor with AI-powered suggestions",
      tech: ["Electron", "Monaco", "OpenAI API"],
      status: "Planning",
    },
  ]

  // Generate random stars on mount
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3,
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  // Auto-advance fun facts slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [funFacts.length])

  const generateAndDownloadCV = () => {
    import("jspdf")
      .then(({ default: jsPDF }) => {
        const doc = new jsPDF()
        doc.setFontSize(20)
        doc.setFont(undefined, "bold")
        doc.text("BUYISWA ASANDA ZOZI", 20, 20)
        doc.setFontSize(12)
        doc.setFont(undefined, "normal")
        doc.text("Information Communication Technology - Application Development Graduate", 20, 30)
        doc.text("+27 67 681 4892 | zozibuyiswa@gmail.com | Johannesburg, Gauteng", 20, 40)
        doc.setFontSize(14)
        doc.setFont(undefined, "bold")
        doc.text("PROFILE", 20, 55)
        doc.setFontSize(10)
        doc.setFont(undefined, "normal")
        const profileText = `My academic background has provided me with a strong foundation in software development and problem-solving skills. I am passionate about enhancing my technical expertise to create efficient and innovative applications that meet user needs. I am eager to tackle complex challenges and contribute to projects that enhance functionality and improve user experience in dynamic environments.`
        const splitProfile = doc.splitTextToSize(profileText, 170)
        doc.text(splitProfile, 20, 65)
        doc.setFontSize(14)
        doc.setFont(undefined, "bold")
        doc.text("EDUCATION AND CERTIFICATION", 20, 95)
        doc.setFontSize(10)
        doc.setFont(undefined, "normal")
        doc.text("Walter Sisulu University | 2022 – 2024", 20, 105)
        doc.text("Diploma in Information and Communication Technology in Application Development", 20, 115)
        doc.text("Oracle | 2025", 20, 130)
        doc.text("1Z0-808 – Java SE 8 Programmer", 20, 140)
        doc.text("Certiport | 2025", 20, 155)
        doc.text("Information Technology Specialist", 20, 165)
        doc.text("IBM | 2025", 20, 180)
        doc.text("Artificial Intelligence Fundamentals Professional Skills", 20, 190)
        doc.setFontSize(14)
        doc.setFont(undefined, "bold")
        doc.text("LEADERSHIP AND EXTRACURRICULAR", 20, 210)
        doc.setFontSize(10)
        doc.setFont(undefined, "normal")
        doc.text("Marketing Officer – WSU BCC Enactus | July 2023 – August 2024", 20, 220)
        doc.text("• Worked collaboratively with executive members to organize events and initiatives", 20, 230)
        doc.text("  that align with the society's objectives.", 20, 240)
        doc.text("• Creating and executing advertising campaigns to promote the organization.", 20, 250)
        doc.setFontSize(14)
        doc.setFont(undefined, "bold")
        doc.text("PROGRAMMING LANGUAGES", 20, 270)
        doc.setFontSize(10)
        doc.setFont(undefined, "normal")
        doc.text("• Java    • Visual Basic    • JavaScript    • Python", 20, 280)
        doc.addPage()
        doc.setFontSize(14)
        doc.setFont(undefined, "bold")
        doc.text("EXPERIENCE", 20, 20)
        doc.setFontSize(10)
        doc.setFont(undefined, "normal")
        doc.text("Software Development Trainee – Java Program", 20, 30)
        doc.text("Afrika Tikkun | May 2025 - Present", 20, 40)
        doc.text("• Gained hands-on experience in Java programming (OOP, data structures,", 20, 55)
        doc.text("  algorithms, exception handling).", 20, 65)
        doc.text("• Developed and tested console and GUI-based applications using Java.", 20, 75)
        doc.text("• Collaborated in team projects, using Git/GitHub for version control.", 20, 85)
        doc.text("• Practiced debugging, testing, and documentation to ensure code quality.", 20, 95)
        doc.save("Buyiswa_Asanda_Zozi_CV.pdf")
      })
      .catch((error) => {
        console.error("Error loading jsPDF:", error)
        const link = document.createElement("a")
        link.href = "/Buyiswa Asanda Zozi Dev.pdf"
        link.download = "Buyiswa_Asanda_Zozi_CV.pdf"
        link.click()
      })
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Star Field Background */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white twinkle-animation"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
        <div className="shooting-star absolute w-1 h-1 bg-primary rounded-full" style={{ animationDelay: "2s" }} />
        <div className="shooting-star absolute w-1 h-1 bg-primary rounded-full" style={{ animationDelay: "8s" }} />
        <div className="shooting-star absolute w-1 h-1 bg-primary rounded-full" style={{ animationDelay: "15s" }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-primary float-animation" />
            <span className="text-2xl font-bold text-white">Buyiswa Zozi</span>
          </div>
          <div className="flex gap-4">
            <Button
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/80 glow-effect"
              onClick={generateAndDownloadCV}
            >
              <span className="flex items-center gap-2">📄 Download CV</span>
            </Button>
            <Button variant="ghost" size="sm" className="glass-effect hover:glow-effect">
              <a
                href="https://www.linkedin.com/in/buyiswa-zozi-087980273/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="glass-effect hover:glow-effect">
              <a
                href="https://github.com/Boitumelo-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-purple-600 p-1 glow-effect">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <img src="/profile.jpeg" alt="Buyiswa Profile" className="w-44 h-44 rounded-full object-cover" />
              </div>
            </div>
            <div className="absolute inset-0 orbit-animation">
              <Code className="w-6 h-6 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4 text-white">Buyiswa Asanda Zozi</h1>
          <p className="text-xl text-muted-foreground mb-6">Software Developer</p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Johannesburg, South Africa
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Available for new opportunities
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-12">
          <Card className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation max-w-4xl mx-auto" style={{ animationDelay: "1s" }}>
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Coffee className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">About Me</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-balance">
                  I'm a passionate and curious software development trainee with hands-on experience in Java
                  programming, problem-solving, and building practical projects. I enjoy turning real-world challenges
                  into code solutions, exploring how technology works, and continuously learning new skills.
                </p>
                <p className="text-balance">
                  When I started coding, I had no idea how a computer works—but over time, I've grown to love
                  understanding the logic behind it all. Beyond coding, I have a creative side and experience in
                  modeling, which has helped me develop confidence, presentation skills, and a keen eye for detail.
                </p>
                <p className="text-balance">
                  I thrive at the intersection of logic and creativity, whether it's debugging a tricky program,
                  building an application, or expressing myself through modeling. I'm always excited to learn, grow, and
                  contribute to innovative projects that make a real impact.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <Card className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation max-w-2xl mx-auto">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/30 text-white border-primary/50 hover:bg-primary/40"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={edu.Qualification}
                className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-balance">{edu.Qualification}</h3>
                    <Badge variant="outline" className="text-xs">
                      {edu.year}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground text-balance">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-balance">{cert.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {cert.year}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                  <p className="text-muted-foreground text-balance">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <Card
                key={exp.title}
                className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-balance">{exp.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  <div className="space-y-2 text-muted-foreground">
                    {exp.description.map((desc, descIndex) => (
                      <p key={descIndex}>{desc}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-balance">{project.title}</h3>
                    <Badge
                      variant={
                        project.status === "Live"
                          ? "default"
                          : project.status === "In Progress"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-balance">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun Facts Slideshow */}
        <Card className="mb-12 glass-effect border-primary/20 hover:glow-effect transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary twinkle-animation" />
              <h3 className="text-lg font-semibold">Fun Fact #{currentFactIndex + 1}</h3>
              <Star className="w-5 h-5 text-primary twinkle-animation" />
            </div>
            <p className="text-lg text-balance">{funFacts[currentFactIndex]}</p>
            <div className="flex justify-center gap-2 mt-4">
              {funFacts.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentFactIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="mb-12">
          <Card className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Contact</h3>
              </div>
              <p className="text-muted-foreground mb-4">Ready to collaborate? Let's connect!</p>
              <Button className="w-full bg-primary hover:bg-primary/80 glow-effect" asChild>
                <a href="mailto:zozibuyiswa@gmail.com?subject=Let's Connect&body=Hi Buyiswa, I'd like to discuss a potential collaboration opportunity">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center py-8">
          <p className="text-muted-foreground">Built with ❤️ and lots of ☕ • Powered by Code</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="ghost" size="sm" className="glass-effect hover:glow-effect">
              <a
                href="https://github.com/Boitumelo-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="glass-effect hover:glow-effect">
              <a
                href="https://www.linkedin.com/in/buyiswa-zozi-087980273/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="glass-effect hover:glow-effect" title="Send me an email">
              <a
                href="mailto:zozibuyiswa@gmail.com?subject=Hello Buyiswa&body=Hi Buyiswa,%0D%0A%0D%0AI'd like to get in touch with you.%0D%0A%0D%0ABest regards"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </footer>
      </main>
    </div>
  )
}
