const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-secondary pb-2">Competitive Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Calico Competition */}
          <div className="bg-amber-50 p-6 rounded-lg shadow-sm border-l-4 border-secondary">
            <div className="flex items-center mb-3">
              <div className="bg-primary text-white p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Calico Coding Competition 2025</h3>
            </div>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Team Mind_Mappers</span> (Team Leader)
            </p>
            <p className="text-gray-600">
              Achieved <span className="font-bold">global rank #102</span> among 5,000+ participating teams
            </p>
          </div>

          {/* Harvard Puzzle Day */}
          <div className="bg-amber-50 p-6 rounded-lg shadow-sm border-l-4 border-secondary">
            <div className="flex items-center mb-3">
              <div className="bg-primary text-white p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">Harvard Puzzle Day 2025</h3>
            </div>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Team Mind_Mappers</span>
            </p>
            <p className="text-gray-600">
              Solved <span className="font-bold">9/9 puzzles</span> completely, demonstrating exceptional problem-solving skills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;