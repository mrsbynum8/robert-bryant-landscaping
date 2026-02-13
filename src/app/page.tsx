import Image from "next/image";
import { Check, Star, MapPin, Phone, ArrowRight } from "lucide-react";
import { ServiceAreaMap } from "@/components/landscaping/ServiceAreaMap";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PremiumButton } from "@/components/ui/premium-button";
import { ServiceCard } from "@/components/landscaping/ServiceCard";
import { ServiceAreas } from "@/components/landscaping/ServiceAreas";
import { ContactForm } from "@/components/landscaping/ContactForm";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { servicesData } from "@/lib/service-data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navbar />

      {/* 
        HERO SECTION 
      */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/hero.jpg"
            alt="Beautiful landscaped backyard in Atlanta"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6 text-center text-white">
          <ScrollAnimation>
            <h1 className="mb-6 font-heading text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl md:text-7xl drop-shadow-2xl">
              Your Yard Deserves<br />
              <span className="text-primary">The Best in Atlanta</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-gray-200 sm:text-2xl">
              From weekly mowing to jaw-dropping hardscapes, Robert Bryant Landscaping gives you the kind of curb appeal that makes the neighbors slow down and stare.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PremiumButton href="#contact" variant="primary" size="lg">
                Get Your Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </PremiumButton>
              <PremiumButton href="#services" variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
                View Our Services
              </PremiumButton>
            </div>
          </ScrollAnimation>

          {/* Trust Badges */}
          <ScrollAnimation delay={0.6}>
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-white/80">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-secondary" /> Fully Insured
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-secondary" /> Free Estimates
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-secondary" /> 5-Star Rated
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 
        ABOUT SECTION 
      */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Text Content */}
            <ScrollAnimation className="space-y-8">
              <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-foreground leading-tight">
                Locally Owned. Personally Invested. Always On Time.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  We&apos;re not a franchise. We&apos;re your neighbors. Robert Bryant Landscaping is a locally owned crew that treats every yard like it&apos;s our own — because our reputation rides on it. Whether it&apos;s a quick weekly mow or a full backyard makeover, we show up when we say we will and leave your property looking better than we found it.
                </p>
                <p>
                  We keep things simple: honest pricing, clear communication, and results you can see from the street. No corporate runaround. Just great landscaping from people who actually care.
                </p>
                <div className="rounded-xl bg-orange-50 p-6 border-l-4 border-primary">
                  <p className="italic text-foreground">
                    "Oh, and meet <strong>Bentley</strong> — our Chief Morale Officer (pictured right). While Robert handles the design work and business side, Bentley&apos;s in charge of stick retrieval, squirrel surveillance, and making sure every job site has adequate tail-wagging. He takes his role as a Very Good Boy™ extremely seriously."
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Image Content */}
            <ScrollAnimation delay={0.2} className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/images/bailey.jpeg"
                alt="Bentley the Labradoodle - Chief Morale Officer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </ScrollAnimation>
          </div>
        </div>
      </section>


      {/* 
        SERVICES SECTION
      */}
      <section id="services" className="relative bg-muted py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#1b4d2e 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-16 text-center">
            <ScrollAnimation>
              <h2 className="mb-4 font-heading text-4xl font-black uppercase tracking-tight text-foreground">What We Do (Really Well)</h2>
              <div className="mx-auto h-1 w-24 rounded bg-primary" />
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Every property is different — and that&apos;s the fun part. Here&apos;s how we help homeowners across North Georgia love their outdoor spaces again.
              </p>
            </ScrollAnimation>
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            {Object.entries(servicesData).map(([slug, service], index) => (
              <ScrollAnimation key={slug} delay={index * 0.1}>
                <ServiceCard
                  eyebrow={service.eyebrow}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.image}
                  href={`/services/${slug}`}
                  reversed={index % 2 === 1}
                />
              </ScrollAnimation>
            ))}

            {/* CTA Card */}
            <ScrollAnimation delay={0.5}>
              <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-primary p-6 text-center shadow-lg transition-all hover:shadow-2xl">
                <h3 className="mb-4 font-heading text-3xl font-bold text-white">Don&apos;t See What You Need?</h3>
                <p className="mb-8 text-white/90">
                  No two yards are the same. Tell us what you&apos;re envisioning and we&apos;ll make it happen — or at least buy you a coffee while we figure it out.
                </p>
                <PremiumButton href="/contact" variant="primary" className="bg-white text-primary hover:bg-white/90">
                  Let&apos;s Talk About Your Project
                </PremiumButton>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <ServiceAreas />

      {/* 
        TESTIMONIALS (Social Proof)
      */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <ScrollAnimation>
              <h2 className="mb-4 font-heading text-4xl font-black uppercase tracking-tight">Don&apos;t Take Our Word For It</h2>
              <div className="mx-auto h-1 w-24 rounded bg-secondary" />
            </ScrollAnimation>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                text: "Our backyard went from 'meh' to 'how much did that cost?!' The patio looks incredible and the crew was super easy to work with. Genuinely exceeded every expectation.",
                author: "Sarah J.",
                location: "Marietta, GA"
              },
              {
                text: "Honestly, I just wanted someone who'd actually show up. Robert's team does that AND my lawn's never looked better. My wife thinks I secretly hired a groundskeeper.",
                author: "Mike D.",
                location: "Kennesaw, GA"
              },
              {
                text: "Full sod install plus irrigation repair — done in a day, priced fairly, and they even followed up a week later to make sure everything took. That's rare.",
                author: "Emily R.",
                location: "Woodstock, GA"
              },
            ].map((testimonial, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1} className="h-full">
                <div className="h-full rounded-xl bg-white/10 p-8 backdrop-blur-sm">
                  <div className="mb-4 flex text-secondary">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="mb-6 text-lg italic leading-relaxed text-white/90">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-white/70">{testimonial.location}</div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 
        CONTACT SECTION
      */}
      <section id="contact" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollAnimation>
              <div>
                <h2 className="mb-6 font-heading text-4xl font-black uppercase tracking-tight text-foreground">Let&apos;s Get You a Free Quote</h2>
                <p className="mb-8 text-xl text-muted-foreground">
                  Tell us what you&apos;re working with, and we&apos;ll get back to you within 24 hours — usually sooner. No pressure, no gimmicks, just a honest estimate.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Call Us</h4>
                      <p className="text-muted-foreground"><a href="tel:7067104494" className="hover:text-primary">(706) 710-4494</a></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Service Area</h4>
                      <p className="text-muted-foreground">Marietta, Acworth, Kennesaw, Woodstock, Holly Springs</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <ServiceAreaMap />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div>
                <ContactForm />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
