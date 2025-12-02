# Physical AI & Humanoid Robotics Textbook

A comprehensive 13-week course on controlling humanoid robots using ROS 2, NVIDIA Isaac Sim, and Vision-Language-Action models.

Built with [Docusaurus 3](https://docusaurus.io/).

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (opens browser at http://localhost:3000/AI_Book/)
npm start

# Build for production
npm run build

# Test production build locally
npm run serve
```

## Project Structure

```
book/
├── docs/                   # MDX content files (13-week curriculum)
│   ├── intro.md            # Getting Started page
│   ├── module-1-ros2/      # Module 1: ROS 2 (Weeks 1-5)
│   ├── module-2-simulation/# Module 2: Simulation (Weeks 6-7)
│   ├── module-3-isaac/     # Module 3: Isaac (Weeks 8-10)
│   └── module-4-vla/       # Module 4: VLA Models (Weeks 11-13)
├── src/                    # Custom React components
│   ├── components/         # Reusable components
│   ├── css/                # Custom styles
│   └── pages/              # Custom pages (landing page)
├── static/                 # Static assets (images, fonts)
│   └── img/                # Images and logos
├── docusaurus.config.ts    # Docusaurus configuration
├── sidebars.ts             # Sidebar configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server with hot-reload |
| `npm run build` | Build static site for production |
| `npm run serve` | Serve production build locally |
| `npm run clear` | Clear Docusaurus cache |
| `npm run typecheck` | Run TypeScript type checking |

## Development Workflow

1. **Start dev server**: `npm start`
2. **Edit content**: Modify `.md` or `.mdx` files in `docs/`
3. **Auto-refresh**: Browser updates within 2 seconds
4. **Test build**: Run `npm run build` before committing
5. **Deploy**: Push to `main` branch (GitHub Actions handles deployment)

## Prerequisites

- **Node.js**: 20.x LTS
- **npm**: 10.x
- **Git**: Latest version

## Performance Targets

- ✅ Dev server starts in **<10 seconds**
- ✅ Hot-reload updates in **<2 seconds**
- ✅ Production build completes in **<2 minutes**
- ✅ Build output size **<10MB**
- ✅ First Contentful Paint **<2 seconds**

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

**Live URL**: `https://[username].github.io/AI_Book/`

## Contributing

See [docs/contributing.md](./docs/contributing.md) for content guidelines and style guide.

## License

Content: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
Code: MIT License

## Troubleshooting

### Dev server won't start

```bash
# Clear cache and reinstall
npm run clear
rm -rf node_modules package-lock.json
npm install
npm start
```

### Build fails with TypeScript errors

```bash
# Check types
npm run typecheck

# Fix reported errors in .ts/.tsx files
```

### Port 3000 already in use

```bash
# Use different port
npm start -- --port 3001
```

## Support

- 📚 Docusaurus Docs: https://docusaurus.io
- 🐛 Report Issues: https://github.com/[username]/AI_Book/issues
- 💬 Discussions: https://github.com/[username]/AI_Book/discussions
