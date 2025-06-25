# Google Tag Manager Setup voor Facility Finder

## Stap 1: Google Tag Manager Container aanmaken

1. Ga naar [tagmanager.google.com](https://tagmanager.google.com)
2. Klik op "Account maken" of log in met je Google account
3. Maak een nieuw account aan:
   - **Account naam**: Facility Finder
   - **Land**: Nederland
4. Maak een nieuwe container aan:
   - **Container naam**: Website
   - **Platform**: Web
5. Accepteer de voorwaarden
6. Kopieer je GTM-ID (**G-481R98VMEP**)

## Stap 2: GTM-ID vervangen in de code

Vervang `GTM-XXXXXXX` in de volgende bestanden met je echte GTM-ID (**G-481R98VMEP**):

1. `frontend/pages/_document.tsx` (regel 12 en 25)
2. `frontend/lib/gtm.ts` (regel 1)

## Stap 3: Google Analytics 4 configureren in GTM

1. Ga naar je GTM container
2. Klik op "Tags" → "Nieuw"
3. Klik op "Tag configuratie" → "Google Analytics: GA4 Configuration"
4. Voer je GA4 Measurement ID in (**G-481R98VMEP**)
5. Klik op "Triggering" → "All Pages"
6. Geef de tag een naam: "GA4 Configuration"
7. Klik op "Opslaan"

## Stap 4: Custom Events configureren

### Facility Finder Events

De volgende events worden automatisch getrackt:

1. **Filter Changes**
   - Event: `custom_event`
   - Category: `facility_finder`
   - Action: `filter_change`
   - Label: `{type} - {branche}`

2. **Company Selection**
   - Event: `custom_event`
   - Category: `facility_finder`
   - Action: `company_select`
   - Label: `{company_name}`

### Event Tracking in GA4

Om deze events in GA4 te zien:

1. Ga naar je GA4 property
2. Klik op "Configure" → "Events"
3. De custom events verschijnen automatisch

## Stap 5: Testen

1. Deploy je website
2. Open de browser developer tools
3. Ga naar de Console tab
4. Type `dataLayer` om te zien of GTM correct is geladen
5. Test de events door:
   - Filters te wijzigen
   - Bedrijven te selecteren
   - Door de website te navigeren

## Stap 6: Verificatie

1. Installeer de Google Tag Assistant browser extensie
2. Ga naar je website
3. Controleer of GTM correct wordt geladen
4. Test de events in real-time

## Belangrijke Events voor Facility Finder

### Automatisch getrackt:
- ✅ Pagina views
- ✅ Filter wijzigingen
- ✅ Bedrijfsselectie

### Handmatig toe te voegen (indien gewenst):
- Contact formulier submissions
- Telefoonnummer clicks
- Website clicks
- Map interacties (zoom, pan)

## Troubleshooting

### GTM laadt niet:
- Controleer of de GTM-ID correct is ingevoerd (**G-481R98VMEP**)
- Controleer of er geen JavaScript errors zijn
- Controleer of de website correct is gedeployed

### Events verschijnen niet in GA4:
- Wacht 24-48 uur voor data verschijnt
- Controleer of GA4 correct is geconfigureerd in GTM
- Test met Google Tag Assistant

### Performance issues:
- GTM laadt asynchroon, dus geen impact op page load
- Events worden gebufferd voor betere performance

## Volgende stappen

1. **Conversion Tracking**: Stel doelen in voor belangrijke acties
2. **Enhanced Ecommerce**: Track facility bookings/contacten
3. **Remarketing**: Stel remarketing campagnes op
4. **Custom Dimensions**: Voeg bedrijfsinformatie toe als custom dimensions 