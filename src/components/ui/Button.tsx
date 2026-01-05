"use client"

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    href?: string
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
    className,
    variant = 'primary',
    size = 'md',
    children,
    href,
    ...props
}, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground"
    }

    const sizes = {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg"
    }

    // If href is provided, render as Link
    if (href) {
        const MotionLink = motion.create(Link)
        return (
            <MotionLink
                href={href}
                ref={ref as any}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -1 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...(props as any)}
            >
                {children}
            </MotionLink>
        )
    }

    // Otherwise render as button
    return (
        <motion.button
            ref={ref as any}
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -1 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...(props as any)}
        >
            {children}
        </motion.button>
    )
})

Button.displayName = "Button"

export { Button }
