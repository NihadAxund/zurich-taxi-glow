import { Car, Users, Briefcase, Crown, Bus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import luxuryCarImage from '@/assets/luxury-car.jpg';
import minivanImage from '@/assets/minivan.jpg';

const Services = () => {
  const services = [
    {
      id: 'economy',
      name: 'Economy',
      icon: Car,
      price: 'From CHF 45',
      passengers: '1-3',
      luggage: '2 large, 2 small',
      features: ['Professional driver', 'Meet & greet', 'Flight tracking'],
      description: 'Comfortable and reliable transport at an affordable price.',
      image: luxuryCarImage,
      popular: false
    },
    {
      id: 'business',
      name: 'Business',
      icon: Briefcase,
      price: 'From CHF 65',
      passengers: '1-3',
      luggage: '3 large, 2 small',
      features: ['Premium vehicle', 'WiFi available', 'Water & newspapers', 'Priority booking'],
      description: 'Premium comfort for business travelers and special occasions.',
      image: luxuryCarImage,
      popular: true
    },
    {
      id: 'first',
      name: 'First Class',
      icon: Crown,
      price: 'From CHF 85',
      passengers: '1-3',
      luggage: '4 large, 3 small',
      features: ['Luxury vehicles', 'Champagne service', 'VIP treatment', 'Multilingual driver'],
      description: 'Ultimate luxury experience with top-tier vehicles and service.',
      image: luxuryCarImage,
      popular: false
    },
    {
      id: 'minivan',
      name: 'Minivan',
      icon: Users,
      price: 'From CHF 75',
      passengers: '4-6',
      luggage: '6 large, 4 small',
      features: ['Spacious interior', 'Group friendly', 'Extra luggage space'],
      description: 'Perfect for families and small groups with extra luggage.',
      image: minivanImage,
      popular: false
    },
    {
      id: 'minibus',
      name: 'Minibus',
      icon: Bus,
      price: 'From CHF 95',
      passengers: '7-8',
      luggage: '8 large, 6 small',
      features: ['Large groups', 'Corporate events', 'Tour groups', 'Airport shuttles'],
      description: 'Ideal for larger groups and corporate transportation needs.',
      image: minivanImage,
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of premium vehicles, all maintained to the highest Swiss standards
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="relative surface-card p-6 group">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                {/* Service Image */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.name} vehicle`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                    <IconComponent className="w-5 h-5" />
                    <span className="font-semibold">{service.name}</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-foreground">{service.name}</h3>
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                  </div>

                  <p className="text-muted-foreground text-sm">{service.description}</p>

                  {/* Specifications */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Passengers:</span>
                      <span className="font-medium">{service.passengers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Luggage:</span>
                      <span className="font-medium">{service.luggage}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Features:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button className="btn-primary w-full">
                    Book {service.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="surface-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Corporate accounts, special events, or unique requirements? 
              Contact us for personalized service packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Get Custom Quote
              </Button>
              <Button className="btn-secondary">
                Call +41 44 123 4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;