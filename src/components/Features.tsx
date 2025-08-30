import { Shield, Clock, Users, Star, CreditCard, Phone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with all costs included upfront. What you see is what you pay.'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Available around the clock, 365 days a year. Your schedule is our priority.'
    },
    {
      icon: Star,
      title: 'Punctual',
      description: '99% on-time guarantee. We track your flight and adjust pickup times accordingly.'
    },
    {
      icon: Users,
      title: 'Multilingual Drivers',
      description: 'Professional drivers fluent in German, English, French, and Italian.'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Pay online, by card, or cash. Corporate accounts and invoicing available.'
    },
    {
      icon: Phone,
      title: 'Easy Booking',
      description: 'Book online in 60 seconds or call us directly. Instant confirmation guaranteed.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Business Traveler',
      content: 'Exceptional service! The driver was waiting with a sign, helped with luggage, and the ride was smooth and comfortable. Will definitely use again.',
      rating: 5
    },
    {
      name: 'Marcus Weber',
      role: 'Local Resident',
      content: 'Very professional and punctual. Booked for my family trip to the airport - everything was perfect from start to finish.',
      rating: 5
    },
    {
      name: 'Jennifer Chen',
      role: 'Tourist',
      content: 'Great value for money. Clean vehicle, friendly driver, and arrived exactly on time. Made our Zurich visit stress-free.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Zurix Taxi?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium airport transfers with Swiss precision and reliability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="surface-card p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h3>
            <p className="text-muted-foreground">
              Over 10,000+ satisfied passengers choose Zurix Taxi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-sm">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-4 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5.0★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">On-Time Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;