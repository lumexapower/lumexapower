export default function Problem() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-lumexa-navy">
          The Solar Challenge
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            The world needs clean, reliable, 24/7 power. But solar has a fundamental problem:
          </p>
          <p className="text-3xl md:text-4xl font-bold text-red-600 mb-12">
            🌙 THE SUN DOESN\'T SHINE AT NIGHT
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-red-700">This creates a $50B gap:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span><strong>Solar PV</strong> only works 25% of the time</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span><strong>Batteries</strong> can\'t economically store 24 hours ($3.6M for 24 MWh)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span><strong>Traditional CSP</strong> requires expensive tracking and scarce water</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">❌</span>
                <span><strong>Fossil fuels</strong> are the only reliable option</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-700">The Result:</h3>
            <p className="text-gray-700 leading-relaxed">
              Data centers, industrial plants, and desalination facilities remain dependent on 
              fossil fuels because no renewable technology can deliver true baseload power economically.
            </p>
            <p className="mt-4 text-2xl font-bold text-yellow-700">Until now.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
