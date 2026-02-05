export default function Solution() {
  return (
    <section className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          The Lumexa Power Solution
        </h2>
        <p className="text-xl text-center mb-16 text-lumexa-gold">
          True 24/7 Solar at Fossil Fuel Economics
        </p>
        
        <div className="max-w-6xl mx-auto">
          <p className="text-xl text-center mb-12">
            We\'ve solved solar\'s intermittency problem by combining three proven technologies:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* AGILE */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl mb-4">🔺</div>
              <h3 className="text-2xl font-bold mb-4 text-lumexa-gold">CAPTURE</h3>
              <h4 className="text-lg font-semibold mb-2">AGILE Lenses</h4>
              <p className="text-sm mb-2">(Stanford Technology)</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 180° Light Capture</li>
                <li>✓ NO TRACKING</li>
                <li>✓ 3-5× Concentration</li>
              </ul>
            </div>
            
            {/* Storage */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-4 text-lumexa-gold">STORE</h3>
              <h4 className="text-lg font-semibold mb-2">Thermal Battery</h4>
              <p className="text-sm mb-2">(1,000°C)</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 24+ Hours Storage</li>
                <li>✓ NO WATER</li>
                <li>✓ 95% Efficiency</li>
              </ul>
            </div>
            
            {/* sCO2 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-lumexa-gold">CONVERT</h3>
              <h4 className="text-lg font-semibold mb-2">sCO2 Turbine</h4>
              <p className="text-sm mb-2">(50% Efficiency)</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Desk-Sized</li>
                <li>✓ Dry-Cooled</li>
                <li>✓ 24/7 Power</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-lumexa-green bg-opacity-20 border-2 border-lumexa-green p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">THE RESULT:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>✓ Completely fixed installation (no tracking)</div>
              <div>✓ Continuous operation day and night</div>
              <div>✓ 50% lower cost than battery-backed solar</div>
              <div>✓ Zero water consumption</div>
              <div>✓ 80% less land than traditional CSP</div>
              <div>✓ Works on cloudy days</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="/technology" className="btn-primary">
            See the Complete System →
          </a>
        </div>
      </div>
    </section>
  )
}
