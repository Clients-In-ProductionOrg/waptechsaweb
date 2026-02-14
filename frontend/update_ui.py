
import os

new_content = r'''import React, { useState, useEffect } from "react";
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
  // Refined button styles with more subtle gradients and shadows
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 flex items-center justify-center";
  
  const variants = {
    // New Primary: Clean indigo/violet gradient
    primary: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/20 hover:from-indigo-500 hover:to-violet-500",
    // New Secondary: Subtle glass effect
    secondary: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
    // New Outline: Clean cyan accent
    outline: "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30 hover:border-cyan-400"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-white/5 hover:border-violet-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-violet-900/10"
  >
    <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
      <Icon className="w-7 h-7 text-indigo-400 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{description}</p>
  </motion.div>
);

const ProjectCard = ({ title, category, image, tags }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5"
  >
    {/* Image Placeholder */}
    <div className="h-64 bg-zinc-800 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80 z-10`} />
      <img src={image || "/api/placeholder/600/400"} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
        <Button variant="secondary" className="mr-3">View Case Study</Button>
      </div>
    </div>
    
    <div className="p-8 relative z-30 bg-zinc-900">
      <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3 block">{category}</span>
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-white/5">
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "40px 40px" }} 
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? "bg-zinc-950/80 backdrop-blur-xl border-zinc-800 py-3" : "bg-transparent border-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">W</div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">WapTech SA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="secondary" className="py-2 px-4 text-sm bg-white/5 border-white/10 hover:bg-white/10">Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
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
              className="md:hidden bg-zinc-900 border-t border-zinc-800"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-zinc-400 hover:text-white py-2 block font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="primary" className="w-full justify-center">Contact Us</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden z-10">
        {/* Background Image Container - Diagonally Cut */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ 
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
            background: "#09090b"
          }}
        >
          {/* Abstract Tech Image */}
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Digital Abstract Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          
          {/* Gradient Overlay for Zinc/Indigo Look */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950/90 to-indigo-900/40" />
          
          {/* Digital Grid/Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)", backgroundSize: "50px 50px" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Accepting New Projects for 2026
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Digital Perfection</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                WapTech SA delivers enterprise-grade software solutions. We merge aesthetic excellence with robust engineering.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                  Start Your Project
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <div className="w-full border-y border-white/5 py-10 bg-zinc-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND", "NODE.JS", "AWS"].map((tech) => (
                <span key={tech} className="text-xl font-bold font-mono tracking-wider">{tech}</span>
             ))}
           </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading subtitle="We provide end-to-end digital services designed for scale and performance.">
            Our Expertise
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Monitor}
              title="Web Engineering"
              description="Scalable, high-performance web applications built with modern frameworks."
            />
            <ServiceCard 
              icon={Smartphone}
              title="Mobile Solutions"
              description="Native-feel mobile experiences for iOS and Android platforms."
            />
            <ServiceCard 
              icon={Palette}
              title="Product Design"
              description="User-centric UI/UX design that drives engagement and conversion."
            />
            <ServiceCard 
              icon={Settings}
              title="Cloud Infrastructure"
              description="Secure, scalable cloud architecture and DevOps automation."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-900/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="h-64 rounded-2xl bg-zinc-800 overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Office" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="h-48 rounded-2xl bg-zinc-800 overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600" alt="Team" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className="space-y-4">
                   <div className="h-48 rounded-2xl bg-zinc-800 overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600" alt="Meeting" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="h-64 rounded-2xl bg-zinc-800 overflow-hidden border border-white/5">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" alt="Work" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Engineering the <br /><span className="text-indigo-400">Next Generation</span></h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                WapTech SA - Pty Ltd isn't just a development agency; we are your technical partners. We specialize in transforming complex business requirements into elegant software solutions.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Strategic Partnership", desc: "We work alongside your team to understand your core business goals." },
                  { title: "Agile Execution", desc: "Rapid iterations and transparent communication throughout the lifecycle." },
                  { title: "Future-Proof Tech", desc: "Built on modern stacks that scale with your business growth." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 border border-indigo-500/20">
                      <ChevronRight className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <p className="text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Success stories from our portfolio of enterprise clients.">
            Selected Works
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="NeoBank Dashboard"
              category="Fintech"
              tags={["React", "TypeScript", "D3.js"]}
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
            />
            <ProjectCard 
              title="Global Logistics"
              category="SaaS Platform"
              tags={["Next.js", "Node", "Postgres"]}
              image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
            />
            <ProjectCard 
              title="HealthConnect"
              category="MedTech"
              tags={["Flutter", "Firebase", "AI"]}
              image="https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=800"
            />
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="px-8">View Full Portfolio</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-zinc-900/50 border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Innovate?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Join the forward-thinking companies building the future with WapTech SA.
          </p>
          <Button variant="primary" className="text-lg px-10 py-5 shadow-2xl shadow-indigo-500/30">
            Schedule a Consultation
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80 pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-6 text-2xl font-bold text-white tracking-tight">
                WapTech SA
              </a>
              <p className="text-zinc-500 mb-8 leading-relaxed">
                Empowering businesses with cutting-edge software solutions designed for the modern digital landscape.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-start-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-8">Company</h4>
              <ul className="space-y-4">
                {["About Us", "Our Team", "Careers", "Contact"].map((item) => (
                  <li key={item}><a href="#" className="text-zinc-500 hover:text-indigo-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-8">Contact</h4>
              <ul className="space-y-4 text-zinc-500">
                <li>info@waptechsa.co.za</li>
                <li>+27 (0) 55 123 4567</li>
                <li>Sandton City, Johannesburg, SA</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 WapTech SA - Pty Ltd. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
'''
# Using raw strings (r'') everywhere avoids python interpreting \n, but we still need to be careful with template literals in JS.
# Template literals like ${variable} are fine in python strings unmodified.

# IMPORTANT: The target path.
target_file = r'h:\WORK SERIOUS PROJECT\WapTechSa.com\waptechs-sa\src\pages\index.jsx'

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully wrote to {target_file}")
