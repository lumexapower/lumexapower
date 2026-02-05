#!/usr/bin/env python3
"""
Generate all component files for Lumexa Power website
This script creates all homepage section components and page files
"""

import os

def create_file(path, content):
    """Create a file with the given content"""
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)
    print(f"✅ Created: {path}")

# Component templates
components = {
    'components/home/Hero.tsx': '''export default function Hero() {
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
          The World\\'s First Non-Tracking 24/7 Solar Thermal Power System
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
''',

    'components/home/Problem.tsx': '''export default function Problem() {
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
            🌙 THE SUN DOESN\\'T SHINE AT NIGHT
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
                <span><strong>Batteries</strong> can\\'t economically store 24 hours ($3.6M for 24 MWh)</span>
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
''',

    'components/home/Solution.tsx': '''export default function Solution() {
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
            We\\'ve solved solar\\'s intermittency problem by combining three proven technologies:
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
''',
}

# Create all homepage components
for path, content in components.items():
    create_file(path, content)

# Create simplified versions of remaining components
remaining_components = [
    'HowItWorks', 'KeyAdvantages', 'ByTheNumbers', 'TargetMarkets',
    'Comparison', 'GulfRegion', 'Team', 'Traction', 'FinalCTA'
]

for comp in remaining_components:
    content = f'''export default function {comp}() {{
  return (
    <section id="{comp.lower()}" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12 text-lumexa-navy">
          {comp}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Content for {comp} section. Add your detailed content here.
        </p>
      </div>
    </section>
  )
}}
'''
    create_file(f'components/home/{comp}.tsx', content)

# Create other page files
pages = {
    'app/about/page.tsx': 'About Us',
    'app/contact/page.tsx': 'Contact Us',
    'app/investors/page.tsx': 'For Investors',
    'app/markets/page.tsx': 'Target Markets',
    'app/news/page.tsx': 'Latest News',
    'app/technology/page.tsx': 'Our Technology',
}

for path, title in pages.items():
    content = f'''export default function Page() {{
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-8 text-lumexa-navy">{title}</h1>
          <p className="text-xl text-gray-600">
            Content for {title} page. Add your detailed content here.
          </p>
        </div>
      </section>
    </div>
  )
}}
'''
    create_file(path, content)

# Create additional files
additional_files = {
    '.gitignore': '''# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
''',
    
    'README.md': '''# Lumexa Power Website

World\\'s first non-tracking 24/7 solar thermal power system.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Deploy!

See DEPLOYMENT_GUIDE.md for detailed instructions.

## Built With

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript

© 2026 Lumexa Power Inc.
''',
    
    'public/robots.txt': '''User-agent: *
Allow: /

Sitemap: https://lumexapower.com/sitemap.xml
''',
}

for path, content in additional_files.items():
    create_file(path, content)

print("\\n✅ All files created successfully!")
print("\\n📦 Next steps:")
print("1. Run: npm install")
print("2. Run: npm run dev")
print("3. Open: http://localhost:3000")
print("\\nFor deployment instructions, see DEPLOYMENT_GUIDE.md")

