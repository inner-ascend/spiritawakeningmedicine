# Spirit Awakening Medicine - Website Redesign Prompt
## Complete Implementation Instructions for Claude Code

---

## 🎯 PROJECT CONTEXT

You are tasked with completing the redesign of the Spirit Awakening Medicine website. This is a rebrand from "Astral Integration" to "Spirit Awakening Medicine" with a complete shift in focus from general spiritual work to **Bufo Alvarius (5-MeO-DMT) sacred medicine ceremonies**.

---

## 📍 WHAT'S ALREADY DONE

### ✅ Phase 1 Complete:
- Repository rebranded to "Spirit Awakening Medicine"
- All "Astral Integration" references updated to "Spirit Awakening Medicine"
- Domain updated to spiritawakeningmedicine.com (DNS pending)
- Email: hello@spiritawakeningmedicine.com
- Instagram: @spiritawakeningmedicine
- Git remote: https://github.com/inner-ascend/spiritawakeningmedicine.git

### ✅ Design System Updated:
- New earth-tone color palette in `tailwind.config.js`
- Colors shifted from cosmic purples → desert earth tones
- New color categories: `earth`, `desert`, `medicine`, `sacred`, `spirit`
- Backward compatible with old `cosmic`, `mystic`, `indigo` colors

### ✅ Translations:
- English (EN) - updated with new branding
- Spanish (ES) - updated with new branding
- Catalan (CA) - updated with new branding
- French (FR) - newly added

### ✅ Infrastructure:
- GitHub Pages deployed to: https://inner-ascend.github.io/spiritawakeningmedicine/
- GitHub Actions auto-deployment configured
- CNAME file configured for custom domain

---

## 📚 REFERENCE DOCUMENTS

**You have access to comprehensive research in:**
`REDESIGN_RESEARCH_FINDINGS.md` - Contains:
- Complete content analysis from 50+ source files
- Bufo Alvarius ceremony details, pricing, structure
- Client testimonials
- Facilitator credentials & Seri Tribe lineage
- Messaging guidelines and tone
- Who the work is for (and who it's NOT for)
- Application process and booking flow
- Integration philosophy
- All pricing structures
- Design direction and visual guidelines

**READ THIS FILE FIRST before making any changes.**

---

## 🎨 DESIGN DIRECTION

### **Color Palette (Already in tailwind.config.js):**

**Primary Earth Tones:**
- `earth-900` to `earth-500` - Deep browns, soil colors
- `desert-sand`, `desert-clay`, `desert-sage`, `desert-dusk` - Sonoran palette
- `medicine-toad`, `medicine-venom`, `medicine-smoke` - Natural medicine colors
- `sacred-gold`, `sacred-amber`, `sacred-white` - Sacred accents
- `spirit-deep`, `spirit-void`, `spirit-light` - Deep spiritual backgrounds

### **Typography:**
- Headings: Cormorant Garamond (serif) - already configured
- Body: Inter (sans-serif) - already configured
- Base size: 18px (increase from current 16px)
- Hero titles: 72-96px desktop, 48-60px mobile

### **Visual Style:**
- Earthy, grounded, natural
- Desert landscapes (Sonora, Mazunte)
- Nature photography (not cosmic/space)
- Minimalist, spacious layouts
- Subtle, slow animations (remove glowing/breathing effects)

### **What to REMOVE:**
- ❌ Cosmic purple gradients
- ❌ Space/galaxy imagery
- ❌ Geometric sacred geometry overlays
- ❌ Glowing/breathing animations
- ❌ "New age" aesthetic
- ❌ Language like "activation", "light codes", "ascension"

### **What to ADD:**
- ✅ Earth-tone gradients
- ✅ Desert/nature imagery
- ✅ Organic textures
- ✅ Clean whitespace
- ✅ Language like "dissolution", "surrender", "death and rebirth", "remembrance"

---

## 🏗️ WEBSITE STRUCTURE TO BUILD

### **New Page Architecture:**

1. **Homepage** (`/` - update existing LandingPage component)
   - Hero: "Open the Gates of Remembrance"
   - What is Bufo Alvarius section
   - Who this is for / Not for
   - Three-phase process (Preparation → Ceremony → Integration)
   - Seri Tribe lineage credibility
   - Testimonials
   - Pricing overview
   - CTA to private application

2. **About Page** (`/about` - update AboutPageNew.tsx)
   - Facilitator story & journey
   - Seri Tribe initiation in Sonora Desert
   - Training and credentials
   - Trauma-informed approach
   - Years of deep inner work
   - Guest speaker in facilitator programs
   - Personal medicine journey

3. **Bufo Ceremonies Page** (`/ceremonies` - NEW - create BufoCeremoniesPage.tsx)
   - What is Bufo Alvarius / 5-MeO-DMT
   - The experience (ego dissolution, non-dual consciousness)
   - Ceremony details (location, setting, duration)
   - Who it's for / contraindications
   - Preparation requirements
   - Integration included
   - Investment: €300-500 per person
   - Application process
   - Medical screening requirements

4. **Preparation Page** (`/preparation` - NEW - create PreparationPage.tsx)
   - Why preparation matters
   - What preparation includes
   - Emotional readiness assessment
   - Nervous system anchoring
   - Medical screening process
   - Contraindications list
   - Pre-ceremony practices
   - Investment: €111/session (1-2 sessions required)

5. **Integration Page** (`/integration` - NEW - create IntegrationPage.tsx)
   - Why integration is sacred ("Insight without integration is spiritual entertainment")
   - What integration includes
   - Post-ceremony support (within 48hrs)
   - Processing emotions and experiences
   - Embodiment practices
   - Life application
   - Integration packages:
     - Single session: €88-111
     - 4-session package: €300-400
     - Extended containers: 6-week, 3-month options

6. **Testimonials Page** (`/testimonials` - update existing or create new)
   - Client testimonials from REDESIGN_RESEARCH_FINDINGS.md
   - Focus on transformation, safety, deep healing
   - Include names (Holly, Jon, Nina, Matthew, Blanka, Hazel, etc.)

7. **FAQ & Safety Page** (`/faq` - NEW - create FAQPage.tsx)
   - Common questions about Bufo
   - Safety information
   - Contraindications
   - Medical disclaimer
   - What to expect
   - How it's different from other medicines

8. **Contact Page** (`/contact` - update existing ContactPage.tsx)
   - Private application process
   - Tally form embed: https://tally.so/r/mYXQVN
   - "This work is never sold. Only offered."
   - Contact info: astralamat@gmail.com
   - WhatsApp/Telegram: +34 611 14 41 70
   - Instagram: @spiritawakeningmedicine

### **Pages to REMOVE or SIMPLIFY:**
- `/inner-ascend` - Remove or drastically simplify
- `/retreats` - Merge into ceremonies page
- `/collaborations` - Remove
- `/resources` - Simplify or remove

---

## 📝 CONTENT GUIDELINES

### **Key Messaging:**

**Primary Headline Concepts:**
1. "Open the Gates of Remembrance"
2. "Die Before You Die"
3. "The Most Potent Entheogenic Compound on Earth"
4. "Ego Dissolution & Non-Dual Consciousness"
5. "Sacred Medicine of the Sonoran Desert"

**Core Positioning:**
- This is NOT promoted publicly - only for those who feel the call
- Application-based, discernment process
- Trauma-informed approach
- Seri Tribe lineage
- Small, intimate settings (2-4 people max)
- Preparation is mandatory
- Integration is non-negotiable
- Medical screening required
- Not for spiritual tourists

**Tone & Voice:**
- Direct, honest, no spiritual fluff
- Reverent but not flowery
- Grounded, embodied
- Clear boundaries ("this is NOT for...")
- Selective, discerning
- Slow, patient, unhurried
- Truth-telling, no bypassing

**Example Copy from Source:**

> "This is not an offering I promote publicly. If you are here, you've been guided, invited, or felt the call. The toad (Bufo Alvarius / 5-MeO-DMT) is not a psychedelic. It is a sacred teacher of death and pure remembrance. It is not for everyone, and it is not a shortcut. This path requires humility, surrender, and integration."

> "I have sat with the medicine. I have died, dissolved, returned, and broken again. I hold this work with reverence. If you feel called, let's walk slowly. This is sacred territory—not a service. Trust yourself."

### **Who This Is For:**

✅ Include:
- Those ready to die before they die
- Those who've done deep inner work
- Those seeking death of illusion, not an experience
- Those ready to surrender and integrate
- Seekers tired of seeking
- Those who can no longer pretend

❌ Explicitly Exclude:
- Those with untreated trauma or psychosis
- Spiritual tourists / peak-seekers
- Those expecting to be "fixed"
- Those refusing integration
- Those wanting quick fixes
- Recreational seekers

---

## 💰 PRICING STRUCTURE

**Display clearly and transparently:**

**Bufo Alvarius Ceremony:**
- €300-500 per person
- Includes: Pre-ceremony consultation, ceremony (2-4 people max), integration within 48hrs, 2-week follow-up
- Location: Mazunte, Oaxaca, Mexico
- Requirements: Health screening, preparation sessions

**Preparation Sessions:**
- €111 per session
- 1-2 sessions required before ceremony
- Online or in-person

**Integration Support:**
- Single session: €88-111 (sliding scale)
- 4-session package: €300-400
- Extended containers: 6-Week (€333-777), 3-Month (€888-1,111)

**Bufo Teacher Training:**
- €3,000-5,000
- 3-6 month apprenticeship
- For those called to become facilitators

**Accessibility:**
- Sliding scale available
- BIPOC and single parent discounts
- "No one is ever turned away for lack of funds when the call is genuine"

---

## 🔧 IMPLEMENTATION TASKS

### **Priority 1: Homepage Redesign**

**File:** `src/App.tsx` (LandingPage component)

**Update these sections:**

1. **Navigation Logo & Links:**
   - Change "Astral Integration" → "Spirit Awakening Medicine"
   - Update menu: About | Ceremonies | Preparation | Integration | Testimonials | FAQ | Contact

2. **Hero Section:**
   ```tsx
   Hero Title: "Spirit Awakening Medicine"
   Subtitle: "Open the Gates of Remembrance"
   Description: "The Sacred Medicine of Bufo Alvarius"
   Sub-description: "Ego Dissolution | Non-Dual Consciousness | Divine Remembrance"
   Note: "[Not for everyone. Only for those who feel the call.]"
   CTA: "Begin with Discernment" → links to /contact
   ```

3. **What is Bufo Section:**
   - Title: "The Sacred Medicine of Bufo Alvarius"
   - Content: Use copy from REDESIGN_RESEARCH_FINDINGS.md
   - Key points: Most potent entheogenic compound, ego dissolution, non-dual awareness, seconds to effect

4. **Who This Is For Section:**
   - Title: "This Medicine Is For..."
   - Include list of who it's FOR
   - Include list of who it's NOT for (equally important)

5. **Three-Phase Process:**
   - Preparation (🐚)
   - Ceremony (🔥)
   - Integration (🌿)
   - Visual flow showing progression

6. **Seri Lineage Section:**
   - Credibility marker
   - "Initiated by Seri Tribe elders in Sonora Desert, Mexico"
   - Years of training, trauma-informed approach

7. **Testimonials Carousel:**
   - Use 3-4 powerful testimonials from REDESIGN_RESEARCH_FINDINGS.md
   - Focus: Holly, Jon, Nina, Hazel

8. **Pricing Transparency:**
   - Clear pricing display
   - Ceremony: €300-500
   - Preparation: €111/session
   - Integration: €88-111 or €300-400 package

9. **CTA Section:**
   - "Ready to Begin?"
   - "This work is never sold. Only offered."
   - Link to application form

10. **Update Footer:**
    - Already updated with new branding
    - Verify all links work

### **Priority 2: Create New Pages**

**A. Bufo Ceremonies Page**
- **File:** Create `src/components/pages/BufoCeremoniesPage.tsx`
- **Structure:** Hero → What is Bufo → Experience → Details → Investment → Application
- **Use content from:** REDESIGN_RESEARCH_FINDINGS.md sections 1, 2, 4, 9

**B. Preparation Page**
- **File:** Create `src/components/pages/PreparationPage.tsx`
- **Structure:** Hero → Why Prep Matters → What's Included → Medical Screening → Investment
- **Use content from:** REDESIGN_RESEARCH_FINDINGS.md sections 4, 9, 13

**C. Integration Page**
- **File:** Create `src/components/pages/IntegrationPage.tsx`
- **Structure:** Hero → Why Integration → Packages → Extended Support → Book
- **Use content from:** REDESIGN_RESEARCH_FINDINGS.md sections 4, 10, 13

**D. FAQ Page**
- **File:** Create `src/components/pages/FAQPage.tsx`
- **Structure:** Common Questions → Safety → Contraindications → Medical Disclaimer
- **Use content from:** REDESIGN_RESEARCH_FINDINGS.md section 9

### **Priority 3: Update Existing Pages**

**A. About Page**
- **File:** `src/components/pages/AboutPageNew.tsx`
- **Focus:** Facilitator story, Seri initiation, credentials, approach
- **Use content from:** REDESIGN_RESEARCH_FINDINGS.md section 3

**B. Contact Page**
- **File:** `src/components/pages/ContactPage.tsx`
- **Already updated** with new email
- Add Tally form embed
- Add messaging about application process

**C. Update Routing**
- **File:** `src/App.tsx`
- Add routes for new pages:
  ```tsx
  <Route path="/ceremonies" element={<BufoCeremoniesPage />} />
  <Route path="/preparation" element={<PreparationPage />} />
  <Route path="/integration" element={<IntegrationPage />} />
  <Route path="/faq" element={<FAQPage />} />
  ```

### **Priority 4: Translation Updates**

**Files:**
- `src/translations/en.json`
- `src/translations/es.json`
- `src/translations/ca.json`
- `src/translations/fr.json`

**Update with Bufo-focused content:**
- Hero sections
- Navigation menu
- Page titles and descriptions
- Footer content

**Key translations needed:**
- "Bufo Alvarius Ceremonies"
- "Die Before You Die"
- "Ego Dissolution"
- "Non-Dual Consciousness"
- "Sacred Preparation"
- "Integration Support"
- "This work is never sold. Only offered."

### **Priority 5: Remove/Simplify Pages**

**Remove or drastically simplify:**
- InnerAscendPage.tsx
- RetreatsPage.tsx (merge into ceremonies)
- CollaborationsPage.tsx
- ResourcesPage.tsx

**Update routing** to remove these paths.

---

## 🎨 COMPONENT STYLING GUIDELINES

### **Use the New Color Palette:**

```tsx
// Dark backgrounds
bg-earth-900, bg-earth-800
bg-spirit-deep, bg-spirit-void

// Light backgrounds
bg-sacred-white, bg-sacred-cream
bg-medicine-venom

// Text colors
text-sacred-gold (headings, CTAs)
text-desert-sand, text-desert-clay (body text on dark)
text-earth-700, text-earth-800 (body text on light)

// Accents
border-desert-sage
bg-desert-clay
text-sacred-amber
```

### **Typography Examples:**

```tsx
// Hero titles
className="text-6xl md:text-8xl font-serif font-light text-sacred-white"

// Section headings
className="text-4xl md:text-5xl font-serif text-earth-800"

// Body text (increase from 16px to 18px base)
className="text-lg md:text-xl text-earth-700 leading-relaxed"

// CTAs
className="px-8 py-4 bg-sacred-gold text-earth-900 rounded-full hover:bg-sacred-amber transition-all text-lg font-medium"
```

### **Layout Spacing:**

```tsx
// Section spacing (more generous)
className="py-24 md:py-32"

// Content blocks
className="space-y-16"

// Elements
className="space-y-8"
```

---

## 📋 STEP-BY-STEP IMPLEMENTATION PLAN

### **Phase 1: Homepage (Do This First)**
1. Read REDESIGN_RESEARCH_FINDINGS.md thoroughly
2. Update App.tsx LandingPage component:
   - Change hero section
   - Add "What is Bufo" section
   - Add "Who this is for" section
   - Update three-phase process
   - Add Seri lineage section
   - Update testimonials
   - Add pricing section
3. Update Navigation menu
4. Test and deploy

### **Phase 2: New Pages**
1. Create BufoCeremoniesPage.tsx
2. Create PreparationPage.tsx
3. Create IntegrationPage.tsx
4. Create FAQPage.tsx
5. Add routes to App.tsx
6. Test all pages
7. Deploy

### **Phase 3: Update Existing Pages**
1. Update AboutPageNew.tsx
2. Verify ContactPage.tsx
3. Update ServicesPage.tsx or remove it
4. Update routing
5. Deploy

### **Phase 4: Translations**
1. Update en.json with all new content
2. Update es.json (Spanish is important - Mexico location)
3. Update fr.json
4. Update ca.json (or consider removing if not needed)
5. Test language switching
6. Deploy

### **Phase 5: Cleanup**
1. Remove unused pages
2. Remove unused components
3. Update .gitignore if needed
4. Clean up old color references
5. Final testing
6. Final deployment

---

## ⚠️ IMPORTANT NOTES

### **Content Sources:**
- ALL content is in `REDESIGN_RESEARCH_FINDINGS.md`
- Use exact copy from source materials where appropriate
- Maintain the reverent, grounded tone
- Don't make up pricing or details

### **Medical/Legal:**
- Always include medical disclaimers
- Always list contraindications clearly
- Always mention health screening requirement
- Include: "This work is not a substitute for medical or psychological treatment"

### **Application Process:**
- Link to Tally form: https://tally.so/r/mYXQVN
- Email: astralamat@gmail.com
- Never say "book now" - say "apply" or "begin with discernment"
- Emphasize it's application-based, not open enrollment

### **Locations:**
- Primary: Mazunte, Oaxaca, Mexico (ceremonies)
- Secondary: Barcelona, Spain (preparation/integration sessions)
- Mention both but emphasize Mazunte for ceremonies

### **Don't Promote Publicly:**
- Include messaging: "This is not an offering I promote publicly"
- "If you're here, you've been guided, invited, or felt the call"
- Maintains sacredness and filters out wrong fit

---

## 🚀 DEPLOYMENT

After making changes:

```bash
# Commit changes
git add .
git commit -m "Your descriptive message"

# Push to GitHub
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

Site will be live at:
- GitHub Pages: https://inner-ascend.github.io/spiritawakeningmedicine/
- Custom domain: https://spiritawakeningmedicine.com (once DNS is configured)

---

## ✅ SUCCESS CRITERIA

**You'll know the redesign is complete when:**

1. ✅ Homepage clearly focuses on Bufo Alvarius
2. ✅ Earth-tone color palette used throughout (no purples)
3. ✅ All new pages created (Ceremonies, Preparation, Integration, FAQ)
4. ✅ About page tells facilitator story & Seri lineage
5. ✅ Application process is clear
6. ✅ Pricing is transparent
7. ✅ Medical disclaimers and contraindications are visible
8. ✅ Tone is grounded, reverent, truth-telling
9. ✅ "Who it's NOT for" is as clear as "who it's for"
10. ✅ All "Astral Integration" references removed
11. ✅ Site feels earthy, natural, sacred (not cosmic/mystical)
12. ✅ Translation files updated for EN/ES/FR
13. ✅ Deployed and live

---

## 📞 CONTACT INFO TO USE

**Throughout the site, use:**
- Email: hello@spiritawakeningmedicine.com
- Application email: astralamat@gmail.com
- WhatsApp/Telegram: +34 611 14 41 70
- Instagram: @spiritawakeningmedicine
- Application form: https://tally.so/r/mYXQVN
- Location: Mazunte, Oaxaca, Mexico

---

## 💡 HELPFUL HINTS

1. **Start with the research doc** - Everything you need is in REDESIGN_RESEARCH_FINDINGS.md
2. **Read the existing code** - Color palette and structure are already set up
3. **Keep it simple** - More whitespace, less busy
4. **Use source copy** - Don't rewrite - use the authentic voice from source materials
5. **Test as you go** - Deploy frequently to see changes live
6. **Mobile-first** - Ensure responsive design works
7. **Accessibility** - Clear contrast, readable fonts, semantic HTML

---

## 🎯 YOUR MISSION

Transform this website from a general spiritual/cosmic offering into a **focused, grounded, reverent portal for Bufo Alvarius sacred medicine work**.

The site should feel like:
- Walking into a desert sanctuary
- Being held in sacred space
- Truth-telling without spiritual bypass
- Grounded in earth and nature
- Selective and discerning
- Honoring indigenous lineage
- Trauma-informed and safe

NOT like:
- A marketplace or spa
- New age cosmic fluff
- Spiritual tourism
- Quick fixes or shortcuts
- Open to everyone
- Commercialized or salesy

---

**Good luck! You have everything you need. Start with REDESIGN_RESEARCH_FINDINGS.md and work through the phases methodically.**

🌿 The medicine will guide the work.
