const Experience = () => {
  const experienceData = [
    {
      position: "AI Engineer Intern",
      company: "Techloset Solutions",
      duration: "01/12/2024 – CURRENT",
      description: "Working on AI and NLP-based projects involving large language models and AI-powered applications."
    },
    {
      position: "Coding Bootcamp Lead",
      company: "Techloset Solutions",
      duration: "10/12/2024 – CURRENT",
      description: [
        "Leading coding bootcamps for students and early professionals, focusing on AI, Python, and full-stack development.",
        "Designing practical coding tasks and projects, monitoring participants' progress, and providing mentorship and debugging support."
      ]
    },
    {
      position: "Final Year Research Project",
      company: "Bioinformatics Lab, Center of Advanced Studies, UAF",
      duration: "01/12/2023 – 15/05/2024",
      description: [
        "Worked as part of my final year project to develop a USDA-funded web tool for predicting thermal stability of DNA i-motif structures.",
        "Built sequence analysis models and visualization tools using Python and JavaScript.",
        "Contributed to research in computational genomics and bioinformatics pipelines."
      ]
    },
    {
      position: "Collaborator",
      company: "Codon Optimization Tool for Protein Sequence Analysis (E. coli Focus)",
      duration: "10/07/2024 – 12/12/2024",
      description: [
        "Contributed to the development of a codon optimization tool to analyze and optimize protein sequences for expression in E. coli.",
        "Assisted in implementing protein sequence analysis modules, optimization algorithms, and visualization of codon usage bias.",
        "Worked closely with a multidisciplinary research team focusing on computational biology and genetic engineering."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-primary pb-2">Experience</span>
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                <span className="text-gray-600">{exp.duration}</span>
              </div>
              <h4 className="text-lg font-semibold mb-4">{exp.company}</h4>
              {Array.isArray(exp.description) ? (
                <ul className="list-disc pl-6 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;