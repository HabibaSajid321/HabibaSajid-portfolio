import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Habiba Sajid</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary">
              AI & NLP Engineer
            </h2>
            <p className="text-lg mb-8 max-w-lg text-gray-600">
              Passionate about building privacy-aware and explainable AI systems that support secure
              data processing and multilingual understanding.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors font-medium"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer gradient circle - changed to yellow/gold */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-md opacity-20"></div>
              
              {/* Photo container with yellow border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
                <Image 
                  src="/assets/images/habiba.png" 
                  alt="Habiba Sajid"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Decorative elements - changed to yellow */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;