import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { WarpBackground } from "@/components/ui/warp-background";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-sans",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Abdullah's Portfolio",
	description: "My personal portfolio showcasing projects and experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={jetbrainsMono.variable}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
			>
				<WarpBackground
					className="min-h-screen w-full"
					beamsPerSide={4}
					beamSize={3}
					beamDelayMax={3}
					gridColor="hsl(var(--border))"
				>
					{children}
				</WarpBackground>
			</body>
		</html>
	);
}
