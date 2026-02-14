import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Settings, 
  ChevronRight, 
  Menu, 
  X, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Monitor
} from "lucide-react";

// --- Components ---

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A]";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white hover:shadow-lg hover:shadow-blue-500/30",
    secondary: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20",
    outline: "border-2 border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}; // Generic Button Component

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-white mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[#94A3B8] max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="p-8 rounded-2xl bg-[#1E293B]/50 backdrop-blur-lg border border-white/5 hover:border-[#38BDF8]/50 transition-all duration-300 group"
  >
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-[#94A3B8] leading-relaxed">{description}</p>
  </motion.div>
);

const ProjectCard = ({ title, category, image, tags }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative overflow-hidden rounded-2xl bg-[#1E293B] border border-white/5"
  >
    {/* Image Placeholder */}
    <div className="h-64 bg-slate-800 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60 z-10`} />
      <img src={image || "/api/placeholder/600/400"} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#2563EB]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-sm">
        <Button variant="secondary" className="mr-3">View Details</Button>
      </div>
    </div>
    
    <div className="p-6 relative z-30 bg-[#1E293B]">
      <span className="text-[#38BDF8] text-sm font-semibold tracking-wider uppercase mb-2 block">{category}</span>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#0F172A] text-[#94A3B8] border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// --- Main Page Component ---

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans selection:bg-[#38BDF8]/30 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0F172A]/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">WapTech SA - Pty Ltd</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="py-2.5 px-5 text-sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#1E293B] border-t border-white/10"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#94A3B8] hover:text-[#38BDF8] py-2 block"
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="primary" className="w-full">Get Started</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#2563EB]/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#38BDF8]/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#38BDF8] text-sm font-semibold mb-6">
                🚀 Reviewing the Future of Tech
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#38BDF8]">Powerful</span> Websites & Apps for Modern Businesses
              </h1>
              <p className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto leading-relaxed">
                We create scalable, modern, and professional web & app solutions designed to elevate your brand.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" className="w-full sm:w-auto group">
                  View Projects <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto">Contact Us</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / Tech Stack Scrolling Banner (Optional visual filler) */}
      <div className="w-full bg-[#1E293B]/50 border-y border-white/5 py-8 overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Tech placeholders text for now */}
             <span className="text-xl font-bold font-mono">REACT</span>
             <span className="text-xl font-bold font-mono">NEXT.JS</span>
             <span className="text-xl font-bold font-mono">TAILWIND</span>
             <span className="text-xl font-bold font-mono">NODE.JS</span>
             <span className="text-xl font-bold font-mono">FLUTTER</span>
           </div>
        </div>
      </div>

      {/* About Preview Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-[#94A3B8] text-lg mb-6 leading-relaxed">
                WapTech SA - Pty Ltd is a premier digital agency focused on delivering high-performance software solutions. We bridge the gap between complex technology and user-centric design.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects Completed", value: "150+" },
                  { label: "Happy Clients", value: "98%" },
                  { label: "Years Experience", value: "5+" },
                  { label: "Team Members", value: "20+" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#1E293B] border border-white/5">
                    <div className="text-2xl font-bold text-[#38BDF8] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#94A3B8]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-2xl blur-2xl opacity-20 transform rotate-6"></div>
              <div className="relative bg-[#1E293B] border border-white/10 rounded-2xl p-8 shadow-2xl">
                <Code2 className="w-12 h-12 text-[#38BDF8] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Custom tailored solutions for your business",
                    "Latest technologies (React, Node, AI)",
                    "24/7 dedicated support team",
                    "Agile development methodology"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#94A3B8]">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-3 h-3 text-[#38BDF8]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0B1120]">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Comprehensive digital solutions for forward-thinking companies.">
            Our Expertise
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Monitor}
              title="Web Development"
              description="High-performance websites built with React, Next.js, and modern frameworks."
            />
            <ServiceCard 
              icon={Smartphone}
              title="App Development"
              description="Native and cross-platform mobile applications for iOS and Android."
            />
            <ServiceCard 
              icon={Palette}
              title="UI/UX Design"
              description="User-centric interfaces that engage and convert visitors into customers."
            />
            <ServiceCard 
              icon={Settings}
              title="Maintenance"
              description="Ongoing support, security updates, and performance optimization."
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="A selection of our recent work and success stories.">
            Featured Projects
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="FinTech Dashboard"
              category="Web App"
              tags={["React", "Chart.js", "Node"]}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            />
            <ProjectCard 
              title="E-Commerce Platform"
              category="Mobile App"
              tags={["Flutter", "Firebase", "Stripe"]}
              image="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
            />
            <ProjectCard 
              title="Healthcare Portal"
              category="Web Platform"
              tags={["Next.js", "Tailwind", "PostgreSQL"]}
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6">
          <SectionHeading>Client Testimonials</SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "WapTech SA transformed our digital presence completely. The team is incredibly talented.",
                author: "Sarah Johnson",
                role: "CEO, TechFlow"
              },
              {
                quote: "Professional, timely, and cutting-edge. Highly recommend for any serious web project.",
                author: "Michael Chen",
                role: "Director, StartUp Inc"
              },
              {
                quote: "The App they built for us helped us scale our user base by 200% in 3 months.",
                author: "David Smith",
                role: "Product Manager"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-[#1E293B] border border-white/5 relative"
              >
                <div className="text-[#38BDF8] text-4xl font-serif absolute top-4 left-4 opacity-50">"</div>
                <p className="text-[#94A3B8] mb-6 relative z-10">{t.quote}</p>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-sm text-[#2563EB]">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">
            Let's build something amazing together. Contact us today for a free consultation.
          </p>
          <Button variant="primary" className="text-lg px-8 py-4 shadow-xl shadow-blue-500/20">
            Start Your Project Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="text-2xl font-bold tracking-tighter block mb-6">
                <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-transparent bg-clip-text">WapTech SA - Pty Ltd</span>
              </a>
              <p className="text-[#94A3B8] mb-6">
                Building the future of digital experiences with code and creativity.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-white hover:bg-[#2563EB] transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4">
                {["About Us", "Our Team", "Careers", "Contact"].map((item) => (
                  <li key={item}><a href="#" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Services</h4>
              <ul className="space-y-4">
                {["Web Development", "Mobile Apps", "UI/UX Design", "SEO Optimization"].map((item) => (
                  <li key={item}><a href="#" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-[#94A3B8]">
                <li>info@waptechsa.co.za</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Tech Street, Digital City, SA</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-[#94A3B8] text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 WapTech SA - Pty Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
