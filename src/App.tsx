import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Mail, 
  Instagram, 
  Twitter, 
  Facebook, 
  ChevronRight, 
  Quote, 
  ExternalLink,
  Menu,
  X
} from "lucide-react";

// Import images as assets for proper Vite path resolution
import coverImg from "./assets/images/regenerated_image_1778153051805.jpg";
import courthouseImg from "./assets/images/regenerated_image_1778153054563.jpg";
import dannevirkeImg from "./assets/images/regenerated_image_1778153053395.jpg";
import authorPortraitImg from "./assets/images/regenerated_image_1778153056165.jpg";
import foundationImg1 from "./assets/images/regenerated_image_1778153058104.jpg";
import foundationImg2 from "./assets/images/regenerated_image_1778153060082.jpg";
import foundationImg3 from "./assets/images/regenerated_image_1778153061587.jpg";
import foundationImg4 from "./assets/images/regenerated_image_1778153063003.jpg";
import foundationImg5 from "./assets/images/regenerated_image_1778153064861.jpg";
import foundationImg6 from "./assets/images/regenerated_image_1778153066512.jpg";
import bannerImg from "./assets/images/regenerated_image_1778152881361.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-gradient-to-b from-forest to-transparent">
      <div className="text-gold font-serif text-2xl tracking-widest italic">D.</div>
      
      <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-parchment/70">
        <a href="#book" className="hover:text-gold transition-colors">The Book</a>
        <a href="#about" className="hover:text-gold transition-colors">The Author</a>
        <a href="#praise" className="hover:text-gold transition-colors">Praise</a>
        <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
      </div>

      <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-forest px-8 py-12 flex flex-col gap-6 text-center border-b border-gold/20"
        >
          <a href="#book" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest">The Book</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest">The Author</a>
          <a href="#praise" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest">Praise</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg uppercase tracking-widest">Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16">
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 ${light ? 'text-parchment/60' : 'text-gold'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight leading-tight"
    >
      {children}
    </motion.h2>
    <div className="w-12 h-[1px] bg-gold mx-auto mt-8 opacity-50" />
  </div>
);

const Testimonials = () => {
  const reviews = [
    {
      text: "I found the story to be incredibly rich with food for thought... narrated ideas and perspectives on justice alongside the individual emotions each character felt about the situations felt very real.",
      author: "Anna Crimp",
      role: "Wellington Legal Aid Services",
      tag: "Reader Review"
    },
    {
      text: "Taut and morally complex, Three Little Vikings resonates with the tension of Big Little Lies and the atmospheric intrigue of The Dry.",
      author: "Lighthouse PR",
      role: "Literary Critics",
      tag: "Press Feature"
    },
    {
      text: "A gripping exploration of where justice ends and vengeance begins. It's a great choice for any book club looking for deep, character-driven narratives.",
      author: "NZ Booklovers",
      role: "Literary Community",
      tag: "Recommendation"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="praise" className="py-32 bg-forest relative border-y border-gold/10 overflow-hidden">
      <div className="container mx-auto px-6 text-center max-w-4xl min-h-[400px] flex flex-col justify-center">
        <Quote size={48} className="mx-auto text-gold/30 mb-12" />
        
        <div className="relative h-64 md:h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-x-0"
            >
              <p className="font-serif text-2xl md:text-4xl leading-tight mb-12 italic text-parchment/90">
                "{reviews[index].text}"
              </p>
              
              <div className="space-y-2">
                <p className="uppercase tracking-[0.3em] text-gold text-sm font-bold">{reviews[index].author}</p>
                <div className="flex justify-center gap-4 text-parchment/40 text-[10px] tracking-widest">
                  <span>{reviews[index].role}</span>
                  <span>•</span>
                  <span>{reviews[index].tag}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === index ? 'bg-gold w-8' : 'bg-gold/20 hover:bg-gold/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-forest text-parchment selection:bg-gold selection:text-forest">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 text-white flex items-center justify-center">
           <img 
            src="https://images.unsplash.com/photo-1505833359644-48586f588bb2?auto=format&fit=crop&q=80&w=2000" 
            alt="Misty Fjord Landscape" 
            className="w-full h-full object-cover opacity-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-forest" />
        </div>

        <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="uppercase tracking-[0.4em] text-gold text-xs mb-6 font-medium">Criminal Barrister & Author DeAnne Nicoloso</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] tracking-tighter">
              Three Little <br /> <span className="italic" style={{ fontSize: '100px' }}>Vikings</span>
            </h1>
            <p className="text-parchment/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light" style={{ fontSize: '14px', fontFamily: 'Arial' }}>
              Justice has a price. And friendship might be the cost. <br />
              <span className="text-sm italic block mt-4">A gripping exploration of where justice ends and vengeance begins.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://www.amazon.com/Three-Little-Vikings-DeAnne-Nicoloso-ebook/dp/B0DRT692R6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold text-forest px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-parchment transition-all duration-500 shadow-2xl text-center"
              >
                Buy The Book
              </a>
              <a href="#book" className="px-10 py-4 uppercase tracking-widest text-xs font-bold border border-parchment/20 hover:border-gold transition-all duration-500 flex items-center justify-center gap-2 text-center">
                Read The Story <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto max-w-sm lg:max-w-none"
          >
              <div className="relative group p-4 border border-gold/10 rounded-lg">
                <div className="rounded shadow-[0_0_80px_rgba(189,160,109,0.1)] gold-border bg-forest p-1">
                  {/* The actual book cover provided by the user */}
                  <div className="aspect-[2/3] relative overflow-hidden group" style={{ width: '400px' }}>
                    <img 
                      src={coverImg} 
                      alt="Three Little Vikings Book Cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Book Intro Section */}
      <section id="book" className="py-24 bg-forest relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="The Narrative">Truth, Loyalty, and Shadow</SectionHeading>
          
          <div className="max-w-4xl mx-auto text-center italic text-parchment/80 font-serif text-xl md:text-2xl mb-24 leading-relaxed px-4">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              "Three marriages, eight children, 53 addresses, and 20 years inside the criminal justice system. I have lived enough content to write for the rest of my days."
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="font-serif text-4xl">About the Book</h3>
              <p className="text-lg font-light leading-relaxed text-parchment/70">
                <i>Three Little Vikings</i> is contemporary fiction with a raw, semi-autobiographical heartbeat. Inspired by a career spent traversing both sides of the courtroom, DeAnne Nicoloso explores the juxtaposition of birth and death, the grind of single parenting a large tribe, and the "gray space" between vengeance and the law.
              </p>
              <p className="text-parchment/70 font-light leading-relaxed">
                Jillian, Kathleen, and Hannah grow up in the provincial NZ town of Dannevirke. Reconnecting as mature women, they form <strong>Practical Justice</strong>—a vigilante group dealing exclusively with child sex offenders, offering restorative justice to those who admit their guilt, and curated acts of revenge for those who deny it.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "The Sisterhood", desc: "Follow three girls from Dannevirke as they navigate traumatic pasts to restore an intimate circle." },
                  { title: "Practical Justice", desc: "A moral landscape where restorative justice meets unorthodox vengeance." },
                  { title: "The Cost of Truth", desc: "When a hit goes wrong, trust fractures and freedom hangs by a thread." }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-gold mb-1">{item.title}</h4>
                      <p className="text-parchment/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-gold/5 rounded-full blur-3xl" />
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="pt-12">
                  <div className="p-1 gold-border rounded-t-full overflow-hidden">
                    <img src={courthouseImg} alt="Courthouse Architecture" className="rounded-t-full brightness-75 grayscale sepia-[0.3]" />
                  </div>
                </div>
                <div>
                  <div className="p-1 gold-border rounded-t-full overflow-hidden">
                    <img src={dannevirkeImg} alt="Dannevirke Spirit" className="rounded-t-full brightness-75 grayscale sepia-[0.3]" />
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center sm:text-left">
                 <p className="text-[10px] uppercase tracking-widest text-gold/50 italic px-4">
                  "Although the content is at times dark and confronting, humor is used to take power from the offenders and give it back to the victims."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <Testimonials />

      {/* About Author */}
      <section id="about" className="py-24 bg-forest">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-4 border border-gold/30 rounded-t-full -z-10 translate-x-4 translate-y-4" />
                <img 
                  src={authorPortraitImg} 
                  alt="DeAnne Nicoloso Author Portrait" 
                  className="w-full h-full object-cover rounded-t-full gold-border contrast-110 filter hue-rotate-10"
                />
              </div>
            </motion.div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <SectionHeading subtitle="The Barrister & Artist" light>DeAnne Nicoloso</SectionHeading>
              <p className="text-xl font-serif italic text-gold">"My fascinations lie in the truth, loyalty, and the gray space between justice and the law."</p>
              <div className="space-y-4 text-parchment/70 font-light leading-relaxed">
                <p>
                  DeAnne Nicoloso is a criminal barrister and yoga instructor based in Queenstown, New Zealand. A mother of eight and grandmother of three, she splits her time between New Zealand, Australia, and Brazil.
                </p>
                <p>
                  Her passions for dance and languages—and a career spent inside courtrooms—fuel her storytelling. In <i>Three Little Vikings</i>, she dives into the complexities of buried trauma as an enigmatic Māori elder, Moana, unspools the secrets of the past.
                </p>
                <p>
                   Nothing is as it seems in her world; trust fractures, and sanity hangs by a thread as she explores what happens when a hit on a predator goes dangerously wrong.
                </p>
              </div>
              <div className="flex gap-12 pt-8 border-t border-gold/10">
                <div>
                  <h4 className="text-4xl font-serif text-parchment">20y</h4>
                  <p className="uppercase tracking-widest text-gold mt-2" style={{ fontSize: '11px' }}>Legal Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif text-parchment">8</h4>
                  <p className="uppercase tracking-widest text-gold mt-2" style={{ fontSize: '12px' }}>Children Raised</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newspaper & Magazine Mentions */}
      <section className="py-20 bg-forest/50 border-t border-gold/10">
        <div className="container mx-auto px-6">
          <p className="text-center uppercase tracking-[0.4em] text-[10px] mb-12 text-parchment/40">In the Headlines</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-24 opacity-40 hover:opacity-100 transition-all duration-700">
            {['NZ Listener', 'VERVE', 'NZ Herald', 'The Guardian', 'NZ Booklovers', 'MINDFOOD', 'Radio NZ'].map(media => (
              <span key={media} className="font-serif text-xl md:text-2xl whitespace-nowrap">{media}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Family / Inspiration Photos */}
      <section className="py-24 bg-forest">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Foundations">Roots & Inspirations</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              foundationImg1,
              foundationImg2,
              foundationImg3,
              foundationImg4,
              foundationImg5,
              foundationImg6
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`overflow-hidden gold-border aspect-square ${i % 3 === 0 ? 'rounded-t-3xl' : i % 3 === 2 ? 'rounded-b-3xl' : 'rounded-none'}`}
              >
                <img src={img} alt={`Family & Inspiration`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-center text-xs font-light italic text-parchment/40 max-w-2xl mx-auto">
            Supporting the journey across New Zealand, Australia, and Brazil.
          </p>
        </div>
      </section>

      {/* The Story / Blurb Section */}
      <section id="synopsis" className="py-24 bg-forest border-t border-gold/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading subtitle="The Synopsis">A Price for Justice</SectionHeading>
          
          <div className="relative">
            <div className={`space-y-6 text-parchment/80 leading-relaxed font-light ${!isExpanded ? 'max-h-[400px] overflow-hidden' : ''}`}>
              <p className="text-xl font-serif text-gold italic mb-8">
                "A hit on a child sex offender has gone terribly wrong. An innocent man is almost killed. An underground vigilante group called Practical Justice is responsible."
              </p>
              
              <div className="space-y-4 text-lg">
                <p>
                  Practical Justice (PJ) is a group formed by old school friends, Jillian, Kathleen and Hannah, to meet the needs of those mistreated within the criminal justice system. They administer punishment to child sex offenders who deny their offending. The women have a long history of childhood antics, executing an act of vengeance on a paedophile as 12-year-olds. But now matters are serious.
                </p>
                
                <p>
                  Loyalty to their cause and each other is tested as the criminal investigation unfolds. Their history, complex and steeped in trauma is told through a wise old Māori woman named Moana. Secrets and lies reveal why the women take on such different perspectives around their guilt. And then their PJ hitman resurfaces. His version of events, means nothing is as it seemed.
                </p>

                <div className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                  <p className="mb-4">
                    They are divided on the reasons behind their discovery. Their mental health and liberty is seriously compromised. Will they remain united in their campaign to avoid detection?
                  </p>
                  
                  <p className="italic text-gold py-6 border-y border-gold/10">
                    "The following novel is a work of fiction inspired by my background as a criminal barrister and mother of eight children. Those of you who know me will recognise that elements of the main characters Jillian, Kathleen and Hannah are based on events from my life. But I never have run a vigilante crew. Although I may have thought about it."
                  </p>

                  <p className="mt-8">
                    Three childhood besties grow up in the provincial town of Dannevirke, New Zealand. They navigate their way through the aftermath of a disclosure by Kathleen that she has been sexually abused. Reunited as mature women in Auckland—Jillian, a Court Victim Advisor, and Kathleen, a Radical Home Birth Midwife—rescue Hannah from a coercively controlled marriage. Dissatisfied with the court system, they form Practical Justice.
                  </p>
                  
                  <p>
                    Their punishment regime is victim-focused, highlighting the power of victim-led processes. PJ also runs an underground restorative justice program for the few offenders who admit their guilt, manipulating cases out of the justice system and into their own restorative process.
                  </p>

                  <p>
                    Central to PJ’s therapeutic approach is the acknowledgement that for the healing of both victim and offender to be effective, the root cause must be addressed. Moana narrates her Māori perspective on the sacred power of sisterhood, the importance of knowing where we come from, and the power of whanau.
                  </p>
                </div>
              </div>
            </div>

            {!isExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-forest to-transparent" />
            )}
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-8 flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-bold hover:text-parchment transition-colors mx-auto"
          >
            {isExpanded ? 'Read Less' : 'Read Full Synopsis'} <ChevronRight size={14} className={isExpanded ? '-rotate-90' : 'rotate-90'} />
          </button>
        </div>
      </section>

      {/* Credits Section */}
      <section className="py-24 bg-forest/30 border-t border-gold/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionHeading subtitle="Acknowledgments">Ngā mihi nui • Obrigado • Thankyou</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 text-parchment/60 font-light text-sm italic">
            <div className="space-y-6">
              <div>
                <p className="text-gold uppercase tracking-widest text-[10px] mb-1 font-bold not-italic">Structural Edit</p>
                <p>Cerys Lloyd, old colleague and dear friend.</p>
              </div>
              <div>
                <p className="text-gold uppercase tracking-widest text-[10px] mb-1 font-bold not-italic">Cover Design</p>
                <p>Beejay Bradshaw, my darling friend.</p>
              </div>
              <div>
                <p className="text-gold uppercase tracking-widest text-[10px] mb-1 font-bold not-italic">Proofread & Inspiration</p>
                <p>Jemima Rose, sharp attention to detail <br /> and sharp words of encouragement.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-gold uppercase tracking-widest text-[10px] mb-1 font-bold not-italic">Administration</p>
                <p>Nina-Luka, my youngest daughter.</p>
              </div>
              <div>
                <p className="text-gold uppercase tracking-widest text-[10px] mb-1 font-bold not-italic">Character Inspirations</p>
                <p>Madisonne (Molly-Moana), Andre (Tiburcio), <br /> and my five sons whose antics gave me wealth of content.</p>
              </div>
              <div>
                <p className="text-gold uppercase tracking-widest text-[10px] mb-1 font-bold not-italic">Guidance</p>
                <p>All the Moana’s that have nurtured me <br /> during my many dramatic events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-12">
            <h3 className="font-serif text-5xl md:text-7xl lowercase italic tracking-tighter">practical <span className="not-italic font-bold">justice</span></h3>
            <div className="flex justify-center">
              <a 
                href="https://www.amazon.com/Three-Little-Vikings-DeAnne-Nicoloso-ebook/dp/B0DRT692R6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 bg-gold text-forest hover:bg-parchment transition-all duration-500 uppercase tracking-[0.2em] text-xs font-bold shadow-xl shadow-gold/10"
              >
                Available on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Newsletter */}
      <section className="py-24 bg-forest relative">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <SectionHeading subtitle="Stay Connected">The Monthly Scroll</SectionHeading>
          <p className="text-parchment/70 mb-10 font-light italic">Join DeAnne's private newsletter for writing updates, book launch news, and exclusive short stories.</p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full bg-transparent border-b border-gold/40 py-4 px-2 focus:outline-none focus:border-gold transition-colors italic"
            />
            <button className="absolute right-0 bottom-4 text-gold hover:translate-x-2 transition-transform">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-forest border-t border-gold/10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <SectionHeading subtitle="Get in Touch" light>Let's Narrate <br /> the Future</SectionHeading>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-forest transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gold">Email</p>
                  <p className="text-lg font-serif">nicolosoazambuja@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-6 bg-parchment/5 p-10 rounded-t-3xl border border-gold/10">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="bg-transparent border-b border-gold/20 py-3 focus:outline-none focus:border-gold transition-all" />
              <input type="email" placeholder="Email" className="bg-transparent border-b border-gold/20 py-3 focus:outline-none focus:border-gold transition-all" />
            </div>
            <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b border-gold/20 py-3 focus:outline-none focus:border-gold transition-all" />
            <button className="w-full bg-gold text-forest py-4 uppercase tracking-widest font-bold text-xs hover:bg-parchment transition-all duration-500">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-forest border-t border-gold/10 text-center">
        <div className="container mx-auto px-6">
          <div className="text-gold font-serif text-4xl italic mb-12">DeAnne Nicoloso</div>
          <div className="flex justify-center gap-8 mb-12">
            <Instagram size={20} className="text-parchment/50 hover:text-gold cursor-pointer transition-colors" />
            <Twitter size={20} className="text-parchment/50 hover:text-gold cursor-pointer transition-colors" />
            <Facebook size={20} className="text-parchment/50 hover:text-gold cursor-pointer transition-colors" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.2em] text-parchment/30">
            <span>© 2026 DeAnne Nicoloso</span>
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
