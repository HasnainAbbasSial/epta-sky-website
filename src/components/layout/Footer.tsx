import Link from 'next/link'
import { Facebook, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-muted text-muted-foreground border-t border-border mt-auto">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">Epta Sky</h3>
                        <p className="text-sm leading-relaxed">
                            We help businesses grow through data-driven SEO strategies and modern web solutions. Your success is our mission.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.linkedin.com/company/epta-sky/" target="_blank" className="hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://www.facebook.com/share/17vrKQV6tb/" target="_blank" className="hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://t.me/eptasky" target="_blank" className="hover:text-primary transition-colors">
                                <span className="text-xs font-bold font-mono">TG</span>
                                <span className="sr-only">Telegram</span>
                            </Link>
                            <Link href="https://wa.me/923070467687" target="_blank" className="hover:text-primary transition-colors">
                                <span className="text-xs font-bold font-mono">WA</span>
                                <span className="sr-only">WhatsApp</span>
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services/on-page-seo" className="hover:text-primary">On-Page SEO</Link></li>
                            <li><Link href="/services/off-page-seo" className="hover:text-primary">Off-Page SEO</Link></li>
                            <li><Link href="/services/technical-seo" className="hover:text-primary">Technical SEO</Link></li>
                            <li><Link href="/services/seo-audit" className="hover:text-primary">SEO Audit</Link></li>
                            <li><Link href="/services/content-writing" className="hover:text-primary">Content Writing</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/mission" className="hover:text-primary">Our Mission</Link></li>
                            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                            <li><Link href="/case-studies" className="hover:text-primary">Case Studies</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>contact@eptasky.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MessageCircle className="h-5 w-5 text-primary shrink-0" />
                                <span>+92 3070467687 (WhatsApp)</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>Jhang Punjab Pakistan</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {currentYear} Epta Sky. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
