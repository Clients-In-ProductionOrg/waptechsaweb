import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Layers, 
  Server, 
  ArrowRight, 
  CheckCircle, 
  Menu, 
  X, 
  Globe, 
  Cpu, 
  Shield, 
  Zap, 
  Quote,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

import defenceImg from "../assets/TeamImages/Defence2.jpeg";
import goodnessImg from "../assets/TeamImages/Goodness Jakaza Chauke.jpeg";
import trustImg from "../assets/TeamImages/Trust Nyoni .jpeg";
import mmaphokengImg from "../assets/TeamImages/Mmaphokeng Senne(IT Sales).jpg";
import teamLeaderImg from "../assets/TeamImages/TeamLeader.png";
import logoImg from "../assets/Logo/WT_logo.jpeg";

import knitImg from "../assets/Projects/knit-logo.png";
import enashysImg from "../assets/Projects/Ebslogo.png";
import cedricImg from "../assets/Projects/CedricHousePlan.jpg";

// --- Reusable Components ---

const Button = ({ children, variant = "primary", className = "", icon: Icon, ...props }) => {
  const baseStyle = "px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 shadow-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-sky-400 text-white hover:shadow-blue-500/40 hover:from-blue-500 hover:to-sky-300",
    secondary: "bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white hover:bg-slate-700 hover:border-blue-500/50 hover:text-blue-400",
    outline: "border-2 border-blue-500 text-blue-400 hover:bg-blue-600/10 hover:border-blue-400"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {Icon && <Icon size={20} />}
    </button>
  );
};

const SectionData = ({ title, subtitle, className = "" }) => (
  <div className={`mb-16 text-center ${className}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
        {title}
      </span>
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: "100px" }}
      viewport={{ once: true }}
      className="h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mb-6 rounded-full"
    />
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
    >
      {subtitle}
    </motion.p>
  </div>
);

const Card = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(37, 99, 235, 0.2)" }}
    className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const NetworkBackground = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;
    let particles = [];
    
    // Configuration
    const particleColor = 'rgba(56, 189, 248, 0.5)'; // sky-400
    const lineColor = 'rgba(56, 189, 248, 0.15)';
    const connectionDistance = 150;
    
    const init = () => {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      particles = [];
      
      const particleCount = Math.floor((width * height) / 10000); // Density adjustment
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1 - dist / connectionDistance;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', init);
    init();
    draw();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

// --- Sections ---

export default function IndexNavy() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const teamMembers = [
    { name: "Elena Vance", role: "Senior Project Manager", img: teamLeaderImg, align: "object-top" },
    { name: "Mmaphokeng Senne", role: "IT Sales", img: mmaphokengImg, align: "object-[center_20%]" },
    { name: "Defence Ndzhobela", role: "Full Stack Developer", img: defenceImg, align: "object-center" },
    { name: "Trust Nyoni", role: "Business Analyst", img: trustImg, align: "object-top" },
    { name: "Goodness Jakaza Chauke", role: "Software Engineer", img: goodnessImg, align: "object-center" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Get Started", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 font-sans overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0F172A]/90 backdrop-blur-lg shadow-2xl py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#hero" onClick={() => scrollToSection("#hero")} className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="WapTechSA Logo" 
              className="h-14 w-auto rounded-xl object-cover bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg" 
            />
            <span className="text-2xl font-bold tracking-tight">WapTech<span className="text-sky-400">SA</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => scrollToSection(link.href)} className="text-sm font-medium text-slate-300 hover:text-white hover:text-shadow-glow transition-all">
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="!py-2 !px-6 !text-sm" onClick={() => scrollToSection("#contact")}>Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0F172A] border-t border-slate-800 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-medium text-slate-300 py-2 border-b border-slate-800"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="primary" className="w-full mt-2" onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection("#contact");
                }}>
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-start pt-32 overflow-hidden">
        <NetworkBackground />
        {/* Background Elements */}
        
        {/* Clipped Image Background */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0">
           <div 
             className="absolute inset-0 z-10 bg-[#0F172A]/80 md:bg-gradient-to-r md:from-[#0F172A] md:via-[#0F172A]/80 md:to-transparent" 
           />
           <div 
             className="w-full h-full bg-cover bg-center bg-no-repeat"
             style={{ 
               backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')",
               clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)"
             }}
           />
        </div>

        {/* Particles / Gradient Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 font-semibold text-xs md:text-sm mb-4">
              🚀 Innovating for the Future
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Powerful</span><br/>
              Websites & Apps
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
              We create scalable, modern, and professional web & app solutions designed to elevate your business in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button icon={ArrowRight} onClick={() => scrollToSection("#projects")}>View Projects</Button>
              <Button variant="secondary" icon={Mail} onClick={() => scrollToSection("#contact")}>Contact Us</Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-slate-500 text-sm font-medium">
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> Free Consultation</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> 24/7 Support</span>
            </div>
          </motion.div>
        
          {/* Empty div for layout grid balance against the background image area */}
          <div className="hidden md:block"></div> 
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team collaboration" 
                  className="relative rounded-3xl shadow-2xl border border-slate-700 w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-10 -right-10 bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl hidden lg:block">
                  <div className="text-4xl font-bold text-blue-500 mb-1">6+</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider">Years Experience</div>
                </div>
             </div>
             
             <div>
               <SectionData 
                 title="Who We Are" 
                 subtitle="WapTech SA is a premier digital transformation agency." 
                 className="!text-left !mb-10"
               />
               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                 We don't just write code; we architect digital ecosystems that drive growth. Our team of expert developers and designers work passionately to turn your abstract ideas into concrete digital reality.
               </p>
               
               <div className="grid grid-cols-2 gap-6 mb-10">
                 {[
                    { icon: Shield, title: "Secure Systems", desc: "Enterprise-grade protection" },
                    { icon: Zap, title: "Fast Performance", desc: "Optimized for speed" }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="bg-blue-600/10 p-3 rounded-xl h-fit">
                       <item.icon className="text-blue-500" size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-white text-lg">{item.title}</h4>
                       <p className="text-slate-500 text-sm">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
               
               <Button variant="outline">Learn More About Us</Button>
             </div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#0F172A] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0F172A] to-[#0F172A] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionData 
            title="Our Expertise" 
            subtitle="Comprehensive digital solutions tailored to your unique business challenges." 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Web Development", desc: "Responsive, SEO-friendly websites built with React and Next.js." },
              { icon: Smartphone, title: "App Development", desc: "Native and Cross-platform mobile applications for iOS & Android." },
              { icon: Layers, title: "UI/UX Design", desc: "Intuitive, user-centric interfaces that convert visitors into customers." },
              { icon: Server, title: "Cloud & DevOps", desc: "Scalable infrastructure management and automated deployment pipelines." }
            ].map((service, i) => (
              <Card key={i} className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-700/50 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-blue-500 hover:text-blue-300">
                  Read More <ArrowRight size={16} className="ml-2" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <SectionData 
            title="Featured Works" 
            subtitle="A glimpse into the innovative projects we've delivered for our partners." 
          />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Knit", 
                cat: "FinTech AI", 
                img: knitImg, 
                desc: "Knit is the school finance managers’ co-pilot. Our AI agents improve manual processes by automating payments, collections, and decisions.",
                link: "https://www.knit.cash/"
              },
              { 
                title: "Enashys Business Solutions", 
                cat: "Marketing & Branding", 
                img: enashysImg, 
                desc: "Strategic marketing and brand consultancy specialising in experiential marketing, activations, PR, and event production.",
                link: "https://enashysbusinesssolutions.com/"
              },
              { 
                title: "Cedric House Plans", 
                cat: "Architecture & E-commerce", 
                img: cedricImg, 
                desc: "Design your Dream Future. Explore a premium collection of architecturally stunning house plans. Modern, efficient, and ready for construction.",
                link: "https://www.cedrichouseplans.com/"
              }
            ].map((project, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 h-full flex flex-col"
              >
                <div className="h-64 overflow-hidden relative bg-white flex items-center justify-center p-6">
                   <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors z-10" />
                   <img src={project.img} alt={project.title} className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">{project.cat}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-6 line-clamp-3">{project.desc}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button variant="outline" className="w-full !rounded-xl !py-2">Visit Website</Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button className="mx-auto">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <SectionData title="Meet The Team" subtitle="The brilliant minds behind our innovative solutions." />
          
          <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[500px] w-full max-w-7xl mx-auto px-2 md:px-0 onHover:pause-animation">
             {teamMembers.map((member, i) => {
               const isActive = activeTeamIndex === i;
               return (
                 <div
                   key={i}
                   className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                     isActive ? "flex-[5] shadow-[0_0_30px_rgba(56,189,248,0.3)] border border-blue-500/30" : "flex-[1] hover:flex-[1.5] border border-white/5 bg-slate-800"
                   }`}
                   onClick={() => setActiveTeamIndex(i)}
                   onMouseEnter={() => setActiveTeamIndex(i)} // Optional: Hover triggers open
                 >
                   <img
                     src={member.img}
                     alt={member.name}
                     className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                       isActive ? "scale-100 filter-none" : "scale-[1.5] grayscale opacity-40"
                     } ${member.align}`}
                   />
                   
                   {/* Gradient Overlay */}
                   <div className={`absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-60'}`} />
 
                   {/* Text Content */}
                   <div className={`absolute bottom-0 left-0 w-full p-6 md:p-8 transition-all duration-500 transform ${isActive ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-8 absolute'}`}>
                       <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">{member.name}</h3>
                       <div className="h-1 w-12 bg-blue-500 mb-3 rounded-full"/>
                       <p className="text-blue-300 font-medium text-sm md:text-lg tracking-wide uppercase">{member.role}</p>
                   </div>
 
                   {/* Vertical Label for Inactive (Desktop only) */}
                   {!isActive && (
                     <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 w-full justify-center items-center">
                        <span className="text-white/60 text-xs font-mono font-bold tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
                          {member.role.split(" ")[0]}
                        </span>
                     </div>
                   )}
                 </div>
               );
             })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#0F172A] relative overflow-hidden">
        {/* Decorative quotes */}
        <Quote className="absolute top-20 left-20 text-slate-800 transform rotate-12" size={200} />
        <Quote className="absolute bottom-20 right-20 text-slate-800 transform -rotate-12" size={200} />

        <div className="container mx-auto px-6 relative z-10">
          <SectionData title="Client Success" subtitle="What our partners say about working with WapTech SA." />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Cedric Munyai", role: "Cedric House Plans", text: "WapTech helped us launch a modern house plans platform that is fast, professional, and easy for clients to use." },
              { name: "David Chen", role: "CTO, StartScale", text: "Their attention to detail and code quality is unmatched in the industry. A true partner in our growth." },
              { name: "Amanda Williams", role: "Director, CreativeHub", text: "From design to deployment, the process was seamless. They understood our brand voice perfectly." }
            ].map((t, i) => (
              <Card key={i} className="bg-gradient-to-b from-slate-800 to-slate-800/50">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => <span key={star} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-slate-300 italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <span className="text-slate-500 text-sm">{t.role}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="container mx-auto px-6 relative">
          <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl shadow-blue-500/30 overflow-hidden relative">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10">Ready to Start Your Project?</h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 relative z-10">
              Let's build something exceptional together. Schedule your free consultation today.
            </p>
            <div className="relative z-10">
              <Button
                className="bg-white text-blue-600 hover:bg-slate-100 hover:text-blue-700 mx-auto text-lg px-12 py-5 shadow-xl"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center px-6"
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Get Started</h3>
                  <p className="text-slate-400 mt-2">Choose your preferred contact channel.</p>
                </div>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Close contact options"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <a href="https://wa.me/27655253491" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="w-full !rounded-xl !py-3 !px-4 !justify-start !text-green-400 !border-green-500/50 hover:!text-green-300 hover:!border-green-400 hover:!bg-green-500/10">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.48 0 .12 5.36.12 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.92 11.92 0 0 0 5.76 1.47h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.49-8.4Zm-8.45 18.33h-.01a9.92 9.92 0 0 1-5.05-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.9 9.9 0 0 1-1.53-5.25c0-5.49 4.47-9.95 9.96-9.95 2.66 0 5.16 1.03 7.04 2.91a9.9 9.9 0 0 1 2.92 7.04c0 5.49-4.47 9.95-9.99 9.95Zm5.46-7.46c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.24-.46-2.37-1.46-.88-.78-1.48-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.66-1.58-.9-2.17-.24-.57-.48-.5-.66-.51h-.57c-.2 0-.52.07-.79.38-.27.3-1.04 1.01-1.04 2.46s1.06 2.86 1.21 3.06c.15.2 2.08 3.18 5.03 4.46.7.3 1.24.48 1.66.62.7.22 1.34.19 1.85.11.56-.08 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                      </svg>
                    </span>
                    WhatsApp
                  </Button>
                </a>

                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="w-full !rounded-xl !py-3 !px-4 !justify-start !text-blue-400 !border-blue-500/50 hover:!text-blue-300 hover:!border-blue-400 hover:!bg-blue-500/10">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                        <path d="M13.5 9H16V6h-2.5C10.46 6 9 7.79 9 10.48V13H7v3h2v8h3v-8h3l1-3h-4v-2.35C12 9.54 12.43 9 13.5 9Z" />
                      </svg>
                    </span>
                    Facebook
                  </Button>
                </a>

                <a href="mailto:waptechsa@gmail.com">
                  <Button variant="secondary" className="w-full !rounded-xl !py-3 !px-4 !justify-start !text-red-400 !border-red-500/50 hover:!text-red-300 hover:!border-red-400 hover:!bg-red-500/10">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
                        <path fill="#EA4335" d="M22 6.5V18a2 2 0 0 1-2 2h-1V9.75L12 14.5 5 9.75V20H4a2 2 0 0 1-2-2V6.5l10 6.75L22 6.5Z"/>
                        <path fill="#34A853" d="M2 6.5V18a2 2 0 0 0 2 2h1V9.75L2 6.5Z"/>
                        <path fill="#4285F4" d="M22 6.5V18a2 2 0 0 1-2 2h-1V9.75l3-3.25Z"/>
                        <path fill="#FBBC04" d="M22 6.5 12 13.25 2 6.5A2 2 0 0 1 4 4h16a2 2 0 0 1 2 2.5Z"/>
                      </svg>
                    </span>
                    Email
                  </Button>
                </a>

                <a href="tel:+27655253491">
                  <Button variant="primary" className="w-full !rounded-xl !py-3 !px-4 !justify-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white">
                      <Phone size={18} />
                    </span>
                    Call 0655253491
                  </Button>
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-bold text-white tracking-tight mb-6 block">WapTech<span className="text-blue-500">SA</span></span>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Empowering modern businesses with top-tier digital engineering and design solutions.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8">Quick Links</h4>
              <ul className="flex flex-col gap-4 text-slate-500">
                {quickLinks.map((item) => (
                  <li key={item.name}><a href={item.href} className="hover:text-blue-400 transition-colors">{item.name}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8">Services</h4>
              <ul className="flex flex-col gap-4 text-slate-500">
                {["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions", "SEO Optimization"].map(item => (
                  <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8">Contact Info</h4>
              <ul className="flex flex-col gap-6 text-slate-500">
                <li className="flex items-center gap-4">
                  <MapPin className="text-blue-500" />
                  <span>123 Tech Avenue, Sandton, Johannesburg, 2196</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-blue-500" />
                  <span>+27 655253491</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-blue-500" />
                  <span>waptechsa@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
            <p>&copy; 2026 WapTech SA - Pty Ltd. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
