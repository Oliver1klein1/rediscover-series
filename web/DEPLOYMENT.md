# Deployment Guide: www.ansiloboff.com

## Prerequisites
- ✅ GitHub repository with this project
- ✅ IONOS domain: `ansiloboff.com` (registered)
- ✅ Vercel account

## Step 1: Deploy to Vercel

### Option A: Via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. **IMPORTANT**: Set the **Root Directory** to `web`
   - Click "Configure Project"
   - Under "Root Directory", click "Edit"
   - Enter: `web`
   - Click "Save"
5. Leave other settings as default (Next.js is auto-detected)
6. Click **"Deploy"**

### Option B: Via Vercel CLI
```bash
cd web
npx vercel
# Follow prompts, set root directory to current folder (web)
```

## Step 2: Add Custom Domain

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `www.ansiloboff.com`
4. Click **"Add"**
5. Vercel will show you DNS configuration instructions

## Step 3: Configure DNS in IONOS

Based on your IONOS screenshot, you need to:

1. Go to IONOS → **Domains & SSL** → Click on `ansiloboff.com`
2. Click **"Set up external domain"** (from Quick Links)
3. Or manually configure DNS records:

### DNS Records to Add:

**For www subdomain:**
- **Type**: CNAME
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`
- **TTL**: 3600 (or default)

**For root domain (optional, if you want ansiloboff.com to work):**
- **Type**: A
- **Name**: `@` (or leave blank)
- **Value**: `76.76.21.21` (Vercel's IP - verify in Vercel dashboard)
- **TTL**: 3600

**OR use CNAME for root (if IONOS supports it):**
- **Type**: CNAME
- **Name**: `@`
- **Value**: `cname.vercel-dns.com`

## Step 4: SSL Certificate

1. Vercel automatically provisions SSL certificates via Let's Encrypt
2. Once DNS propagates (usually 5-60 minutes), SSL will be active
3. You can verify in Vercel dashboard under **Domains** → SSL status

## Step 5: Verify Deployment

1. Wait for DNS propagation (check with: `nslookup www.ansiloboff.com`)
2. Visit `https://www.ansiloboff.com` in your browser
3. Verify SSL padlock appears

## Troubleshooting

- **DNS not working?** Wait up to 48 hours for full propagation
- **SSL not active?** Ensure DNS records are correct, then wait 5-60 minutes
- **Build errors?** Check Vercel build logs in the dashboard
- **404 errors?** Verify root directory is set to `web` in Vercel project settings

## Continuous Deployment

Once connected:
- Every push to your main/master branch will auto-deploy
- Preview deployments are created for pull requests
- All deployments are available in Vercel dashboard

