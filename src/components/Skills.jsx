const Skills = () => {
  const skillsData = {
    "Programming Languages": ["Python", "JavaScript", "SQL"],
    "NLP Tools": ["Hugging Face", "Transformers", "LangChain", "SpaCy", "NLTK"],
    "AI/ML Frameworks": ["Scikit-learn", "TensorFlow (basic)", "PyTorch (basic)"],
    "LLMs and APIs": ["LLAMA", "GPT", "OpenAI API", "RAG", "FAISS", "Chroma"],
    "Web Development": ["Next.js", "MongoDB", "Tailwind CSS", "Streamlit"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib"],
    "Version Control": ["Git", "GitHub"],
    "Interested to Learn": ["UIMA", "Graph-based NLP"]
  };

  const softSkills = [
    "Research Collaboration",
    "Scientific Writing",
    "Communication & Presentation",
    "Problem Solving & Critical Thinking"
  ];

  const languages = [
    { name: "URDU", level: "Mother tongue" },
    { name: "ENGLISH", level: "Fluent" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-primary pb-2">Skills</span>
        </h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-4 text-primary">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md w-full md:w-auto md:min-w-[200px] text-center">
                <span className="text-primary font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Language Skills</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-1/2 lg:w-1/3">
                <h4 className="text-xl font-bold text-primary mb-2">{lang.name}</h4>
                <p className="text-gray-600">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;