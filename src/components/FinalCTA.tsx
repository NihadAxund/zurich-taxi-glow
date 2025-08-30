import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 taxi-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
          Ready to Ride?
        </h2>
        
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Book your premium airport transfer now and experience Swiss quality service. 
          Fast booking, transparent pricing, guaranteed punctuality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button className="bg-white text-brand-black hover:bg-white/90 font-semibold px-8 py-4 text-lg">
            Book Your Transfer Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="flex items-center text-primary-foreground/80">
            <span className="mr-2">or call</span>
            <a 
              href="tel:+41441234567" 
              className="flex items-center space-x-2 font-semibold hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>+41 44 123 4567</span>
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Instant Confirmation</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>No Hidden Fees</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;