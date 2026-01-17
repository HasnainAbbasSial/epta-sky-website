import { ContactForm } from '@/components/contact/ContactForm'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export const metadata = {
    title: 'Contact Us | Epta Sky',
    description: 'Get in touch with Epta Sky for your SEO needs.',
}

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Start a Conversation</h1>
                    <p className="text-xl text-muted-foreground">
                        Ready to grow your business? Fill out the form below or contact us directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                            <h2 className="text-xl font-bold mb-6">Contact Info</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-muted-foreground">Email</p>
                                        <p className="font-semibold">contact@eptasky.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <MessageCircle className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-muted-foreground">WhatsApp</p>
                                        <p className="font-semibold">+92 3070467687</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-muted-foreground">Office</p>
                                        <p className="font-semibold">Jhang Punjab Pakistan</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                            <h2 className="text-xl font-bold mb-6">Follow Us</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="https://www.linkedin.com/company/epta-sky/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-3 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
                                >
                                    <span className="text-primary group-hover:scale-110 transition-transform">IN</span>
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </a>
                                <a
                                    href="https://www.facebook.com/share/17vrKQV6tb/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-3 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
                                >
                                    <span className="text-primary group-hover:scale-110 transition-transform">FB</span>
                                    <span className="text-sm font-medium">Facebook</span>
                                </a>
                                <a
                                    href="https://t.me/eptasky"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-3 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
                                >
                                    <span className="text-primary group-hover:scale-110 transition-transform">TG</span>
                                    <span className="text-sm font-medium">Telegram</span>
                                </a>
                                <a
                                    href="https://wa.me/923070467687"
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-3 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
                                >
                                    <span className="text-primary group-hover:scale-110 transition-transform">WA</span>
                                    <span className="text-sm font-medium">WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
