import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: {
        default: "Jai Bajrang Bali Digital Marketing Agency | Transform Your Online Presence",
        template: "%s | Jai Bajrang Bali"
    },
    description: "Jai Bajrang Bali is a premier marketing agency specializing in SEO, PPC, Social Media, and Web Design. Scale your business with data-driven marketing strategies.",
    keywords: ["digital marketing agency", "SEO services", "social media marketing", "PPC management", "Jai Bajrang Bali"],
    authors: [{ name: "Jai Bajrang Bali Team" }],
    creator: "Jai Bajrang Bali",
    publisher: "Jai Bajrang Bali",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ybor.netlify.app/",
        siteName: "Jai Bajrang Bali Digital Marketing",
        title: "Jai Bajrang Bali Digital Marketing Agency | Transform Your Online Presence",
        description: "Scale your business with data-driven marketing strategies from Jai Bajrang Bali.",
        images: [
            {
                url: "/logo.jpg",
                width: 1200,
                height: 630,
                alt: "Jai Bajrang Bali Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Jai Bajrang Bali Digital Marketing Agency",
        description: "Scale your business with data-driven marketing strategies from Jai Bajrang Bali.",
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
                            "name": "Jai Bajrang Bali Digital Marketing",
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
                                "https://www.facebook.com/jaibajrangbali",
                                "https://www.instagram.com/jaibajrangbali",
                                "https://www.linkedin.com/company/jaibajrangbali"
                            ]
                        })
                    }}
                />
                {children}
            </body>
        </html>
    );
}
