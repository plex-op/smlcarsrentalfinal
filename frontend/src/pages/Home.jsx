import React from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/bgmain.mp4"; // replace with your video path
import car1 from "@/assets/car/aura-front.jpeg";
import car2 from "@/assets/car/ceta-front.jpeg";
import car3 from "@/assets/car/harrier-front.jpeg";
import car4 from "@/assets/car/xuv-front.jpeg";
import { ArrowRight, Award, Shield, Users, Clock } from "lucide-react";

const Home = () => {
  const stats = [
    { number: "15+", label: "Years of Experience", icon: Clock },
    { number: "1000+", label: "Happy Clients", icon: Users },
    { number: "2000+", label: "Cars Sold", icon: Award },
    { number: "24/7", label: "Support", icon: Shield },
  ];

  const features = [
    {
      icon: "🔍",
      title: "Know the true value",
      desc: "We ensure every car is inspected and priced fairly to give you the best deal.",
    },
    {
      icon: "🚗",
      title: "Legacy like no other",
      desc: "With decades of experience, we've built trust and relationships with thousands of customers.",
    },
    {
      icon: "🤝",
      title: "Friend first, dealer next",
      desc: "Our service is focused on your satisfaction, ensuring a smooth and happy experience.",
    },
  ];

  const cars = [
    {
      img: car1,
      name: "Honda Jazz V 1.2",
      year: "2016",
      price: "₹ 5,30,000",
      km: "18000",
      type: "CVT",
      owner: "2nd",
      fuel: "Petrol",
    },
    {
      img: car2,
      name: "Hyundai Grand i10 Nios Asta 1.2",
      year: "2022",
      price: "₹ 7,50,000",
      km: "24000",
      type: "AMT",
      owner: "1st",
      fuel: "Petrol",
    },
    {
      img: car3,
      name: "Hyundai Venue Turbo GDI SX Plus 1.0",
      year: "2023",
      price: "₹ 11,80,000",
      km: "15000",
      type: "DCT",
      owner: "1st",
      fuel: "Petrol",
    },
    {
      img: car4,
      name: "Maruti Baleno Alpha 1.2",
      year: "2021",
      price: "₹ 8,40,000",
      km: "22000",
      type: "Manual",
      owner: "1st",
      fuel: "Petrol",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section with Video */}
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* Reduced overlay opacity for elegance */}
  <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm"></div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="relative z-10 max-w-3xl px-6"
  >
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl tracking-wide">
      Drive{' '}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
        Your Dream
      </span>{' '}
      Today
    </h1>

    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
      Experience over 15 years of automotive trust and unmatched quality. Your perfect car awaits.
    </p>

    <div className="flex flex-wrap gap-4 justify-center">
      <a
        href="/cars"
        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-400/40"
      >
        View All Cars <ArrowRight className="w-5 h-5" />
      </a>
      <a
        href="/contact"
        className="border border-white hover:border-cyan-400 hover:text-cyan-300 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
      >
        Contact Us
      </a>
    </div>
  </motion.div>
</section>


      {/* Stats Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 hover:bg-blue-100 transition-all border border-blue-100 shadow-sm"
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-blue-600 mb-1">
                    {item.number}
                  </h3>
                  <p className="font-medium text-gray-700">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">
              Why <span className="text-blue-600">Choose Us?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Because buying a car should feel like winning, not worrying.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white border border-blue-100 rounded-2xl p-10 text-center shadow-sm hover:shadow-lg hover:border-blue-400 transition-all"
              >
                <div className="text-5xl mb-4 text-blue-600">{card.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="text-5xl font-bold mb-2 text-gray-900 border-l-4 border-blue-500 pl-4">
                Featured Cars
              </h2>
              <p className="text-gray-600 pl-4">Handpicked just for you</p>
            </div>
            <a
              href="/cars"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-blue-400/30"
            >
              Show All <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {cars.map((car, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-blue-300/40 transition-all"
              >
                <div className="relative">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {car.year}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {car.name}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {car.price}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <span>{car.km} km</span>
                    <span>{car.type}</span>
                    <span>{car.owner} Owner</span>
                    <span>{car.fuel}</span>
                  </div>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-full font-medium flex items-center justify-center gap-2 transition-all">
                    See Full Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">
              What Our <span className="text-blue-600">Customers Say</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real stories from our happy customers who found their perfect ride.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Arun Kumar",
                role: "Business Owner",
                text: "SML Cars made my first car purchase a breeze! The team was transparent and guided me through everything. Highly recommend their service!",
                img: "https://randomuser.me/api/portraits/men/42.jpg",
              },
              {
                name: "Priya Sharma",
                role: "Software Engineer",
                text: "I loved the experience! The car quality was top-notch and the staff made me feel like family. Truly a dealer that cares about customers.",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "Rahul Mehta",
                role: "Bank Manager",
                text: "Professional, honest, and efficient. The buying process was smooth and the after-sales support is impressive. SML Cars sets a new standard.",
                img: "https://randomuser.me/api/portraits/men/24.jpg",
              },
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{person.name}</h3>
                    <p className="text-gray-500 text-sm">{person.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 italic leading-relaxed relative">
                  <span className="text-blue-500 text-3xl absolute -left-4 top-0">“</span>
                  {person.text}
                  <span className="text-blue-500 text-3xl absolute -right-2 bottom-0">”</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
