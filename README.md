# Website

A modern website built with SvelteKit, Tailwind CSS, and Three.js.

## Tech Stack

- **SvelteKit** - Web framework
- **Tailwind CSS** - Styling
- **Three.js** - 3D graphics
- **TypeScript** - Type safety
- **Netlify** - Deployment platform

## Features

- Responsive design (Desktop 16:9/16:10 and Mobile portrait)
- Three.js 3D scene integration
- Optimized for Netlify deployment

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Netlify

### Option 1: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

### Option 2: GitHub + Netlify

1. Push this repository to GitHub
2. Connect your GitHub repo to Netlify
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
4. Deploy!

## Project Structure

```
├── src/
│   ├── lib/
│   │   └── components/
│   │       └── ThreeScene.svelte
│   ├── routes/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   ├── app.css
│   └── app.html
├── static/
├── package.json
├── svelte.config.js
├── tailwind.config.js
└── vite.config.ts
```
