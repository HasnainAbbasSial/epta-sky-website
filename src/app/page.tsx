import { Hero } from '@/components/home/Hero'
import { ServicesSection } from '@/components/home/ServicesSection'
import { Testimonials } from '@/components/home/Testimonials'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import { client } from '@/sanity/lib/client'

async function getServices() {
  const query = `*[_type == "service"] {
    title,
    description,
    "iconName": icon,
    slug
  }`
  try {
    return await client.fetch(query)
  } catch (error) {
    console.warn("Failed to fetch services:", error)
    return []
  }
}

async function getTestimonials() {
  const query = `*[_type == "testimonial"] {
    name,
    role,
    quote,
    image
  }`
  try {
    return await client.fetch(query)
  } catch (error) {
    console.warn("Failed to fetch testimonials:", error)
    return []
  }
}

export default async function Home() {
  const [services, testimonials] = await Promise.all([
    getServices(),
    getTestimonials()
  ])

  // Filter out items with missing critical data
  const validServices = services.filter((s: any) => s?.title && (s?.slug?.current || s?.href))
  const validTestimonials = testimonials.filter((t: any) => t?.name && t?.quote)

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesSection initialServices={validServices} />

      {/* Mission / Why Us Snippet */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              We Don't Just Rank Sites, <br />
              <span className="text-primary">We Build Empires.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              At Epta Sky, our mission is simple: to empower businesses with the visibility they deserve.
              We combine cutting-edge technology with human creativity to deliver SEO strategies that last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <h3 className="font-bold text-xl mb-1">500+</h3>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <h3 className="font-bold text-xl mb-1">98%</h3>
                <p className="text-sm text-muted-foreground">Client Retention</p>
              </div>
            </div>
            <Button className="mt-6" variant="secondary" href="/about">
              Read Our Mission
            </Button>
          </div>
          <div className="flex-1 relative">
            {/* Abstract Visual Image */}
            <div className="w-full h-[400px] bg-gradient-to-tr from-sky-600 to-cyan-600 rounded-2xl opacity-20 blur-3xl absolute inset-0" />
            <div className="w-full h-[400px] relative z-10 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/empires.png"
                alt="Building Empires"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials initialTestimonials={validTestimonials} />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Get a free SEO audit and discover your growth potential today.
          </p>
          <Button size="lg" variant="secondary" className="font-bold text-lg h-14 px-10" href="/contact">
            Get Your Free Audit <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
