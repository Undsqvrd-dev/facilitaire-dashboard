# Setup Guide - Environment Variables

## 🗄️ Database Setup (PostgreSQL)

### Optie 1: Neon (Aanbevolen - Gratis tier)
1. Ga naar [neon.tech](https://neon.tech)
2. Maak een gratis account aan
3. Maak een nieuw project aan
4. Ga naar "Connection Details"
5. Kopieer de connection string
6. Maak een aparte database voor staging en production

**Voorbeeld connection string:**
```
postgresql://username:password@ep-xxx-xxx-xxx.region.aws.neon.tech/database_name
```

### Optie 2: Supabase (Gratis tier)
1. Ga naar [supabase.com](https://supabase.com)
2. Maak een gratis account aan
3. Maak een nieuw project aan
4. Ga naar Settings > Database
5. Kopieer de connection string

### Optie 3: Railway (Betaald)
1. Ga naar [railway.app](https://railway.app)
2. Maak een account aan
3. Maak een PostgreSQL service aan
4. Kopieer de connection string

## 📧 Email Service (Resend)

### Staging Setup
1. Ga naar [resend.com](https://resend.com)
2. Maak een gratis account aan
3. Ga naar API Keys
4. Maak een nieuwe API key aan
5. Gebruik de test API key (begint met `re_test_`)

### Production Setup
1. In hetzelfde Resend account
2. Maak een nieuwe API key aan voor production
3. Gebruik de live API key (begint met `re_live_`)
4. Verificeer je domein (undsqvrd.nl)

## 🔐 JWT Secret

### Staging
Genereer een willekeurige string voor staging:
```bash
openssl rand -base64 32
```

### Production
Genereer een sterke, unieke string voor production:
```bash
openssl rand -base64 64
```

## 💳 Mollie (Toekomstige betalingen)

### Staging
1. Ga naar [mollie.com](https://mollie.com)
2. Maak een test account aan
3. Ga naar API Keys
4. Gebruik de test API key (begint met `test_`)

### Production
1. Maak een live Mollie account aan
2. Verificeer je bedrijfsgegevens
3. Gebruik de live API key (begint met `live_`)

## 🚀 Vercel Setup

### Environment Variables instellen

#### Staging Environment
1. Ga naar Vercel Dashboard > Project Settings
2. Ga naar Environment Variables
3. Voeg de volgende variabelen toe voor **staging** branch:

```
DATABASE_URL=postgresql://username:password@host:port/staging_db
RESEND_API_KEY=re_test_your_key_here
JWT_SECRET=your_staging_jwt_secret
NEXT_PUBLIC_API_URL=https://staging.undsovrd.vercel.app
```

#### Production Environment
1. In dezelfde Environment Variables sectie
2. Voeg de volgende variabelen toe voor **main** branch:

```
DATABASE_URL=postgresql://username:password@host:port/production_db
RESEND_API_KEY=re_live_your_key_here
JWT_SECRET=your_production_jwt_secret
NEXT_PUBLIC_API_URL=https://undsovrd.vercel.app
```

## 🔧 Database Migrations

Na het instellen van de database:

### Staging
```bash
git checkout staging
cd backend
npx prisma migrate deploy
npx prisma generate
```

### Production
```bash
git checkout main
cd backend
npx prisma migrate deploy
npx prisma generate
```

## ✅ Checklist

### Staging Setup
- [ ] PostgreSQL database aangemaakt (Neon/Supabase/Railway)
- [ ] Resend account aangemaakt en test API key gekregen
- [ ] JWT secret gegenereerd
- [ ] Environment variables ingesteld in Vercel (staging branch)
- [ ] Database migrations uitgevoerd
- [ ] Test e-mail verzonden

### Production Setup
- [ ] PostgreSQL database aangemaakt (productie instance)
- [ ] Resend live API key gekregen
- [ ] Domein geverifieerd bij Resend
- [ ] JWT secret gegenereerd
- [ ] Environment variables ingesteld in Vercel (main branch)
- [ ] Database migrations uitgevoerd
- [ ] Test e-mail verzonden

## 🆘 Troubleshooting

### Database Connection Issues
- Controleer of de DATABASE_URL correct is
- Controleer of de database bestaat
- Controleer firewall instellingen

### Email Issues
- Controleer of de RESEND_API_KEY correct is
- Controleer of het e-mailadres geldig is
- Controleer Resend logs voor foutmeldingen

### JWT Issues
- Controleer of JWT_SECRET is ingesteld
- Controleer of de secret lang genoeg is (minimaal 32 karakters)

## 📞 Support

Voor vragen over:
- **Neon**: [docs.neon.tech](https://docs.neon.tech)
- **Resend**: [resend.com/docs](https://resend.com/docs)
- **Mollie**: [docs.mollie.com](https://docs.mollie.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs) 