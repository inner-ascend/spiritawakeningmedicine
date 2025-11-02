# Symbol Verification Audit - Quick Check

## Task
Audit all page files to verify visual symbols are:
1. **Present where needed** (feature lists, categories, tiers)
2. **Not overdone** (no symbols in narrative paragraphs)
3. **Semantically correct** (right symbol for the content type)
4. **Color coordinated** (matches page accent color)
5. **Consistent with CollaborationsPage** (reference standard)

---

## Quick Reference: Symbol Meanings

- **✧** = Categories/Types
- **✦** = Premium features/Highlights
- **◆** = Key features/Beliefs
- **◈** = Options/Choices
- **○ ◉ ⬢** = Tier progression (basic→complete→premium)
- **◇** = Practices/Activities
- **⊕** = Adding/Accessibility/Medical
- **⊙** = Integration/Cycles
- **⊹** = Critical/Required
- **⚛** = Modalities/Methods
- **△** = Sacred/Direction
- **×** = Warnings/Boundaries

---

## Pages to Check

Read each file and verify:

### 1. CollaborationsPage.tsx (REFERENCE - Don't change)
- Just confirm it has the pattern we're matching

### 2. AboutPageNew.tsx
**Expected:** ~6 training cards with ✦ in sacred-gold
**Check:** Symbols only on training cards, not in narrative text

### 3. AboutPage.tsx (old)
**Expected:** Should be deprecated - check if still in use

### 4. BufoCeremoniesPage.tsx
**Expected:** ◆ for experience attributes (4 items) in sacred-purple
**Check:** Not overused, only on key attribute lists

### 5. ContactPage.tsx
**Check:** Process steps or benefits may have symbols, but not overdone

### 6. FAQPage.tsx
**Expected:** 6 safety protocol cards with ⊕ ◈ ○ △ ⊙ ✦ in sacred-gold
**Critical:** NO EMOJI (🏔️ ⚕️ 🧠 🔄) - must all be geometric symbols

### 7. InnerAscendPage.tsx
**Expected:** Tier symbols ○ ◉ ⬢ for Free/Core/Premium
**Check:** Benefits lists have symbols but not excessive

### 8. IntegrationPage.tsx
**Expected:**
- 6 service cards with ◈
- 6 modalities with ⚛
- 5 triggers with ⊕
**All in ocean-turquoise**

### 9. PreparationPage.tsx
**Expected:**
- Session 1: ○ in desert-sage (NOT emoji 1️⃣)
- Session 2: ◉ in desert-sage (NOT emoji 2️⃣)
- Session content: ◇
- Medical: ⊕ (NOT emoji ⚕️)
- Critical items: ⊹
**Critical:** NO EMOJI

### 10. PricingPage.tsx
**Expected:**
- Essential: ○ (desert-sage)
- Complete: ◉ (mineral-copper)
- Deep Work: ⬢ (sacred-purple)
- Services: ◇ ✦ ⊙ (by type)
- Retreats: ✧ for categories, ✦/◆ for features
- Accessibility: ⊕ and ◈
**Check:** Clear tier progression, not overused

### 11. ResourcesPage.tsx
**Check:** Symbols on resource categories/types, not excessive

### 12. RetreatsPage.tsx
**Expected:**
- Bufo features: ✦ (premium)
- Integration features: ◆ (intensive)
- Collaboration: ⊕
- Categories: ✧ (4 types)
**All in ocean-coral**

### 13. ServicesPage.tsx
**Check:** Each service type has appropriate symbols

### 14. TestimonialsPage.tsx
**Expected:** Minimal - maybe ◆ on navigation links
**Check:** Quotation marks ❝ are fine, keep those

---

## For Each Page Report:

**PageName.tsx**
- ✅/❌ Symbols present where needed
- ✅/❌ No overuse (narrative text is clean)
- ✅/❌ Correct semantic symbols
- ✅/❌ Color coordinated
- ✅/❌ No emoji remaining
- Count: X symbols (Good/Too many/Too few)
- Issues: [List specific problems or "None"]

---

## Red Flags to Report Immediately

1. **Emoji found** (🏔️ ⚕️ 🧠 🔄 1️⃣ 2️⃣)
2. **Generic bullets** (•) in feature/benefit lists
3. **Symbols in paragraph text** (narrative content shouldn't have symbols)
4. **Wrong symbol for meaning** (using ✦ for warnings, × for features, etc.)
5. **Mismatched colors** (symbols don't match page accent color)
6. **60+ symbols on one page** (likely overdone unless it's PricingPage)

---

## Success = Pass All Pages

All pages should:
- Have symbols ONLY where they add clarity (lists, categories, tiers, features)
- Have NO symbols in narrative paragraphs
- Use semantic symbols (meaning matches content)
- Match colors to page theme
- Have zero emoji
