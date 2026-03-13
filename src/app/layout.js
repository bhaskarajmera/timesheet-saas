/**
 * @file layout.js
 * @brief Root layout for the application.
 *
 * This file defines the global HTML structure used across the entire
 * application. It wraps all pages with global providers and applies
 * global styles and fonts.
 *
 * The layout integrates the authentication session provider used
 * by the application to maintain login state.
 *
 * @author Your Name
 * @date 2026-03-13
 */

"use client"

import "./globals.css"
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google"

/**
 * @constant inter
 * @brief Global font configuration.
 *
 * Uses the Inter font family from Google Fonts and exposes it
 * as a CSS variable to be used across the application.
 */
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
})

/**
 * @component RootLayout
 * @brief Main layout wrapper for all pages.
 *
 * This component defines the root HTML structure and applies
 * global providers such as the authentication session provider.
 * All pages within the app are rendered inside this layout.
 *
 * @param {Object} props Component props
 * @param {React.ReactNode} props.children Nested page content
 *
 * @returns {JSX.Element} Root layout component
 */
export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="bg-gray-50 font-sans">
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    )
}
