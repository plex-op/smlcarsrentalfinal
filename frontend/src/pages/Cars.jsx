import { Award, Shield, Users, CheckCircle, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      desc: "Built on 15+ Years of honest dealings and transparent practices.",
    },
    {
      icon: Heart,
      title: "Customer First",
      desc: "Your satisfaction is our priority, treating you as family.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      desc: "Every vehicle undergoes rigorous inspection and certification.",
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Knowledgeable professionals dedicated to serving you.",
    },
  ];

  const milestones = [
    { year: "1934", event: "SML Cars Founded" },
    { year: "1970", event: "Expanded to 5 Locations" },
    { year: "1995", event: "Introduced Quality Certification" },
    { year: "2010", event: "Reached 1000+ Happy Customers" },
    { year: "2024", event: "Celebrating 15+ Years of Excellence" },
  ];

  const achievements = [
    "Over 2000 cars sold",
    "1000+ satisfied customers",
    "15+ Years of legacy",
    "100% quality certified vehicles",
    "24/7 customer support",
    "Industry-leading warranty programs",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-600">SML Cars</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A legacy of trust, excellence, and commitment to automotive
            innovation spanning nine decades.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 bg-blue-50/40 backdrop-blur-xl">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Welcome to SML Cars, your trusted partner in finding the perfect
                vehicle. Since 1934, we've been serving our community with
                dedication, integrity, and an unwavering commitment to quality.
              </p>
              <p>
                What started as a small family business has grown into one of
                the region's most respected automotive dealerships.
              </p>
              <p>
                Our mission is to make car buying and selling simple,
                transparent, and enjoyable — offering quality vehicles at fair
                prices backed by excellent service.
              </p>
              <p>
                Today, with 15+ Years of experience behind us, we continue to
                uphold our core values: honesty, quality, and customer
                satisfaction above all else.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Our showroom"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-700">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The principles that drive every decision we make.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="bg-blue-50/60 backdrop-blur-md p-8 rounded-2xl border border-blue-100 hover:border-blue-400 hover:shadow-lg hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-700">
            Our Journey Through Time
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-8 ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl border border-blue-100 inline-block hover:border-blue-400 transition-all">
                      <p className="text-3xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </p>
                      <p className="text-gray-700 font-medium">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-700">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl mb-6 text-gray-800">
              Ready to experience the SML Cars difference?
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
