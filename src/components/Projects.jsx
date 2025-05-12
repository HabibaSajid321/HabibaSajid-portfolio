const Projects = () => {
  const projectsData = [
    {
      title: "Medical Bot using LLAMA2",
      description: "Developed a medical chatbot using LLAMA2, LangChain, and RAG for real-time interaction. Integrated diverse datasets for accurate medical responses.",
      technologies: ["LLAMA2", "LangChain", "RAG"]
    },
    {
      title: "Thematic Learning Project (AI for Education)",
      description: "Created an AI-based educational tool generating course content and assessments using LLAMA-13B. Focused on content selection and sentence generation in NLG pipeline.",
      technologies: ["LLAMA-13B", "NLG", "AI Education"]
    },
    {
      title: "AI-Enhanced Code Collaboration",
      description: "Developed AI-assisted code review and collaboration platform using Replit, Cursor, and Claude. Integrated real-time code analysis and generative AI for developer support.",
      technologies: ["Replit", "Cursor", "Claude", "AI Code Review"]
    },
    {
      title: "3D Pose Comparison of Players (Computer Vision & AI)",
      description: "Built a tool using Mediapipe and OpenCV for 3D human pose analysis in sports and rehabilitation.",
      technologies: ["Mediapipe", "OpenCV", "Computer Vision"]
    },
    {
      title: "Web Tool for Predicting Thermal Stability of I-motif Structures",
      description: "USDA-funded web tool for predicting thermal stability of DNA i-motif structures. Built sequence analysis models and visualization tools using Python and JavaScript.",
      technologies: ["Python", "JavaScript", "Bioinformatics"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-primary pb-2">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;