import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				game: {
					dark: '#0D1C39',
					accent: '#D4AF37',
					highlight: '#66E1FF',
					neon: '#9D4EDD',
					surface: 'rgba(13, 28, 57, 0.7)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-40rem 0' },
					'100%': { backgroundPosition: '40rem 0' }
				},
				glow: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' }
				},
				shimmerGold: {
					'0%': { backgroundPosition: '-40rem 0', opacity: '0.8' },
					'50%': { opacity: '1' },
					'100%': { backgroundPosition: '40rem 0', opacity: '0.8' }
				},
				float3d: {
					'0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0)' },
					'25%': { transform: 'translateY(-5px) translateX(3px) rotate(1deg)' },
					'50%': { transform: 'translateY(-10px) translateX(-2px) rotate(-1deg)' },
					'75%': { transform: 'translateY(-5px) translateX(-5px) rotate(0.5deg)' }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"float": "float 6s ease-in-out infinite",
				"shimmer": "shimmer 3s linear infinite",
				"glow": "glow 2s ease-in-out infinite",
				"fadeIn": "fadeIn 0.5s ease-in-out",
				"pulse": "pulse 2s ease-in-out infinite",
				"wave": "wave 2.5s infinite",
				"shimmerGold": "shimmerGold 3s ease-in-out infinite",
				"float3d": "float3d 8s ease-in-out infinite"
			},
			fontFamily: {
				sans: ['Source Sans Pro', 'Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				mono: ['JetBrains Mono', 'monospace'],
				display: ['Playfair Display', 'serif'],
				body: ['Source Sans Pro', 'sans-serif']
			},
			backdropBlur: {
				xs: '2px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-game': 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.2), rgba(157, 78, 221, 0.05))',
				'gradient-sand': 'linear-gradient(to bottom, #FDF7CD, #E2D1C3)',
				'gradient-sunset': 'linear-gradient(to right, #FEC6A1, #FFDDE1)',
				'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F2D06B 50%, #D4AF37 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
