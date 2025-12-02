# Quick Start: Docusaurus Setup

**Feature**: 001-docusaurus-setup
**Audience**: Developers setting up the textbook for the first time

---

## Prerequisites

Before starting, ensure you have:

- ✅ **Node.js 20.x LTS** installed (`node --version` should show v20.x.x)
- ✅ **npm 10.x** installed (comes with Node 20)
- ✅ **Git** installed and configured
- ✅ **GitHub account** with repository access
- ✅ **Text editor** (VS Code recommended)

**Install Node.js** (if needed):
```bash
# Using nvm (recommended)
nvm install 20
nvm use 20

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x
```

---

## Step 1: Clone Repository

```bash
# Clone the repository
git clone https://github.com/[username]/AI_Book.git
cd AI_Book

# Checkout feature branch (if implementing)
git checkout 001-docusaurus-setup
```

---

## Step 2: Install Dependencies

```bash
# Navigate to book directory
cd book

# Install all dependencies
npm install

# Expected output:
# added XXX packages in XXs
```

**Verification**:
```bash
# Check that node_modules exists
ls -la | grep node_modules

# Verify key packages installed
npm list docusaurus
```

---

## Step 3: Start Development Server

```bash
# From book/ directory
npm start

# Expected output:
# [SUCCESS] Docusaurus website is running at http://localhost:3000/
```

**What Happens**:
1. Docusaurus compiles MDX files
2. Webpack bundles JavaScript
3. Dev server starts on port 3000
4. Browser opens automatically
5. Hot-reload enabled (2-second refresh on file save)

**Verification**:
- Browser opens to `http://localhost:3000/AI_Book/`
- Landing page displays with course title
- Sidebar shows 4 modules and 13 weeks
- Theme toggle works (light/dark mode)

---

## Step 4: Explore Content Structure

```bash
# View directory structure (from book/)
tree -L 3 docs/

# Expected output:
# docs/
# ├── intro.md
# ├── module-1-ros2/
# │   ├── _category_.json
# │   ├── week-1-physical-ai-intro.md
# │   ├── week-2-sensors.md
# │   └── ...
# ├── module-2-simulation/
# │   └── ...
# └── ...
```

---

## Step 5: Make a Test Edit

```bash
# Open any week file
nano docs/module-1-ros2/week-1-physical-ai-intro.md

# Add a line to the content:
"**Test**: This is a test edit."

# Save and close (Ctrl+O, Enter, Ctrl+X)
```

**Verification**:
- Dev server automatically refreshes (within 2 seconds)
- Browser shows your edit
- No manual page reload needed

---

## Step 6: Build for Production

```bash
# From book/ directory
npm run build

# Expected output:
# [SUCCESS] Generated static files in "build".
# [INFO] Use `npm run serve` to test your build locally.
```

**What Happens**:
1. TypeScript type-checking
2. MDX compilation
3. React server-side rendering (SSR)
4. JavaScript bundling and minification
5. CSS extraction and optimization
6. Static HTML generation
7. Output to `book/build/` directory

**Verification**:
```bash
# Check build output
ls -lh build/

# Expected directories:
# build/
# ├── index.html          # Landing page
# ├── docs/               # All content pages
# ├── assets/             # CSS + JS bundles
# └── img/                # Images

# Verify size
du -sh build/
# Expected: <10MB
```

---

## Step 7: Test Production Build Locally

```bash
# Serve the build locally
npm run serve

# Expected output:
# Serving "build" directory at http://localhost:3000/AI_Book/
```

**Verification**:
- Open http://localhost:3000/AI_Book/
- All pages load correctly
- Navigation works
- No console errors
- Performance is optimized (faster than dev server)

---

## Step 8: Deploy to GitHub Pages

### 8.1 Configure GitHub Repository Settings

1. Go to repository settings: `https://github.com/[username]/AI_Book/settings`
2. Navigate to **Pages** (left sidebar)
3. Set source:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**

### 8.2 Push to Main Branch

```bash
# From repository root (not book/)
cd ..

# Ensure you're on main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge your feature branch (or create PR and merge via GitHub)
git merge 001-docusaurus-setup

# Push to main (triggers GitHub Actions)
git push origin main
```

### 8.3 Monitor Deployment

1. Go to **Actions** tab: `https://github.com/[username]/AI_Book/actions`
2. Watch "Deploy to GitHub Pages" workflow
3. Expected duration: 2-5 minutes
4. Status should be ✅ green checkmark

**Workflow Steps**:
1. ✅ Checkout code
2. ✅ Setup Node.js 20
3. ✅ Install dependencies (`npm ci`)
4. ✅ Build site (`npm run build`)
5. ✅ Deploy to gh-pages branch

### 8.4 Verify Deployment

```bash
# Site should be live at:
https://[username].github.io/AI_Book/
```

**Verification Checklist**:
- [ ] Landing page loads
- [ ] All 13 weeks accessible via sidebar
- [ ] Navigation works (module cards, links)
- [ ] Theme toggle works
- [ ] No console errors (F12 → Console)
- [ ] Responsive on mobile (resize browser)

---

## Common Commands Reference

### Development
```bash
cd book

# Start dev server (hot-reload enabled)
npm start

# Build for production
npm run build

# Test production build locally
npm run serve

# Clear cache (if build issues)
npm run clear

# Type-check TypeScript
npx tsc --noEmit
```

### Deployment
```bash
# From repository root

# Deploy via GitHub Actions (automatic)
git push origin main

# Manual deployment (not recommended)
cd book
npm run build
npx gh-pages -d build --branch gh-pages
```

### Debugging
```bash
# View build output details
npm run build -- --out-dir build --no-minify

# Analyze bundle size
npm run build -- --bundle-analyzer

# Check for broken links
npm run build -- --fail-on-warning
```

---

## Troubleshooting

### Issue: `npm install` fails

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Dev server port 3000 already in use

**Solution**:
```bash
# Use different port
npm start -- --port 3001
```

### Issue: Build fails with TypeScript errors

**Solution**:
```bash
# Check TypeScript configuration
cat tsconfig.json

# Type-check manually
npx tsc --noEmit

# Fix reported errors in .ts/.tsx files
```

### Issue: GitHub Actions deployment fails

**Solution**:
1. Check workflow logs: Actions tab → Failed workflow → View logs
2. Common causes:
   - Missing `gh-pages` branch permissions
   - Build errors (fix locally first)
   - Node version mismatch (check workflow uses Node 20)
3. Re-run workflow: Actions → Failed workflow → Re-run jobs

### Issue: Site loads but styles broken

**Solution**:
- **Cause**: Incorrect `baseUrl` in `docusaurus.config.ts`
- **Fix**: Ensure `baseUrl: '/AI_Book/'` matches repository name
- **Rebuild**: `npm run build` and redeploy

### Issue: Hot-reload not working

**Solution**:
```bash
# Restart dev server
# Press Ctrl+C to stop
npm start

# If still not working, clear cache
npm run clear
npm start
```

---

## Performance Benchmarks

**Expected Performance** (on standard development machine):

| Metric | Target | Typical |
|--------|--------|---------|
| `npm install` | <60s | 30-45s |
| `npm start` | <10s | 5-8s |
| Hot-reload | <2s | 1-2s |
| `npm run build` | <120s | 45-90s |
| Build output size | <10MB | 3-6MB |
| GitHub Actions deploy | <300s | 120-240s |
| First Contentful Paint | <2s | 1-1.5s |

---

## Next Steps

After completing quick start:

1. ✅ **Read**: `docs/contributing.md` for content guidelines
2. ✅ **Explore**: Docusaurus documentation at https://docusaurus.io
3. ✅ **Customize**: Edit `docusaurus.config.ts` for site metadata
4. ✅ **Add Content**: Create real content to replace placeholders
5. ✅ **Test**: Run `npm run build` before pushing to main

---

## Additional Resources

**Docusaurus**:
- Official Docs: https://docusaurus.io
- MDX Guide: https://docusaurus.io/docs/markdown-features
- Configuration: https://docusaurus.io/docs/api/docusaurus-config
- Theming: https://docusaurus.io/docs/styling-layout

**GitHub Pages**:
- Setup Guide: https://docs.github.com/en/pages
- Custom Domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

**GitHub Actions**:
- Workflow Syntax: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions
- peaceiris/actions-gh-pages: https://github.com/peaceiris/actions-gh-pages

---

**Quick Start Complete** ✅

You now have a fully functional Docusaurus site deployed to GitHub Pages!
