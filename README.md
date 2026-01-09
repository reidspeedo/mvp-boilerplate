# MVP Boilerplate

Next.js boilerplate optimized for rapid MVP development with Postgres, Docker, Auth, and Resend email.

## 🚀 Quick Start

```bash
# 1. Copy environment variables
cp .env.example .env

# 2. Start with Docker
docker-compose up

# 3. Run migrations (in another terminal)
docker-compose exec app npm run db:migrate

# 4. Visit http://localhost:3000
```

## 📦 What's Included

- **Next.js 14** with App Router
- **PostgreSQL** database
- **Docker & Docker Compose** for easy setup
- **JWT Authentication** (removable if not needed)
- **Resend Email** integration (removable if not needed)
- **TypeScript** ready
- **Tailwind CSS** for styling

## 🗂️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Auth endpoints (removable)
│   │   └── example/       # Example API route
│   ├── (auth)/            # Auth pages (removable)
│   ├── dashboard/         # Protected route example (removable)
│   └── page.jsx          # Home page
├── lib/                   # Utilities
│   ├── db.js             # Database connection
│   ├── auth.js           # JWT helpers (removable)
│   ├── email.js           # Resend setup (removable)
│   └── utils.js           # Utility functions
├── components/            # React components
├── prisma/               # Database migrations
└── middleware.js         # Route protection (removable)
```

## 🔧 Configuration

### Environment Variables

Edit `.env` file:

```env
DATABASE_URL=postgresql://user:pass@db:5432/mvpdb
JWT_SECRET=your-secret-key
RESEND_API_KEY=re_xxxxx  # Optional
```

### Database Migrations

Migrations are in `prisma/migrations/`. Run them with:

```bash
npm run db:migrate
```

Or manually:

```bash
docker-compose exec db psql -U user -d mvpdb -f /path/to/migration.sql
```

## 🎯 Using with Cursor Agent

1. **Copy this boilerplate** to your new MVP repo
2. **Remove unused features**:
   - Delete `app/(auth)/` if no auth needed
   - Delete `middleware.js` if no protected routes
   - Delete `lib/email.js` if no emails
   - Remove Resend from `package.json`
3. **Implement your MVP** based on the blueprint:
   - Add API routes in `app/api/`
   - Add pages in `app/`
   - Create database migrations
   - Build components in `components/`

## 🗑️ Removing Unused Features

### Remove Authentication

```bash
# Delete files
rm -rf app/(auth) app/dashboard app/api/auth
rm lib/auth.js middleware.js

# Remove from package.json
npm uninstall jsonwebtoken bcryptjs @types/jsonwebtoken @types/bcryptjs
```

### Remove Email

```bash
# Delete file
rm lib/email.js

# Remove from package.json
npm uninstall resend
```

### Remove Tailwind

```bash
# Delete files
rm tailwind.config.js postcss.config.js app/globals.css

# Remove from package.json
npm uninstall tailwindcss postcss autoprefixer
```

## 📝 Development

### Local Development (without Docker)

```bash
# Install dependencies
npm install

# Start Postgres (or use Docker just for DB)
docker-compose up db

# Run migrations
npm run db:migrate

# Start dev server
npm run dev
```

### Database Access

```bash
# Connect to Postgres
docker-compose exec db psql -U user -d mvpdb

# Or from host
psql -h localhost -U user -d mvpdb
```

## 🐳 Docker Commands

```bash
# Start everything
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop everything
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Rebuild
docker-compose build --no-cache
```

## 📚 API Examples

### Health Check

```bash
curl http://localhost:3000/api/health
```

### Example API Route

```bash
curl http://localhost:3000/api/example
```

## 🔒 Security Notes

- **Change JWT_SECRET** in production
- **Use strong passwords** for Postgres in production
- **Enable HTTPS** in production
- **Review CORS settings** for production
- **Validate all inputs** in API routes

## 📖 Next Steps

1. Review the MVP blueprint
2. Customize database schema in `prisma/migrations/`
3. Implement API routes in `app/api/`
4. Build UI components in `components/`
5. Remove unused features
6. Deploy!

## 🤝 Contributing

This is a boilerplate - customize it for your needs!

## 📄 License

MIT

