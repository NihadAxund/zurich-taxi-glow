import { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const QuickBooking = () => {
  const [tripType, setTripType] = useState('one-way');

  return (
    <div className="relative -mt-16 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="surface-card p-6 lg:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Book Your Transfer</h2>
          <p className="text-muted-foreground">Quick booking in just a few clicks</p>
        </div>

        {/* Trip Type Selector */}
        <div className="mb-6">
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="one-way"
                checked={tripType === 'one-way'}
                onChange={(e) => setTripType(e.target.value)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="font-medium">One-way</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="round-trip"
                checked={tripType === 'round-trip'}
                onChange={(e) => setTripType(e.target.value)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="font-medium">Round-trip</span>
            </label>
          </div>
        </div>

        {/* Booking Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* From */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-primary" />
              From
            </label>
            <Input 
              placeholder="Zurich Airport (ZUR)"
              className="form-input"
            />
          </div>

          {/* To */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-primary" />
              To
            </label>
            <Input 
              placeholder="Enter destination"
              className="form-input"
            />
          </div>

          {/* Date & Time */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-primary" />
              Pickup Date & Time
            </label>
            <Input 
              type="datetime-local"
              className="form-input"
            />
          </div>

          {/* Passengers */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center">
              <Users className="w-4 h-4 mr-1 text-primary" />
              Passengers
            </label>
            <Select>
              <SelectTrigger className="form-input">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Passenger</SelectItem>
                <SelectItem value="2">2 Passengers</SelectItem>
                <SelectItem value="3">3 Passengers</SelectItem>
                <SelectItem value="4">4 Passengers</SelectItem>
                <SelectItem value="5">5+ Passengers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Return Date (if round-trip) */}
        {tripType === 'round-trip' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-primary" />
                Return Date & Time
              </label>
              <Input 
                type="datetime-local"
                className="form-input"
              />
            </div>
          </div>
        )}

        {/* Service Class */}
        <div className="mb-6">
          <label className="text-sm font-medium text-foreground mb-3 block">Service Class</label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { name: 'Economy', price: 'From CHF 45', desc: '1-3 passengers' },
              { name: 'Business', price: 'From CHF 65', desc: '1-3 passengers' },
              { name: 'First Class', price: 'From CHF 85', desc: '1-3 passengers' },
              { name: 'Minivan', price: 'From CHF 75', desc: '4-6 passengers' },
              { name: 'Minibus', price: 'From CHF 95', desc: '7-8 passengers' }
            ].map((service) => (
              <label key={service.name} className="cursor-pointer">
                <input type="radio" name="serviceClass" className="sr-only peer" />
                <div className="border border-border rounded-xl p-4 hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 transition-all duration-200">
                  <div className="font-medium text-sm">{service.name}</div>
                  <div className="text-primary font-semibold text-sm">{service.price}</div>
                  <div className="text-xs text-muted-foreground">{service.desc}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="btn-primary flex-1">
            Get Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button className="btn-secondary">
            Call +41 44 123 4567
          </Button>
        </div>

        {/* Note */}
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Price may vary with demand. Final price confirmed after booking.
        </p>
      </div>
    </div>
  );
};

export default QuickBooking;