export default function HowItWorks() {
  const [activeStage, setActiveStage] = useState(0)

  const stages = [
    {
      number: 1,
      title: "SOLAR RADIATION INPUT",
      subtitle: "Capturing Sunlight from the Entire Sky",
      icon: "☀️",
      color: "bg-yellow-500",
      description: "Sunlight from the entire hemisphere reaches our collection area, including both direct and diffuse radiation.",
      details: [
        "Collection Area: 12,000 m² (1.2 hectares)",
        "Peak Solar Input: 12 MW thermal power",
        "Direct Normal Irradiance (DNI): 1,000 W/m² peak",
        "Spectrum: Full solar spectrum (300-2500 nm)",
        "Direct beam: ~85% of total energy",
        "Diffuse light: ~15% (also captured by AGILE)"
      ],
      process: "The sun radiates energy across the full spectrum. Our system is positioned to receive maximum irradiance, with the collection area sized to gather 12 megawatts of thermal power at peak conditions."
    },
    {
      number: 2,
      title: "AGILE LENS CAPTURE",
      subtitle: "Wide-Angle Light Collection Without Tracking",
      icon: "🔺",
      color: "bg-blue-500",
      description: "1.2 million pyramid-shaped AGILE lenses capture sunlight from any angle across a 180° hemisphere—eliminating the need for expensive tracking systems.",
      details: [
        "Technology: Axially Graded Index Lenses (AGILE)",
        "Array: 1,200,000 micro-pyramids",
        "Acceptance Angle: 180° (full hemisphere)",
        "Concentration: 3-5× initial concentration",
        "Optical Efficiency: 90%",
        "Output: 10.8 MW thermal (vertically directed)"
      ],
      process: "Each AGILE pyramid contains a graded refractive index material (n=1.4 at top → n=2.0 at bottom). Light entering from ANY angle—morning, noon, afternoon, or even diffuse cloudy-day light—gradually bends through the graded material, redirecting toward vertical. This breakthrough from Stanford University means the entire array is completely fixed with no moving parts.",
      breakthrough: "NO TRACKING NEEDED! This single innovation eliminates 40% of capital costs and 50% of O&M costs compared to traditional CSP."
    },
    {
      number: 3,
      title: "FRESNEL LENS CONCENTRATION",
      subtitle: "Secondary Concentration to Focal Point",
      icon: "🔍",
      color: "bg-cyan-500",
      description: "A fixed Fresnel lens receives the pre-aligned vertical light beams and concentrates them an additional 40-50×, creating intense heat at the focal point.",
      details: [
        "Type: Fixed flat Fresnel lens",
        "Additional Concentration: 40-50×",
        "Total System Concentration: 200×",
        "Heat Flux at Receiver: 500-800 kW/m²",
        "Optical Efficiency: 85%",
        "Output: 9.2 MW concentrated thermal"
      ],
      process: "Because AGILE has already converted all incoming light to vertical beams, the Fresnel lens receives perfectly aligned light throughout the day. The precision-grooved flat lens focuses this energy to a small receiver area, creating extreme heat flux. Unlike traditional CSP systems, this lens never moves—it remains optimally aligned because the light is always vertical.",
      advantage: "Fixed installation means no complex tracking mechanisms, no motors, no breakdowns, and dramatically lower maintenance costs."
    },
    {
      number: 4,
      title: "THERMAL RECEIVER & STORAGE",
      subtitle: "High-Temperature Energy Bank (1,000°C)",
      icon: "🔥",
      color: "bg-orange-500",
      description: "Concentrated heat is absorbed by a receiver and transferred to a solid-state thermal battery containing 298 tonnes of alumina bricks at 1,000°C, storing 48 MWh of energy for 24+ hours.",
      details: [
        "Receiver Type: Cavity receiver",
        "Peak Temperature: 1,200°C at receiver",
        "Storage Medium: 80% coated sand + 20% alumina",
        "Storage Temperature: 1,000°C operating",
        "Storage Capacity: 48 MWh thermal",
        "Storage Duration: 24+ hours",
        "Mass: 298 tonnes",
        "Round-Trip Efficiency: 95%"
      ],
      dayOperation: {
        title: "DAYTIME (Charging Mode - 8-9 hours)",
        points: [
          "7 MW thermal input from concentrated sunlight",
          "2 MW → Immediate power generation",
          "5 MW → Charging thermal storage",
          "Bricks heat from 400°C to 1,000°C",
          "CO₂ flows through structured channels",
          "Stores 40 MWh over daytime period"
        ]
      },
      nightOperation: {
        title: "NIGHTTIME (Discharging Mode - 15-16 hours)",
        points: [
          "Hot bricks (1,000°C) release stored heat",
          "2 MW thermal output maintained continuously",
          "CO₂ heated from 50°C to 715°C",
          "Bricks cool gradually to 400°C",
          "Provides 32 MWh of useful energy",
          "Powers turbine throughout the night"
        ]
      },
      process: "This is the key to 24/7 operation. During the day, excess solar energy charges the thermal battery—imagine heating a massive oven filled with specialized ceramic bricks. At night or during cloudy periods, hot bricks continuously transfer heat to supercritical CO₂ flowing through carefully designed channels. The system can operate for over 24 hours without sunlight.",
      breakthrough: "Thermal storage is 96% cheaper than lithium batteries ($130K vs $3.6M for 24 MWh) and lasts 30+ years with zero degradation."
    },
    {
      number: 5,
      title: "sCO2 POWER GENERATION",
      subtitle: "Supercritical CO₂ Brayton Cycle (50% Efficiency)",
      icon: "⚙️",
      color: "bg-gray-600",
      description: "Stored heat drives a supercritical CO₂ Brayton cycle turbine system, converting thermal energy to electricity at 50% efficiency—far superior to traditional steam turbines.",
      details: [
        "Working Fluid: Supercritical CO₂",
        "Turbine Inlet: 715°C, 250 bar",
        "Turbine Speed: 27,000 RPM",
        "Gross Output: 1.2 MWe",
        "Parasitic Load: 200 kW (compressors, pumps)",
        "Net Output: 1.0 MWe continuous",
        "Thermal-to-Electric Efficiency: 50%",
        "Cooling: Dry air-cooled (ZERO water)"
      ],
      cycleSteps: [
        {
          step: "1. Compression",
          detail: "Cold sCO₂ (50°C) compressed to 250 bar by main and recompression compressors"
        },
        {
          step: "2. Recuperation",
          detail: "Compressed CO₂ pre-heated to 600°C in recuperators (recovering 95% of exhaust heat)"
        },
        {
          step: "3. Final Heating",
          detail: "CO₂ heated to 715°C by flowing through hot brick channels in thermal storage"
        },
        {
          step: "4. Expansion",
          detail: "Hot sCO₂ expands through turbine at 27,000 RPM, spinning generator"
        },
        {
          step: "5. Heat Recovery",
          detail: "Turbine exhaust passes through recuperators, transferring heat to incoming CO₂"
        },
        {
          step: "6. Cooling",
          detail: "Remaining heat removed in dry gas cooler (ambient air, zero water)"
        },
        {
          step: "7. Cycle Repeats",
          detail: "CO₂ returns to compressors and the cycle continues 24/7"
        }
      ],
      process: "Supercritical CO₂ is a 'supercritical fluid'—above its critical point (31°C, 74 bar), it behaves as both liquid and gas, with unique properties perfect for power generation. The closed-loop Brayton cycle achieves 50% efficiency (vs 30-40% for steam) in a turbine 1/10th the size. The entire power block fits in a shipping container.",
      breakthrough: "sCO₂ turbines are dramatically more efficient and compact than steam. Plus, dry air-cooling means ZERO water consumption—critical for water-scarce regions."
    },
    {
      number: 6,
      title: "ELECTRICAL OUTPUT",
      subtitle: "Grid-Quality Continuous Electricity",
      icon: "⚡",
      color: "bg-green-500",
      description: "The turbine drives a generator producing 1.2 MWe gross power. After parasitic loads, 1.0 MWe of clean, dispatchable electricity flows to the grid continuously, 24 hours a day.",
      details: [
        "Gross Generation: 1.2 MWe AC",
        "Parasitic Loads: 200 kW (16.7%)",
        "Net Output: 1.0 MWe continuous",
        "Voltage: Grid-standard (stepped up)",
        "Frequency: 50/60 Hz (grid-synchronized)",
        "Power Quality: Grid-compliant",
        "Annual Production: 8,760 MWh/year",
        "Capacity Factor: 100% (true baseload)"
      ],
      powerConditioning: [
        "Generator output converted to grid-compatible AC",
        "Transformer steps up voltage for transmission",
        "Power conditioning ensures clean, stable electricity",
        "Smart metering tracks production",
        "Grid interconnection via standard protocols",
        "Blackstart capability (can restart without grid)"
      ],
      process: "The generator produces three-phase AC electricity. Power conditioning equipment ensures voltage, frequency, and waveform meet grid requirements. Unlike intermittent solar PV, this is true baseload power—dispatchable on demand, running 24/7/365.",
      breakthrough: "100% capacity factor. Unlike PV (20-25% CF) or wind (30-40% CF), we deliver full rated power around the clock. Industrial facilities and data centers can rely on this like they rely on fossil fuel plants."
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-lumexa-navy">
            How Lumexa Power Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            From Sunlight to 24/7 Electricity: The Complete Energy Conversion Process
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Six integrated stages transform solar radiation into continuous, dispatchable baseload power
          </p>
        </div>

        {/* Visual Flow Diagram */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                <button
                  onClick={() => setActiveStage(index)}
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-2xl
                    transition-all duration-300 transform hover:scale-110
                    ${activeStage === index 
                      ? `${stage.color} text-white shadow-lg scale-110` 
                      : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                    }
                  `}
                >
                  {stage.icon}
                </button>
                <div className="text-center mt-2">
                  <div className={`
                    text-sm font-semibold
                    ${activeStage === index ? 'text-lumexa-navy' : 'text-gray-400'}
                  `}>
                    Stage {stage.number}
                  </div>
                </div>
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute transform translate-x-20 -translate-y-8">
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Active Stage Detail */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Stage Header */}
            <div className={`${stages[activeStage].color} text-white p-8`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{stages[activeStage].icon}</div>
                <div>
                  <div className="text-sm opacity-90 mb-1">STAGE {stages[activeStage].number}</div>
                  <h3 className="text-3xl font-bold">{stages[activeStage].title}</h3>
                  <p className="text-lg opacity-95 mt-1">{stages[activeStage].subtitle}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed opacity-95">
                {stages[activeStage].description}
              </p>
            </div>

            {/* Stage Content */}
            <div className="p-8">
              {/* Technical Specifications */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-lumexa-navy mb-4">Technical Specifications:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {stages[activeStage].details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day/Night Operations (Stage 4 only) */}
              {stages[activeStage].dayOperation && (
                <div className="mb-8 grid md:grid-cols-2 gap-6">
                  {/* Daytime */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-2">
                      ☀️ {stages[activeStage].dayOperation.title}
                    </h5>
                    <ul className="space-y-2">
                      {stages[activeStage].dayOperation.points.map((point, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-yellow-500 mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nighttime */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                      🌙 {stages[activeStage].nightOperation.title}
                    </h5>
                    <ul className="space-y-2">
                      {stages[activeStage].nightOperation.points.map((point, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-blue-500 mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Cycle Steps (Stage 5 only) */}
              {stages[activeStage].cycleSteps && (
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-lumexa-navy mb-4">Brayton Cycle Process:</h4>
                  <div className="space-y-3">
                    {stages[activeStage].cycleSteps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-lumexa-navy text-white rounded-full flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{step.step}</div>
                          <div className="text-sm text-gray-600 mt-1">{step.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Power Conditioning (Stage 6 only) */}
              {stages[activeStage].powerConditioning && (
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-lumexa-navy mb-4">Power Conditioning System:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {stages[activeStage].powerConditioning.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* How It Works Detail */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-lumexa-navy mb-4">How This Stage Works:</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {stages[activeStage].process}
                </p>
              </div>

              {/* Breakthrough Highlight */}
              {stages[activeStage].breakthrough && (
                <div className="bg-gradient-to-r from-lumexa-gold to-lumexa-orange text-white p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div>
                      <div className="font-bold text-lg mb-2">BREAKTHROUGH ADVANTAGE:</div>
                      <p className="text-sm leading-relaxed opacity-95">{stages[activeStage].breakthrough}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Advantage Highlight (alternative) */}
              {stages[activeStage].advantage && (
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-bold text-lg mb-2">KEY ADVANTAGE:</div>
                      <p className="text-sm leading-relaxed opacity-95">{stages[activeStage].advantage}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="bg-gray-50 px-8 py-4 flex justify-between items-center">
              <button
                onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                disabled={activeStage === 0}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white border-2 border-gray-300 hover:border-lumexa-navy disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Stage
              </button>

              <div className="text-sm text-gray-600">
                Stage {activeStage + 1} of {stages.length}
              </div>

              <button
                onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
                disabled={activeStage === stages.length - 1}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-lumexa-navy text-white hover:bg-opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Next Stage
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-lumexa-navy to-blue-900 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Complete System Summary</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-2">☀️</div>
                <div className="text-2xl font-bold text-lumexa-gold mb-1">12 MW</div>
                <div className="text-sm opacity-90">Solar Input (Peak)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔄</div>
                <div className="text-2xl font-bold text-lumexa-gold mb-1">38%</div>
                <div className="text-sm opacity-90">Overall Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-lumexa-gold mb-1">1 MWe</div>
                <div className="text-sm opacity-90">Continuous Output</div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h4 className="text-xl font-bold mb-4">Energy Flow:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Solar Input (Peak)</span>
                  <span className="font-bold">12.0 MW → 100%</span>
                </div>
                <div className="flex justify-between items-center opacity-90">
                  <span>After AGILE Capture</span>
                  <span className="font-bold">10.8 MW → 90%</span>
                </div>
                <div className="flex justify-between items-center opacity-90">
                  <span>After Fresnel Concentration</span>
                  <span className="font-bold">9.2 MW → 77%</span>
                </div>
                <div className="flex justify-between items-center opacity-90">
                  <span>After Receiver</span>
                  <span className="font-bold">8.3 MW → 69%</span>
                </div>
                <div className="flex justify-between items-center opacity-90">
                  <span>Average to sCO₂ (24hr)</span>
                  <span className="font-bold">2.0 MW thermal</span>
                </div>
                <div className="flex justify-between items-center border-t border-white border-opacity-20 pt-2 mt-2">
                  <span className="font-bold">Final Electric Output</span>
                  <span className="font-bold text-lumexa-gold text-lg">1.0 MWe → 38%</span>
                </div>
              </div>
            </div>

            <div className="bg-green-500 bg-opacity-20 border-2 border-green-400 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Why 38% Efficiency is Excellent:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>✓ Traditional CSP: 15-18% overall</div>
                <div>✓ PV panels: 20% (but only during day)</div>
                <div>✓ Lumexa: 38% overall, 24/7 operation</div>
                <div>✓ Best-in-class for dispatchable solar</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a href="/technology" className="btn-primary inline-block">
            Explore Full Technical Details →
          </a>
        </div>
      </div>
    </section>
  )
}
