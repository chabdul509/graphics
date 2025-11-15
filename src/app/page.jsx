import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Instagram,
  MessageCircle,
} from "lucide-react";

// Import profile image
import profileImage from "@/assets/profile/pic.jpg";

// Import portfolio images
import portfolio1 from "@/assets/portfolio/Pouch-Packaging-Mockup-3 copy.jpg";
import portfolio2 from "@/assets/portfolio/labels fiverr copy.jpg";
import portfolio3 from "@/assets/portfolio/fiver packaging gig copy.jpg";
import portfolio4 from "@/assets/portfolio/WhatsApp Image 2025-10-10 at 2.55.41 PM.jpeg";
import portfolio5 from "@/assets/portfolio/WhatsApp Image 2025-10-10 at 2.55.42 PM (1).jpeg";
import portfolio6 from "@/assets/portfolio/WhatsApp Image 2025-10-10 at 2.55.42 PM.jpeg";
import portfolio7 from "@/assets/portfolio/WhatsApp Image 2025-10-10 at 2.55.43 PM.jpeg";
import portfolio8 from "@/assets/portfolio/WhatsApp Image 2025-10-10 at 2.55.44 PM.jpeg";

// Import testimonial images
import testimonial1 from "@/assets/testimonials/closeup-shot-beautiful-young-female-posing-outdoor.jpg";
import testimonial2 from "@/assets/testimonials/guy-plaid-shirt.jpg";
import testimonial3 from "@/assets/testimonials/handsome-smiling-man-looking-with-disbelief.jpg";
import testimonial4 from "@/assets/testimonials/medium-shot-woman-wearing-red-lipstick.jpg";
import testimonial5 from "@/assets/testimonials/portrait-goodlooking-attractive-stylish-bearded-man-brown.jpg";
import testimonial6 from "@/assets/testimonials/smiling-young-man-with-crossed-arms-outdoors.jpg";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: portfolio1,
      galleryImages: [
        portfolio1,
        portfolio2,
        portfolio3,
      ],
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      image: portfolio4,
      galleryImages: [
        portfolio4,
        portfolio5,
        portfolio6,
      ],
      tech: ["React", "Firebase", "Material-UI", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: portfolio7,
      galleryImages: [
        portfolio7,
        portfolio8,
        portfolio1,
      ],
      tech: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "Analytics dashboard for social media performance tracking with data visualization and reporting.",
      image: portfolio2,
      galleryImages: [
        portfolio2,
        portfolio3,
        portfolio4,
      ],
      tech: ["Angular", "D3.js", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const skills = [
    "Social Media Posts",
    "Packaging Design",
    "Label Design",
    "Thumbnail Design",
    "Logo Design",
    "Amazon Listing Images",
    "Short Content Creation",
    "Carousel Design",
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      message:
        "The social media graphics and video content we received were absolutely stunning. Our engagement increased by 200% within the first month. The creativity and attention to detail is exactly what we needed!",
      image: testimonial1,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "EcoProducts",
      message:
        "We were blown away by the packaging design work. Our sales increased significantly after the new design launch, and customers keep commenting on how professional our products look. Couldn't be happier!",
      image: testimonial2,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Brand Manager",
      company: "Fashion Forward",
      message:
        "The logo design and brand identity work perfectly captured our vision. Every detail was thought through, and the final result exceeded all our expectations. Highly recommend!",
      image: testimonial3,
    },
    {
      id: 4,
      name: "David Park",
      role: "E-commerce Manager",
      company: "Amazon Seller",
      message:
        "The Amazon listing images we got were game-changing. Our conversion rate increased by 150%, and the quality of work was exceptional. Fast delivery and great communication throughout the entire process.",
      image: testimonial4,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Content Creator",
      company: "Social Media Agency",
      message:
        "The thumbnail designs and video graphics helped our YouTube channel grow from 10K to 100K subscribers in just 6 months. The creative approach and understanding of what works is incredible!",
      image: testimonial5,
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Product Manager",
      company: "StartupXYZ",
      message:
        "Working together was a game-changer for our brand. The graphics and video content transformed our visual identity completely. Professional, creative, and always delivers on time!",
      image: testimonial6,
    },
  ];

  const allGalleryImages = projects.flatMap((project) =>
    project.galleryImages.map((img) => ({
      ...project,
      galleryImage: img,
    })),
  );

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allGalleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allGalleryImages.length) % allGalleryImages.length,
    );
  };

  const handleViewWork = () => {
    setShowGallery(true);
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for sticky navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#232F3E] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <h1 className="text-base sm:text-lg md:text-xl font-bold">Graphics Rehman</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "projects")}
                  className="hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  onClick={(e) => handleNavClick(e, "skills")}
                  className="hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#FF9900]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#37475A]">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="block px-3 py-2 hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="block px-3 py-2 hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "projects")}
                  className="block px-3 py-2 hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  onClick={(e) => handleNavClick(e, "skills")}
                  className="block px-3 py-2 hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="block px-3 py-2 hover:text-[#FF9900] transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-[#232F3E] to-[#37475A] text-white py-12 sm:py-20 relative overflow-hidden"
      >
        {/* Background Design Image */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('${portfolio1}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-gray-300 rounded-full mx-auto mb-6 sm:mb-8 overflow-hidden">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
              Graphics Rehman
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300 px-2">
              Graphics designer & Video Creator
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-400 px-3">
              Passionate about creating stunning visual designs and engaging video content. 
              Specialized in social media graphics, packaging design, branding, and video production 
              that brings brands to life and captivates audiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-3">
              <button
                onClick={handleViewWork}
                className="bg-[#FF9900] text-black px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-[#E68900] transition-colors w-full sm:w-auto"
              >
                View My Work
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-white hover:text-[#232F3E] transition-colors cursor-pointer text-center w-full sm:w-auto"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 sm:py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232F3E] mb-3 sm:mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#FF9900] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl font-bold text-[#232F3E] mb-4 sm:mb-6">
                Hello! I'm Graphics Rehman
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                I'm a passionate graphics designer and video creator with years of
                experience creating visual content that makes a difference. I
                love turning ideas into stunning designs and engaging videos that
                capture attention and drive results.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                When I'm not designing, you can find me creating video content,
                exploring new design trends, or working on creative projects that
                push the boundaries of visual storytelling.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/graphics-rehman-204048257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#232F3E] hover:text-[#FF9900] transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/graphicsrehman56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#232F3E] hover:text-[#FF9900] transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg mx-2 sm:mx-0">
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#232F3E] mb-3 sm:mb-4">
                Quick Facts
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF9900] rounded-full mr-3"></span>
                  Years of design experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF9900] rounded-full mr-3"></span>
                  200+ projects completed
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF9900] rounded-full mr-3"></span>
                  Expert in graphics & video design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF9900] rounded-full mr-3"></span>
                  Passionate about creative excellence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-8 sm:py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232F3E] mb-3 sm:mb-4">
              What Clients Say
            </h2>
            <div className="w-20 h-1 bg-[#FF9900] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-3">
              Real insights from happy clients who loved working with me on their design projects.
            </p>
          </div>

          {/* Scrolling Testimonials Container */}
          <div className="overflow-hidden relative">
            <div className="testimonials-scroll flex space-x-4 sm:space-x-6 md:space-x-8">
              {/* First set of testimonials */}
              {testimonials.map((testimonial) => (
                <div
                  key={`first-${testimonial.id}`}
                  className="flex-none w-[85vw] max-w-[280px] sm:w-72 md:w-80 bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#FF9900] flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-[#232F3E] text-base sm:text-lg truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-[#FF9900] font-medium truncate">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
                    "{testimonial.message}"
                  </p>
                  <div className="mt-4 flex text-[#FF9900]">
                    {"★".repeat(5)}
                  </div>
                </div>
              ))}
              {/* Second set (duplicate for seamless loop) */}
              {testimonials.map((testimonial) => (
                <div
                  key={`second-${testimonial.id}`}
                  className="flex-none w-[85vw] max-w-[280px] sm:w-72 md:w-80 bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#FF9900] flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-[#232F3E] text-base sm:text-lg truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-[#FF9900] font-medium truncate">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
                    "{testimonial.message}"
                  </p>
                  <div className="mt-4 flex text-[#FF9900]">
                    {"★".repeat(5)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232F3E] mb-3 sm:mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-[#FF9900] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-3">
              Here are some of my recent design projects that showcase my skills and
              passion for creating stunning visuals and engaging content.
            </p>

            {/* Gallery Toggle */}
            <div className="mt-6 sm:mt-8">
              <button
                onClick={() => setShowGallery(!showGallery)}
                className="bg-[#232F3E] text-white px-5 sm:px-6 py-2 rounded-md hover:bg-[#37475A] transition-colors text-sm sm:text-base"
              >
                View Image Gallery
              </button>
            </div>
          </div>

          {showGallery && (
            /* Image Gallery View */
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Main Gallery Display */}
              <div className="relative bg-black rounded-lg overflow-hidden">
                <img
                  src={allGalleryImages[currentImageIndex]?.galleryImage}
                  alt={allGalleryImages[currentImageIndex]?.title}
                  className="w-full h-48 sm:h-64 md:h-96 lg:h-[500px] object-contain"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 sm:p-2 transition-all z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#232F3E]" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 sm:p-2 transition-all z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#232F3E]" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base">
                  {currentImageIndex + 1} / {allGalleryImages.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-1.5 sm:gap-2">
                {allGalleryImages.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg ${
                      currentImageIndex === index
                        ? "ring-4 ring-[#FF9900]"
                        : "opacity-70 hover:opacity-100"
                    } transition-all`}
                  >
                    <img
                      src={item.galleryImage}
                      alt={item.title}
                      className="w-full h-10 sm:h-12 md:h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-8 sm:py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232F3E] mb-3 sm:mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-[#FF9900] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-3">
              I specialize in creating compelling visual designs and video content that
              captures attention and drives results for brands and businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 flex items-center justify-center min-h-[70px] sm:min-h-[80px] md:min-h-[100px] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xs sm:text-sm md:text-base text-[#232F3E] font-medium group-hover:text-[#FF9900] transition-colors duration-300 px-1">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232F3E] mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-[#FF9900] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-3">
              I'm always interested in new creative projects and exciting design opportunities.
              Let's bring your vision to life!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-[#232F3E] mb-4 sm:mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 px-3">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Email */}
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <a
                  href="mailto:graphicsrehman56@gmail.com"
                  className="block"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#FF9900] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 hover:bg-[#E68900] transition-colors cursor-pointer">
                    <Mail className="text-white" size={18} />
                  </div>
                </a>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#232F3E] mb-1 sm:mb-2">Email</h4>
                <a
                  href="mailto:graphicsrehman56@gmail.com"
                  className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-[#FF9900] transition-colors break-all px-1"
                >
                  graphicsrehman56@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#FF9900] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <Phone className="text-white" size={18} />
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#232F3E] mb-1 sm:mb-2">Phone</h4>
                <a
                  href="tel:+923144208672"
                  className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-[#FF9900] transition-colors"
                >
                  +923144208672
                </a>
              </div>

              {/* Location */}
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#FF9900] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <MapPin className="text-white" size={18} />
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#232F3E] mb-1 sm:mb-2">
                  Location
                </h4>
                <span className="text-xs sm:text-sm md:text-base text-gray-600">Lahore Punjab Pakistan</span>
              </div>

              {/* Instagram */}
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <a
                  href="https://www.instagram.com/graphicsrehman56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#FF9900] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 hover:bg-[#E68900] transition-colors cursor-pointer">
                    <Instagram className="text-white" size={18} />
                  </div>
                </a>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#232F3E] mb-1 sm:mb-2">
                  Social
                </h4>
                <a
                  href="https://www.instagram.com/graphicsrehman56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-[#FF9900] transition-colors"
                >
                  @graphicsrehman56
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-6 sm:mt-8 md:mt-12">
              <div className="bg-gradient-to-r from-[#232F3E] to-[#37475A] p-4 sm:p-6 md:p-8 rounded-lg">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  Ready to Work Together?
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto px-3 sm:px-4">
                  I'm always excited to take on new creative challenges and help bring
                  your design ideas to life. Let's discuss how we can work together to
                  create stunning visuals that make an impact.
                </p>
                <a
                  href="mailto:graphicsrehman56@gmail.com?subject=Project Inquiry&body=Hi Graphics Rehman,%0A%0AI'm interested in working with you on a design project. Please get in touch!"
                  className="inline-flex items-center bg-[#FF9900] text-black px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-[#E68900] transition-colors"
                >
                  <Mail size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
                  Send me an email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#232F3E] text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2024 Graphics Rehman. Built with passion and lots of coffee.
            </p>
            <div className="flex justify-center space-x-4 sm:space-x-6 mt-3 sm:mt-4">
              <a
                href="https://www.linkedin.com/in/graphics-rehman-204048257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF9900] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/graphicsrehman56"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF9900] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Contact Button */}
      <a
        href="https://wa.me/923144208672"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 z-50 group"
        title="Message me on WhatsApp"
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} className="sm:w-6 sm:h-6 group-hover:animate-pulse" />
        <span className="absolute bottom-full right-0 mb-2 bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block">
          Message me on WhatsApp!
        </span>
      </a>

      {/* CSS Animations */}
      <style jsx global>{`
        .testimonials-scroll {
          animation: scroll-left 30s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .testimonials-scroll {
            animation: scroll-left 20s linear infinite;
          }
        }
        
        @media (max-width: 768px) {
          .testimonials-scroll {
            animation: scroll-left 15s linear infinite;
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
