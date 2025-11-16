import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "KURA - Chat Application",
    description:"A secure MERN chat application, featuring AES encryption for enhanced privacy and real-time messaging capabilities.",
    image: "/projects/project1.png",
    tags: ["MERN", "SocketIO", "Tailwind", "AES"],
    demoUrl: "https://kura-indol.vercel.app/",
    githubUrl: "https://github.com/AadityaDhungana/Kura---Encrypted-Chat-Application",
  },
  {
    id: 2,
    title: "BookSphere",
    description: "A full-stack MERN application for managing books, featuring user authentication and a responsive UI.",
    image: "/projects/project2.png",
    tags: ["MERN", "Bootstrap", "Gutenberg API"],
    demoUrl: "https://book-sphere-mern.vercel.app/",
    githubUrl: "https://github.com/AadityaDhungana/BookSphere_MERN",
  },
  {
    id: 3,
    title: "Online Arts Gallery",
    description:"An online arts gallery built with Django, showcasing artworks with a modern design and interactive features.",
    image: "/projects/project3.png",
    tags: ["Django", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/AadityaDhungana/Online_Arts_Gallery----Django",
  },
  {
    id: 4,
    title: "Bank-Loan-Approval",
    description: "A bank loan approval application using scikit learn machine learning model and django authentication..",
    image: "/projects/project4.png",
    tags: ["Scikit-learn", "Django", "Bootstrap"],
    githubUrl: "https://github.com/AadityaDhungana/Bank-Loan-Approval--ML-Django-Project",
  },
  {
    id: 5,
    title: "Spam-Email-Classification-Tensorflow",
    description:"A Deep Learning project using BERT Model to identify spam email with help of Tensorflow and Django.",
    image: "/projects/project5.png",
    tags: ["Tensorflow", "Django", "Bootstrap"],
    githubUrl: "https://github.com/AadityaDhungana/Spam-Email-Classification-Tensorflow"
  }

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (<a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>)}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/userDoffy"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
