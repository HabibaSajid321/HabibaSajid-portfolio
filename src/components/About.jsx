const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-primary pb-2">About Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="bg-gradient-to-br from-primary to-secondary w-64 h-100 rounded-lg p-1">
              <div className="bg-white w-full h-full rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Personal Info</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Date of Birth:</span> 08/03/2002
                  </li>
                  <li>
                    <span className="font-semibold">Nationality:</span> Pakistani
                  </li>
                  <li>
                    <span className="font-semibold">Email:</span> habibasajid37@gmail.com
                  </li>
                  <li>
                    <span className="font-semibold">Phone:</span> (+92) 3037501367
                  </li>
                  <li>
                    <span className="font-semibold">Address:</span> Mansoorabad, Faisalabad, Pakistan
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-bold mb-6">Motivated Software Engineering Graduate</h3>
            <p className="mb-6">
              I'm a Software Engineering graduate with a strong foundation in Artificial Intelligence (AI),
              Natural Language Processing (NLP), and Data Science. Experienced in developing domain-specific
              chatbots, AI-powered educational tools, and bioinformatics platforms.
            </p>
            <p className="mb-6">
              Currently seeking a Master's position to contribute to cutting-edge research at the intersection
              of AI, cybersecurity, and data privacy, with continued interest in generative NLP and large
              language modeling.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">AI & NLP</span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full">Data Science</span>
              <span className="bg-purple-500/10 text-purple-500 px-4 py-2 rounded-full">Machine Learning</span>
              <span className="bg-pink-500/10 text-pink-500 px-4 py-2 rounded-full">Bioinformatics</span>
              <span className="bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full">Web Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;