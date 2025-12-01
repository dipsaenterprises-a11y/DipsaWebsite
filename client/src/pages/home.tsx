import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Sparkles, CheckCircle2, ShieldCheck, Leaf } from "lucide-react";

// Assets
import heroImage from "@assets/generated_images/bright_laundry_room_interior.png";
import octoImage from "@assets/generated_images/agar_incense_sticks_tripura_essence.png";
import dextaImage from "@assets/generated_images/sparkling_clean_kitchen_surface.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Clean modern laundry room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block py-1 px-3 rounded-full bg-primary/20 text-blue-100 border border-blue-400/30 text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              DIPSA ENTERPRISES PVT. LTD.
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
            >
              Defining the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Cleanliness</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-slate-200 mb-10 max-w-xl leading-relaxed"
            >
              Experience the pinnacle of hygiene with our premium brands. 
              Advanced formulations for a spotless world.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-blue-700" onClick={() => document.getElementById('octo-wash')?.scrollIntoView({behavior: 'smooth'})}>
                Explore Our Brands
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                About Company
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Excellence in Every Drop
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              At Dipsa Enterprises, we believe that a clean environment is the foundation of a healthy life. 
              Through rigorous research and innovation, we have developed two flagship brands that cater 
              to all your cleaning needs, ensuring safety, efficiency, and brilliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Quality Assured", desc: "ISO 9001 certified manufacturing processes ensuring top-tier products." },
                { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable formulations that are tough on stains but gentle on the planet." },
                { icon: Sparkles, title: "Advanced Formula", desc: "Cutting-edge chemical engineering for superior cleaning power." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OCTO WASH Section */}
      <section id="octo-wash" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-[hsl(190,90%,50%)]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img src={octoImage} alt="Agar Essence of Tripura" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(190,90%,20%)]/60 to-transparent flex items-end p-8">
                  <p className="text-white font-bold text-lg">Agar Essence of Tripura</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="text-[hsl(190,90%,50%)]" size={24} />
                <span className="text-[hsl(190,90%,50%)] font-bold tracking-wider text-sm uppercase">Premium Detergent</span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl font-black text-slate-900 mb-6">
                OCTO <span className="text-[hsl(190,90%,50%)]">WASH</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Unleash the power of 8-action cleaning technology. Octo Wash penetrates deep into fabrics 
                to remove the toughest stains while preserving the vibrant colors of your clothes.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Advanced enzyme formula for protein stains",
                  "Color-lock technology prevents fading",
                  "Long-lasting ocean breeze fragrance",
                  "Soft on hands, tough on dirt"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-[hsl(190,90%,50%)] shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-[hsl(190,90%,40%)] hover:bg-[hsl(190,90%,30%)] text-white h-12 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                View Products
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DEXTA Section */}
      <section id="dexta" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[hsl(145,80%,20%)] via-slate-900 to-slate-900 z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="text-[hsl(145,80%,50%)]" size={24} />
                <span className="text-[hsl(145,80%,50%)] font-bold tracking-wider text-sm uppercase">Total Home Hygiene</span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6">
                DEXTA
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                For surfaces that sparkle and a home that shines. Dexta offers a comprehensive range of 
                cleaning solutions for floors, glass, kitchens, and bathrooms. Maximum hygiene, minimum effort.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-[hsl(145,80%,50%)] mb-2">Surface Cleaner</h4>
                  <p className="text-sm text-slate-400">Kills 99.9% germs instantly.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-[hsl(145,80%,50%)] mb-2">Glass Shine</h4>
                  <p className="text-sm text-slate-400">Streak-free clarity for windows.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-[hsl(145,80%,50%)] mb-2">Dish Wash</h4>
                  <p className="text-sm text-slate-400">Cuts through grease effortlessly.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-[hsl(145,80%,50%)] mb-2">Bathroom Expert</h4>
                  <p className="text-sm text-slate-400">Removes limescale and grime.</p>
                </div>
              </div>

              <Button className="bg-[hsl(145,80%,40%)] hover:bg-[hsl(145,80%,30%)] text-white h-12 px-8 rounded-full shadow-lg shadow-[hsl(145,80%,40%)]/20 hover:shadow-[hsl(145,80%,40%)]/40 transition-all">
                Discover Range
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-[hsl(145,80%,50%)]/20 rounded-full blur-3xl" />
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10">
                <img src={dextaImage} alt="Dexta Cleaning" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-16 text-center border border-slate-100">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Partner with Dipsa Enterprises
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              Whether you are a distributor looking to expand your portfolio or a business seeking 
              bulk cleaning solutions, we are here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-blue-700 text-lg h-14 px-10"
                onClick={() => window.open('https://wa.me/8259076839', '_blank')}
                data-testid="btn-contact-sales"
              >
                Contact Sales
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
