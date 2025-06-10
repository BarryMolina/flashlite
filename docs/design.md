# FlashLite UI Design Document

## Layout Structure

### Dashboard

- Primary "Study Now" button (black background)
  - Roulette-style vertical slider for deck selection
  - Arrow indicator pointing to selected deck
  - Decks ordered by study priority
  - Smooth drag interaction for deck selection
- Secondary "Create Deck" button (white outline)
  - Positioned below or beside primary button
  - Lower visual hierarchy
  - Maintains clean layout
- Minimal, clean layout with ample white space
- Responsive design that adapts to viewport size

### Sidebar Navigation

- Fixed position on desktop, slide-out on mobile
- Logo positioned at top
- Deck list with drag-and-drop reordering
- Single action button:
  - "New Deck" (opens creation modal)
- Notification toggles for each deck
- Hamburger menu trigger on mobile (top-left)

### Study Mode

- Full-viewport experience
- Zero distractions
- Card-centered layout
- Minimal progress indicator
- Keyboard shortcut hints (first-time users)

## Core Components

### Study Now Button & Selector

- Large, prominent button
- Integrated vertical deck selector
- Visual arrow indicator
- Smooth animation for deck switching
- Clear visual hierarchy for selected deck
- Study priority indicators

### Deck List Item

- Clean, minimal design
- Drag handle for reordering
- Notification toggle
- Deck title
- Subtle study status indicator
- Hover states for interaction

### Card Component

- Full-viewport presentation
- Clean typography
- Smooth flip animation
- Progress indicator
- Keyboard shortcut hints
- Swipe gesture support

### Deck Creation Modal

- Clean, focused interface for creating new decks
- Single-view design with all cards visible
- Components from top to bottom:
  1. Deck Title Input
     - Prominent text field
     - Clear placeholder text
  2. AI Generation Section (optional)
     - Text input for AI prompt
     - Generate button
     - Generated cards appear in the list below
  3. Cards List
     - Scrollable container
     - Each card form includes:
       - Front text input
       - Back text input
       - Drag handle for reordering
       - Delete option (X icon or swipe)
     - Cards are always editable
     - No individual save buttons
     - Visual separation between cards
     - Subtle hover states
  4. Add Card Button
     - Fixed at bottom of list
     - Adds new card form to list
     - Smooth animation for new card appearance
- Modal Features:
  - Clear, prominent close button
  - Save Deck button (saves all cards)
  - Keyboard shortcuts:
    - Esc: Close modal
    - Tab: Navigate between inputs
    - Enter: Add new card
  - Responsive design
  - Auto-save draft
  - Clear success/error states

### Card Creation Interface

- Minimalist list-based design
- Each card form:
  - Front/Back text inputs
  - Drag handle for reordering
  - Delete option:
    - X icon in top-right corner
    - OR swipe-to-delete gesture
  - Subtle visual separation
  - Compact but readable layout
- List Features:
  - Smooth scrolling
  - Drag and drop reordering
  - Visual feedback during drag
  - Maintains scroll position during edits
  - Responsive to viewport size
- Card Form Features:
  - Auto-expanding text inputs
  - Character count (optional)
  - Validation indicators
  - Focus states
  - Hover states for interactive elements
- Mobile Considerations:
  - Touch-friendly input areas
  - Swipe gestures for deletion
  - Responsive spacing
  - Bottom-safe-area consideration
- Desktop Considerations:
  - Keyboard navigation
  - Drag and drop optimization
  - Hover states
  - Larger touch targets

## Interaction Patterns

### Deck Selection

- Drag-to-select in roulette style
- Click/tap to select deck
- Smooth animation for selection changes
- Visual feedback for selection

### Study Mode Navigation

- Space bar: Flip card
- Right arrow/Right swipe: Mark as learned
- Left arrow/Left swipe: Mark for review
- Escape: Exit study mode
- Visual hints for keyboard shortcuts

### Sidebar Interactions

- Drag and drop deck reordering
- Toggle notifications
- Smooth slide-out animation on mobile
- Persistent on desktop

## Visual Design Elements & Color Scheme

### Primary Colors

- White (#FFFFFF) - Background
- Black (#000000) - Text and primary elements
- Gray (#E5E5E5) - Secondary elements
- Accent Gray (#666666) - Interactive elements

### Dark Mode Colors

- Dark Gray (#1A1A1A) - Background
- White (#FFFFFF) - Text and primary elements
- Light Gray (#333333) - Secondary elements
- Accent Gray (#999999) - Interactive elements

### Visual Elements

- High contrast design
- Minimal shadows for depth
- Subtle animations for state changes
- Clear visual hierarchy
- Consistent spacing system

### Button Styles

- Primary Button (Study Now)
  - Black background (#000000)
  - White text (#FFFFFF)
  - Prominent size and position
  - High contrast for emphasis
- Secondary Button (Create Deck)
  - White background
  - Black outline (1px)
  - Black text
  - Slightly smaller than primary
  - Maintains visual hierarchy

## Mobile, Web App, Desktop Considerations

### Mobile

- Hamburger menu for sidebar
- Touch-optimized interactions
- Swipe gestures for cards
- Responsive typography
- Bottom-safe-area consideration

### Desktop

- Persistent sidebar
- Keyboard-first navigation
- Hover states
- Drag-and-drop optimization
- Larger touch targets

### Web App

- PWA capabilities
- Offline support
- Responsive design
- Cross-browser compatibility
- Performance optimization

## Typography

### Primary Font

- System font stack for optimal performance
- Sans-serif for clean, modern look
- Clear hierarchy with distinct sizes

### Font Sizes

- Heading 1: 24px
- Heading 2: 20px
- Body: 16px
- Small text: 14px
- Button text: 16px

### Font Weights

- Regular: 400
- Medium: 500
- Bold: 700

## Accessibility

### Keyboard Navigation

- Full keyboard support
- Clear focus states
- Logical tab order
- Keyboard shortcuts for study mode

### Screen Reader Support

- ARIA labels
- Semantic HTML
- Clear content hierarchy
- Descriptive alt text

### Color & Contrast

- WCAG 2.1 AA compliance
- High contrast mode support
- Clear visual indicators
- Non-color-dependent interactions

### Motion & Animation

- Reduced motion support
- Smooth transitions
- Clear state changes
- Non-distracting animations
