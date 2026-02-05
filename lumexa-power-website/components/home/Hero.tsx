export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center gradient-bg text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="container-custom relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
          LUMEXA POWER
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-lumexa-gold font-semibold">
          Constant as the Sun
        </p>
        <p className="text-xl md:text-2xl mb-8">
          Solar Power That Never Stops
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          The World\'s First Non-Tracking 24/7 Solar Thermal Power System
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#how-it-works" className="btn-primary">
            See How It Works ↓
          </a>
          <a href="/investors" className="btn-secondary">
            Investor Deck →
          </a>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-lumexa-gold">$0.045</div>
            <div className="text-sm">LCOE/kWh</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-lumexa-gold">100%</div>
            <div className="text-sm">Capacity Factor</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-lumexa-gold">Zero</div>
            <div className="text-sm">Water Use</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-lumexa-gold">80%</div>
            <div className="text-sm">Less Land</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
