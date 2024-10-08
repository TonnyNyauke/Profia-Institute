'use client'

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

function CustomerCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  return (
    <div className="embla flex flex-col justify-center items-center" ref={emblaRef}>
      <div className="embla__container ">
        {[
          { name: "John Doe", quote: "Business Analytics has been a game-changer...", company: "XYZ Inc." },
          { name: "Jane Smith", quote: "The insights we have gained helped us optimize...", company: "ABC Corp." },
          { name: "Bob Johnson", quote: "We can't imagine going back to our old way of doing things.", company: "DEF Startups" }
        ].map((testimonial, index) => (
          <div key={index} className="embla__slide m-4  border border-gray-300 rounded-lg p-4">
            <p className="text-lg text-gray-600 mb-4">{testimonial.quote}</p>
            <p className="text-sm text-gray-500">- {testimonial.name}, {testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerCarousel;
