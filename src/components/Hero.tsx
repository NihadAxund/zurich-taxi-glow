import { ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-taxi.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium Zurich Airport Taxi Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/60 to-transparent"></div>
        {/* Subtle taxi pattern overlay */}
        <div className="absolute bottom-0 right-0 w-64 h-64 taxi-pattern opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
              <span className="text-primary font-medium text-sm flex items-center">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Premium Airport Transfer
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Airport Taxi Zurich —{' '}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Book in 60 seconds
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Professional, punctual, and premium airport transfers. No hidden fees, 
            24/7 availability, multilingual drivers. Your journey starts here.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center text-white/90">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center text-white/90">
              <Clock className="w-5 h-5 mr-2 text-primary" />
              <span className="font-medium">24/7 Service</span>
            </div>
            <div className="flex items-center text-white/90">
              <Star className="w-5 h-5 mr-2 text-primary fill-current" />
              <span className="font-medium">5★ Rated</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary text-lg px-8 py-4">
              Book Your Ride Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 text-lg px-8 py-4 backdrop-blur-sm">
              View Our Fleet
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by over 10,000+ passengers</p>
            <div className="flex items-center space-x-8">
              <div className="text-white">
                <div className="text-2xl font-bold text-primary">2min</div>
                <div className="text-sm opacity-70">Avg Response</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm opacity-70">On Time</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-primary">5.0★</div>
                <div className="text-sm opacity-70">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;