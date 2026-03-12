import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: {
        default: "Ybor Digital Marketing Agency | Transform Your Online Presence",
        template: "%s | Ybor Digital"
    },
    description: "Ybor Digital is a premier marketing agency specializing in SEO, PPC, Social Media, and Web Design. Scale your business with data-driven marketing strategies.",
    keywords: ["digital marketing agency", "SEO services", "social media marketing", "PPC management", "Ybor Digital"],
    authors: [{ name: "Ybor Digital Team" }],
    creator: "Ybor Digital",
    publisher: "Ybor Digital",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ybor.netlify.app/",
        siteName: "Ybor Digital Marketing",
        title: "Ybor Digital Marketing Agency | Transform Your Online Presence",
        description: "Scale your business with data-driven marketing strategies from Ybor Digital.",
        images: [
            {
                url: "/logo.jpg",
                width: 1200,
                height: 630,
                alt: "Ybor Digital Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ybor Digital Marketing Agency",
        description: "Scale your business with data-driven marketing strategies from Ybor Digital.",
        images: ["/logo.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "name": "Ybor Digital Marketing",
                            "image": "https://ybor.netlify.app/logo.jpg",
                            "@id": "https://ybor.netlify.app/",
                            "url": "https://ybor.netlify.app/",
                            "telephone": "+91 84539 0000",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Assam",
                                "addressCountry": "IN"
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday"
                                ],
                                "opens": "09:00",
                                "closes": "18:00"
                            },
                            "sameAs": [
                                "https://www.facebook.com/ybordigital",
                                "https://www.instagram.com/ybordigital",
                                "https://www.linkedin.com/company/ybordigital"
                            ]
                        })
                    }}
                />
                {children}
            </body>
        </html>
    );
}
