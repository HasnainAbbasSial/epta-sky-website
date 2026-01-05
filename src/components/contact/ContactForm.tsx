"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'
import { sendContactEmail } from '@/app/contact/action'

export function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [captcha, setCaptcha] = useState(() => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        return { a, b, result: a + b };
    });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const formData = new FormData(e.currentTarget)
        const result = await sendContactEmail(formData)

        setLoading(false)
        if (result.success) {
            setSuccess(true)
        } else {
            setError(result.error || "Something went wrong. Please try again.")
            // Refresh captcha on error
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            setCaptcha({ a, b, result: a + b });
        }
    }

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-green-500/10 border border-green-500/20 rounded-xl text-center"
            >
                <h3 className="text-2xl font-bold text-green-500 mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                <Button onClick={() => setSuccess(false)} variant="outline" className="mt-6">
                    Send Another
                </Button>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                        type="text" id="name" name="name" required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                        type="email" id="email" name="email" required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <select
                    id="subject" name="subject"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                >
                    <option>General Inquiry</option>
                    <option>SEO Audit Request</option>
                    <option>Service Quote</option>
                    <option>Partnership</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                    id="message" name="message" required rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                />
            </div>

            {/* Anti-Spam / Captcha */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div className="space-y-2">
                    <label htmlFor="captcha" className="text-sm font-medium">Verify: What is {captcha.a} + {captcha.b}?</label>
                    <input
                        type="number" id="captcha" name="captcha" required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                        placeholder="Your answer"
                    />
                    <input type="hidden" name="captchaExpected" value={captcha.result} />
                </div>

                {/* Honeypot field (hidden from users) */}
                <div className="hidden" aria-hidden="true">
                    <input type="text" name="b_phone" tabIndex={-1} autoComplete="off" />
                </div>

                {error && (
                    <div className="text-red-500 text-sm font-medium">
                        {error}
                    </div>
                )}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                ) : (
                    <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    )
}
