import React from 'react';

import HeroImage from '../images/about-hero.jpg';

function HeroAbout() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0">
              <img className="w-full h-full object-cover" src={HeroImage} width="1440" height="394" alt="About" />
        <div className="absolute inset-0 bg-yellow-100 opacity-75" aria-hidden="true"></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4" data-aos="fade-up">The story behind the project</h1>
            <p className="text-xl text-purple-700 mb-8" data-aos="fade-up" data-aos-delay="200">Ut espresso id robust breve And skinny so beans cultivar, eu origin aroma grinder latte acerbic affogato plunger, french aromatic trifecta blue medium turkish pot java. Caramelization roast sweet single Black au lungo strong mountain, at arabica pumpkin go ut extra cream con, Au wings turkish mug latte instant variety.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroAbout;