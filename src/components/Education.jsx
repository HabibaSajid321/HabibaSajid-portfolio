const Education = () => {
  const educationData = [
    {
      degree: "BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING",
      university: "University of Agriculture, Faisalabad (Pakistan)",
      duration: "15/09/2020 – 20/05/2024",
      description: "Relevant Courses: AI, Machine Learning, NLP, Software Engineering.",
      thesis: "Thesis: Web Tool for Predicting Thermal Stability of I-motif Structures"
    },
    {
      degree: "CERTIFIED CLOUD APPLIED GENERATIVE AI ENGINEER",
      university: "Presidential Initiative for Artificial Intelligence and Computing",
      duration: "24/07/2023 – CURRENT",
      description: "",
      link: "https://www.piaic.org/"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-primary pb-2">Education</span>
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                <span className="text-gray-600">{edu.duration}</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">{edu.university}</h4>
              {edu.description && <p className="mb-2">{edu.description}</p>}
              {edu.thesis && <p className="mb-2 font-medium">{edu.thesis}</p>}
              {edu.link && (
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  View Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;