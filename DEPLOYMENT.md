# Deployment Workflow

## 🚀 Git/Vercel Workflow

### Branch Strategy
- **main**: Production branch (live website)
- **staging**: Test branch (staging environment)
- **feature branches**: Voor nieuwe features (merge naar staging)

### Development Flow

1. **Nieuwe feature ontwikkelen:**
   ```bash
   git checkout staging
   git pull origin staging
   git checkout -b feature/nieuwe-feature
   # ... ontwikkel je feature
   git add .
   git commit -m "feat: nieuwe feature toegevoegd"
   git push origin feature/nieuwe-feature
   ```

2. **Feature naar staging:**
   - Maak Pull Request van `feature/nieuwe-feature` naar `staging`
   - Code review uitvoeren
   - Merge naar staging

3. **Staging naar production:**
   - Test alles op staging: https://staging.undsovrd.vercel.app
   - Maak Pull Request van `staging` naar `main`
   - Na goedkeuring: merge naar main

### Environment URLs
- **Production**: https://undsovrd.vercel.app
- **Staging**: https://staging.undsovrd.vercel.app

### Environment Variables

#### Staging (Vercel Dashboard)
- Ga naar Project Settings > Environment Variables
- Voeg alle variabelen uit `env.staging` toe
- Zorg dat deze alleen op staging branch actief zijn

#### Production (Vercel Dashboard)
- Ga naar Project Settings > Environment Variables
- Voeg alle variabelen uit `env.production` toe
- Zorg dat deze alleen op main branch actief zijn

### Vercel Configuration

#### Staging Deployment
1. Ga naar Vercel Dashboard > Project Settings
2. Onder "Git" sectie:
   - Zet "Production Branch" op `main`
   - Voeg `staging` toe als "Preview Branch"
3. Onder "Domains":
   - Voeg custom domain toe: `staging.undsovrd.vercel.app`

#### Production Deployment
- Automatisch via main branch
- Alleen na succesvolle staging merge

### Quality Assurance

#### Automatische Checks
- ✅ Build tests op staging
- ✅ Linting checks
- ✅ Branch protection (geen directe merges naar main)
- ⚠️ Voeg Playwright/Cypress tests toe voor E2E testing

#### Manual Checks
- [ ] Test alle features op staging
- [ ] Controleer responsive design
- [ ] Test API endpoints
- [ ] Valideer database connecties
- [ ] Check error logging

### Rollback Procedure
Als er problemen zijn in production:
1. Identificeer de problematische commit
2. Revert de merge op main
3. Fix het probleem in staging
4. Herhaal de deployment flow

### Best Practices
- ✅ Commit messages in conventionele format: `feat:`, `fix:`, `docs:`, etc.
- ✅ Test altijd op staging voordat je naar production gaat
- ✅ Gebruik feature branches voor nieuwe development
- ✅ Code review verplicht voor alle merges
- ✅ Monitor staging en production deployments 