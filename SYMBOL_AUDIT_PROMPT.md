# Visual Symbol Audit Prompt

## Objective
Verify that all pages have appropriate visual symbols that enhance clarity and hierarchy without cluttering the design. Ensure symbols match the CollaborationsPage reference standard.

---

## Symbol System Reference

### Hierarchical Symbol Usage
- **✧** (small star) = Categories/Types/Audience segments
- **✦** (large star) = Premium features/Credentials/Important highlights
- **◆** (filled diamond) = Key features/Beliefs/Service attributes
- **◈** (hollow diamond) = Clarity/Options/Choices
- **○ ◉ ⬢** = Tier progression (hollow → filled → hexagon)
- **◇** (hollow diamond small) = Practices/Activities/Session content
- **⊕** (circled plus) = Adding/Accessibility/Medical/Positive action
- **⊙** (circled dot) = Integration/Cycles/Continuous support
- **⊹** (asterisk) = Critical importance/Required items
- **⚛** (atom) = Modalities/Methods/Elements
- **△** (triangle) = Sacred/Direction/Container
- **×** (X mark) = Warnings/Contraindications/Boundaries

### Color Coordination Rules
- Match symbols to page accent color
- Use consistent color within each section
- Sacred-gold, desert-sage, ocean-turquoise, mineral-copper, sacred-purple, jungle-emerald, ocean-coral

### Don'ts
- ❌ No emoji (🏔️ ⚕️ 🧠 etc.)
- ❌ No generic bullets (•) where a semantic symbol fits better
- ❌ No more than 4-5 different symbol types per page
- ❌ Don't symbolize every single line item

---

## Audit Checklist Per Page

For each page, verify:

### ✅ Symbol Presence
- [ ] Lists have symbols (not generic •)
- [ ] Cards/boxes have header symbols
- [ ] Categories are visually marked
- [ ] Features/benefits are distinguished from categories

### ✅ Symbol Appropriateness
- [ ] Symbols match semantic meaning (✦ for premium, × for warnings, etc.)
- [ ] Tier levels use progression symbols (○ → ◉ → ⬢)
- [ ] Categories use ✧ (small star)
- [ ] Critical items use ⊹ (asterisk)

### ✅ Color Coordination
- [ ] Symbols match page accent color
- [ ] Consistent color within sections
- [ ] No color mismatches

### ✅ No Overuse
- [ ] Not every paragraph has a symbol
- [ ] Headers have symbols only when needed for hierarchy
- [ ] Text blocks without lists = no symbols needed
- [ ] Maximum 4-5 different symbol types per page

### ❌ Red Flags
- [ ] Check for remaining emoji
- [ ] Check for generic bullets (•) in feature lists
- [ ] Check for inconsistent symbol usage in similar sections
- [ ] Check for symbols that don't match the semantic meaning

---

## Page-by-Page Audit Instructions

### 1. AboutPage.tsx (OLD - DEPRECATED)
**Skip this file** - Should be deprecated in favor of AboutPageNew.tsx

---

### 2. AboutPageNew.tsx
**Expected Symbols:** ✦ for training/credentials (sacred-gold)

**Check:**
- [ ] Training & Approach cards (6 cards) - Should have ✦ symbols
- [ ] No symbols in narrative paragraphs (correct)
- [ ] CTA links - May have navigation symbols (◆)

**Symbol Count Target:** ~6-8 symbols total

---

### 3. BufoCeremoniesPage.tsx
**Expected Symbols:** ◆ for experience attributes (sacred-purple)

**Check:**
- [ ] "The Experience" attributes (4 items) - Should have ◆ symbols in sacred-purple
- [ ] "What's Included" list - Should have ✓ symbols
- [ ] "Who This Is For" list - Should have symbols (✓ or ◆)
- [ ] Contraindications - Should have × symbols
- [ ] Application process - Numbered (1-6) or ⊙ symbols

**Symbol Count Target:** ~25-35 symbols total

---

### 4. CollaborationsPage.tsx (REFERENCE STANDARD)
**Reference - Do Not Edit**

**Symbol Pattern:**
- ✧ for audience categories (3 cards)
- ✦ for what you provide/receive
- ✓ for benefits
- × for boundaries ("What We're NOT Looking For")

**This is the gold standard - all other pages should match this quality**

---

### 5. ContactPage.tsx
**Expected Symbols:** Process steps, benefits

**Check:**
- [ ] Application process steps - Should have numbered or ⊙ symbols
- [ ] Benefits of applying - Should have ✓ or ◆ symbols
- [ ] Contact method options - Should have ◈ symbols
- [ ] No overuse in form instructions

**Symbol Count Target:** ~10-15 symbols total

---

### 6. FAQPage.tsx
**Expected Symbols:** Safety protocol symbols (replaced emoji)

**Check:**
- [ ] Hero symbol - Should have ◈ (diamond for inquiry/clarity)
- [ ] Safety protocols (6 cards) - Should have ⊕ ◈ ○ △ ⊙ ✦ in sacred-gold
- [ ] NO EMOJI (⚕️ 🧠 🏔️ 🔄) - Should all be replaced
- [ ] Contraindications - Should have × symbols
- [ ] CTA - May have ✦ symbol

**Symbol Count Target:** ~15-20 symbols total

**Critical Check:** Verify ALL emoji have been removed!

---

### 7. InnerAscendPage.tsx
**Expected Symbols:** Tier levels, benefits

**Check:**
- [ ] Tier levels (Free/Core/Premium) - Should have ○ ◉ ⬢ progression
- [ ] Benefits per tier - Should have ✓ or ◆ symbols
- [ ] How it works - May have process symbols (⊙)
- [ ] Community features - Should have symbols

**Symbol Count Target:** ~15-25 symbols total

---

### 8. IntegrationPage.tsx
**Expected Symbols:** Service cards, modalities, triggers

**Check:**
- [ ] "What Integration Includes" cards (6 cards) - Should have ◈ in ocean-turquoise
- [ ] Integration modalities (6 types) - Should have ⚛ in ocean-turquoise
- [ ] "When to Seek" triggers (5 items) - Should have ⊕ in ocean-turquoise
- [ ] Package benefits - Should have ✓ symbols
- [ ] Color consistency - All ocean-turquoise

**Symbol Count Target:** ~25-30 symbols total

---

### 9. PreparationPage.tsx
**Expected Symbols:** Session markers, session content, critical items

**Check:**
- [ ] Session 1 header - Should have ○ in desert-sage (NOT emoji 1️⃣)
- [ ] Session 2 header - Should have ◉ in desert-sage (NOT emoji 2️⃣)
- [ ] Session content items - Should have ◇ in desert-sage
- [ ] Medical screening header - Should have ⊕ in desert-clay (NOT emoji ⚕️)
- [ ] Contraindications - Should have × symbols
- [ ] Days before ceremony - Should have ⊹ (critical importance)

**Symbol Count Target:** ~30-40 symbols total

**Critical Check:** Verify ALL emoji have been removed (1️⃣ 2️⃣ ⚕️)

---

### 10. PricingPage.tsx
**Expected Symbols:** Package tiers, service types, accessibility

**Check:**
- [ ] Essential Journey - Should have ○ in desert-sage (hollow circle)
- [ ] Complete Journey - Should have ◉ in mineral-copper (filled circle)
- [ ] Deep Work - Should have ⬢ in sacred-purple (hexagon)
- [ ] Preparation service - Should have ◇ in mineral-copper
- [ ] Ceremony service - Should have ✦ in mineral-copper
- [ ] Integration service - Should have ⊙ in mineral-copper
- [ ] Retreat categories - Should have ✧ (small star)
- [ ] Retreat features - Should have ✦ or ◆
- [ ] Sliding Scale items - Should have ⊕ in mineral-copper
- [ ] Payment methods - Should have ◈ in mineral-copper

**Symbol Count Target:** ~50-60 symbols total

**Critical Check:** Verify tier progression ○ → ◉ → ⬢ is consistent

---

### 11. ResourcesPage.tsx
**Expected Symbols:** Resource types, writings categories

**Check:**
- [ ] Resource categories - Should have symbols (◇ or ◈)
- [ ] Writing types - Should have symbols
- [ ] Benefits - Should have ✓ or ◆ symbols
- [ ] No overuse in paragraph text

**Symbol Count Target:** ~10-20 symbols total

---

### 12. RetreatsPage.tsx
**Expected Symbols:** Retreat features, collaboration types, categories

**Check:**
- [ ] Bufo Retreat features - Should have ✦ in ocean-coral (premium stars)
- [ ] Integration Intensive features - Should have ◆ in ocean-coral (diamonds for intensive)
- [ ] Collaboration offerings - Should have ⊕ in ocean-coral (adding collaboration)
- [ ] "Who We Collaborate With" categories (4 types) - Should have ✧ in ocean-coral
- [ ] Testimonials - May have symbols for service type

**Symbol Count Target:** ~20-30 symbols total

---

### 13. ServicesPage.tsx
**Expected Symbols:** Service types, benefits

**Check:**
- [ ] Each service type - Should have appropriate symbol
- [ ] Sacred circles - May have ○ or ⊙
- [ ] Medicine journeys - May have ✦
- [ ] Benefits per service - Should have symbols
- [ ] No overuse

**Symbol Count Target:** ~15-25 symbols total

---

### 14. TestimonialsPage.tsx
**Expected Symbols:** Navigation CTAs, testimonial categories

**Check:**
- [ ] Testimonial type labels - May have ✧ (small star) for category
- [ ] Navigation CTAs (2 links) - Should have ◆ in sacred-gold
- [ ] Quotation marks ❝ - Already present, keep as is
- [ ] No overuse

**Symbol Count Target:** ~5-10 symbols total

---

## Verification Process

### Step 1: Quick Scan
For each page file, do a quick search for:
```
Search: "•" (generic bullet)
Search: "emoji" or "🏔️" or "⚕️" or "1️⃣"
Search: Symbol usage patterns
```

### Step 2: Section-by-Section Review
Read through each major section:
- Hero (usually no symbols)
- Cards/Boxes (should have header symbols if they represent categories or features)
- Lists (should have semantic symbols, not generic •)
- CTAs (may have navigation symbols)
- Footer (no symbols needed)

### Step 3: Color Check
Verify symbols match page accent colors:
- AboutPageNew: sacred-gold
- BufoCeremoniesPage: sacred-purple
- FAQPage: jungle-sage/sacred-gold
- IntegrationPage: ocean-turquoise
- PreparationPage: desert-sage
- PricingPage: desert-sage, mineral-copper, sacred-purple (varies by tier)
- RetreatsPage: ocean-coral
- TestimonialsPage: ocean-turquoise, sacred-gold

### Step 4: Count Check
Count total symbols per page. If count is:
- **0-5:** Probably missing symbols where they should be
- **5-30:** Good range for most pages
- **30-60:** Good for complex pages like PricingPage
- **60+:** Probably overusing symbols, check for necessity

---

## Common Issues to Fix

### Issue 1: Emoji Still Present
**Find:** 🏔️ ⚕️ 🧠 🔄 1️⃣ 2️⃣
**Replace with:** Appropriate geometric symbols (⊕ ◈ ○ △ ⊙ ✦)

### Issue 2: Generic Bullets in Feature Lists
**Find:** "• Feature name"
**Replace with:** "◆ Feature name" or "✦ Feature name" (depending on context)

### Issue 3: Inconsistent Colors
**Find:** Mixed symbol colors within same section
**Fix:** Use one consistent color per section (match page accent)

### Issue 4: No Symbols Where Needed
**Find:** Lists without any visual markers
**Add:** Appropriate semantic symbols based on list content

### Issue 5: Over-Symbolization
**Find:** Every single line has a symbol, including paragraphs
**Fix:** Remove symbols from narrative text, keep only for lists/cards/categories

---

## Output Format

For each page audited, provide:

### PageName.tsx - Score: X/10

**Symbol Audit Results:**
- ✅ Symbols present: Yes/No
- ✅ Appropriate semantic use: Yes/No
- ✅ Color coordination: Yes/No
- ✅ No overuse: Yes/No
- ❌ Issues found: [List any issues]

**Symbol Count:** X symbols (target: Y-Z)

**Changes Needed:**
1. [Specific change at line X]
2. [Specific change at line Y]

**Status:** ✅ Pass / ⚠️ Minor fixes needed / ❌ Major fixes needed

---

## Final Checklist

After auditing all pages:

- [ ] No emoji remain (🏔️ ⚕️ 🧠 🔄 1️⃣ 2️⃣)
- [ ] No generic bullets (•) in feature/benefit lists
- [ ] Symbol hierarchy is consistent across pages
- [ ] Colors are coordinated to page themes
- [ ] No pages are over-symbolized (60+ symbols unless justified)
- [ ] All tier progressions use ○ → ◉ → ⬢
- [ ] All categories use ✧ (small star)
- [ ] All warnings use × (X mark)
- [ ] All premium features use ✦ (large star)
- [ ] All critical items use ⊹ (asterisk)

---

## Success Criteria

**Overall Success = All pages score 8+/10 with:**
- Consistent symbol hierarchy
- Appropriate semantic meaning
- Color coordination
- No emoji
- No generic bullets in semantic lists
- Balanced symbol usage (not overdone, not missing)

---

**Document Version:** 1.0
**Created:** 2025-11-01
**Purpose:** Comprehensive symbol audit to ensure consistency and quality across all pages
