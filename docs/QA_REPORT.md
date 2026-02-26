# QA Report
## Project: Inbal Photography
## Date: 2026-02-23
## Reviewed By: QA Engineer (AI)

### Summary
| Severity | Count |
|----------|-------|
| 🔴 Critical | 0 |
| 🟡 Major    | 1 |
| 🟢 Minor    | 4 |
| 💡 Suggestion | 2 |

---

### Findings

#### BUG-001: Nav order inconsistency between Desktop and Mobile
- **Severity**: 🟢 Minor
- **Description**: Desktop Header has nav order: מחירון, מי אני, תיק עבודות, דף בית (pricing→home). Mobile Menu has: דף בית, תיק עבודות, מי אני, מחירון (home→pricing).
- **File**: `src/components/layout/Header.tsx:29-34` vs `src/components/layout/MobileMenu.tsx:43-48`
- **Suggested Fix**: Align both to use the same order for consistency

#### BUG-002: Hero scroll button has incorrect aria-label
- **Severity**: 🟢 Minor
- **Description**: The scroll-down arrow button uses `t('contact')` as aria-label, but it scrolls to portfolio section, not contact.
- **File**: `src/components/sections/Hero.tsx:57`
- **Suggested Fix**: Change to proper label like "Scroll to portfolio" or create a dedicated translation key

#### BUG-003: Portfolio grid uses native `<img>` instead of Next.js Image
- **Severity**: 🟡 Major (Performance)
- **Description**: PortfolioGrid uses native `<img>` tags which bypasses Next.js image optimization. This was intentionally done for performance testing but should be reviewed.
- **File**: `src/components/portfolio/PortfolioGrid.tsx:40`
- **Build Warning**: `@next/next/no-img-element`
- **Suggested Fix**: Consider using Next.js Image with proper sizing, or suppress the ESLint warning if intentional

#### BUG-004: Unused `isRTL` variable in WhatsAppButton
- **Severity**: 🟢 Minor
- **Description**: The `isRTL` variable is defined but only used for positioning. The positioning logic is correct.
- **File**: `src/components/ui/WhatsAppButton.tsx:11`
- **Status**: Not a bug, just noting the variable is correctly used

#### BUG-005: Missing error boundaries
- **Severity**: 🟢 Minor
- **Description**: No error boundaries exist for graceful error handling if components fail to load
- **Suggested Fix**: Add error.tsx files for error handling (nice-to-have for V2)

---

### Suggestions

#### SUGGESTION-001: Add loading states for images
- **Description**: Portfolio and other image-heavy pages could benefit from skeleton loaders
- **Priority**: Low - images already have lazy loading

#### SUGGESTION-002: Consider preloading critical fonts
- **Description**: Font files could be preloaded for faster first contentful paint
- **Priority**: Low - current performance is acceptable

---

### Positive Findings ✅

1. **RTL Support**: Excellent RTL support throughout - Hebrew content displays correctly
2. **Mobile Responsiveness**: Good responsive design, mobile menu works well
3. **Accessibility**: Proper aria-labels on interactive elements
4. **Keyboard Navigation**: Lightbox supports keyboard navigation (Escape, Arrow keys)
5. **Touch Support**: Lightbox supports swipe gestures for mobile
6. **Loading States**: Lightbox has loading spinner for images
7. **WhatsApp Integration**: Correct phone number format, proper URL encoding
8. **Instagram Link**: Updated to correct URL

---

### Build Status
- ✅ Build passes successfully
- ⚠️ 1 ESLint warning (native img element)
- ✅ TypeScript: No type errors

### Recommendations

1. **Before Production**: Fix the aria-label on Hero scroll button (BUG-002)
2. **Nice-to-have**: Consider reverting Portfolio images to Next.js Image component for better optimization
3. **Nice-to-have**: Align mobile and desktop nav order for consistency
