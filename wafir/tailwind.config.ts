import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1628',
        secondary: '#0D2137',
        'accent-green': '#00C896',
        'accent-blue': '#1E90FF',
        'text-muted': '#8B9DB0',
        border: '#1E3A5F',
        warning: '#F59E0B',
        danger: '#EF4444',
        success: '#10B981',
      },
    },
  },
  plugins: [],
}
export default config
