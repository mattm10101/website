/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				lab: {
					metal: '#1f1f23',
					panel: '#2a2a2e',
					accent: '#14ffec',
					header: '#151518'
				},
				neon: {
					teal: '#14ffec',
					blue: '#00d0ff',
					purple: '#a855f7',
					pink: '#ec4899'
				},
				audio: {
					red: '#ef4444',
					yellow: '#fbbf24',
					green: '#22c55e'
				}
			},
			boxShadow: {
				panel: '0 4px 12px rgba(0,0,0,0.6)',
				glow: '0 0 8px rgba(20,255,236,0.6), 0 0 16px rgba(0,208,255,0.4)',
				'glow-purple': '0 0 8px rgba(168,85,247,0.6), 0 0 16px rgba(168,85,247,0.4)',
				'glow-pink': '0 0 8px rgba(236,72,153,0.6), 0 0 16px rgba(236,72,153,0.4)'
			},
			fontFamily: {
				sci: ["'Share Tech Mono'", 'monospace'],
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			screens: {
				desktop: '1024px',
				mobile: { max: '1023px' }
			},
			animation: {
				'fade-in': 'fadeIn 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
				'slide-up': 'slideUp 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
				glow: 'glow 2s ease-in-out infinite alternate'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				glow: {
					'0%': { boxShadow: '0 0 8px rgba(20,255,236,0.6), 0 0 16px rgba(0,208,255,0.4)' },
					'100%': { boxShadow: '0 0 12px rgba(20,255,236,0.8), 0 0 24px rgba(0,208,255,0.6)' }
				}
			}
		}
	},
	plugins: []
};
