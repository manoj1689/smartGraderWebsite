import React from 'react';
import { motion } from 'framer-motion';
import testimonialLogo1 from '../../assets/home/profile1.png';
import testimonialLogo2 from '../../assets/home/profile2.png';
import testimonialLogo3 from '../../assets/home/profile3.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Cooper",
      title: "IT Professionals",
      text: "Curabitur id justo eget ante gravida pellentesque. Sed sagittis aliquam tellus, ut viverra felis tempus sed. Maecenas ac posuere quam mattis.",
      image: testimonialLogo1,
      rating: 5
    },
    {
      name: "Kristin Watson",
      title: "College Students",
      text: "Curabitur id justo eget ante gravida pellentesque. Sed sagittis aliquam tellus, ut viverra felis tempus sed. Maecenas ac posuere quam mattis.",
      image: testimonialLogo2,
      rating: 5
    },
    {
      name: "Alberta Flores",
      title: "HR Professionals",
      text: "Curabitur id justo eget ante gravida pellentesque. Sed sagittis aliquam tellus, ut viverra felis tempus sed. Maecenas ac posuere quam mattis.",
      image: testimonialLogo3,
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium font-spline text-sky-600">Hear From Our Satisfied Users</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white shadow-md rounded-lg hover:bg-sky-50 transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img className="w-16 h-16 mx-auto mb-4 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <h3 className="text-xl font-bold font-spline mb-2 text-sky-600">{testimonial.name}</h3>
              <p className="text-gray-600 font-spline mb-2">{testimonial.title}</p>
              <p className="text-gray-700 font-spline mb-4">{testimonial.text}</p>
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.794a1 1 0 00.95.69h5.012c.969 0 1.372 1.24.588 1.81l-4.065 2.957a1 1 0 00-.364 1.118l1.562 4.794c.3.921-.755 1.688-1.54 1.118l-4.065-2.957a1 1 0 00-1.176 0l-4.065 2.957c-.785.57-1.84-.197-1.54-1.118l1.562-4.794a1 1 0 00-.364-1.118L2.36 10.42c-.784-.57-.381-1.81.588-1.81h5.012a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
