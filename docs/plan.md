# FlashLite - Flashcard Learning App

## Project Overview

FlashLite is a minimalist flashcard application focused on providing a distraction-free learning experience. The app emphasizes simplicity and effectiveness, helping users focus on what matters most: learning through flashcards.

### Target Audience

FlashLite is designed for:

- Students (high school and college) studying for exams
- Lifelong learners pursuing new knowledge
- Professionals learning new skills
- Anyone who wants to:
  - Memorize facts effectively
  - Learn new concepts
  - Optimize their learning experience
  - Study without distractions

## Functional Requirements

### User Management

- Users can create an account using email/password
- Users can sign in with Google
- Users can reset their password
- Users can manage their profile information

### Deck Management

- Users can view and organize their decks
  - See deck titles and card counts
  - Quick access to study any deck
  - Drag and drop to reorder decks
  - Pin decks to highlight them at the top
- Users can manage deck settings
  - Set or modify deck title
  - Toggle study reminders for each deck
- Users can create and edit decks
  - Add cards manually
    - Enter front content
    - Enter back content
    - Add cards one at a time
    - Preview cards before saving
  - Generate cards using AI
    - Enter a topic or concept
    - Specify number of cards to generate
    - Review and edit generated cards
    - Save selected cards to deck
  - Edit existing cards
    - Modify front content
    - Modify back content
    - Preview changes before saving
  - Remove cards from the deck
  - Reorder cards within the deck
- Users can start studying any deck
  - Begin a study session
  - See last study position
  - View cards due for review
- Users can delete decks

### Deck Analytics

- Users can track their learning progress
  - View study history
  - Track learning progress over time
  - See next recommended study time
  - Monitor cards in review queue
  - View encouraging progress messages
    - Fun, gamified text that reflects study performance
    - Updates based on recent study activity
    - Celebrates achievements and progress
    - Motivates continued study
  - Access additional learning metrics

## User Stories

### User Management

- As a new user, I want to create an account so I can start using the app
- As a user, I want to sign in with Google for convenience
- As a user, I want to reset my password if I forget it
- As a user, I want to manage my profile information

### Deck Management

- As a user, I want to see and organize all my decks
  - I want to see deck titles and how many cards they contain
  - I want to start studying any deck quickly
  - I want to organize my decks by dragging and dropping
  - I want to pin important decks to the top
- As a user, I want to manage my deck settings
  - I want to set or update the deck title
  - I want to toggle study reminders for each deck
- As a user, I want to create and edit my decks
  - I want to add cards manually by entering front and back content
  - I want to preview my cards before saving them
  - I want to generate cards using AI when I need help
  - I want to review and edit AI-generated cards before saving them
  - I want to modify existing cards
  - I want to remove cards I no longer need
  - I want to reorder cards within the deck
- As a user, I want to start studying any deck
  - I want to begin a study session
  - I want to see my last study position
  - I want to know which cards need review
- As a user, I want to delete decks I no longer need

### Deck Analytics

- As a user, I want to track my learning progress
  - I want to see my study history
  - I want to see how my learning has improved
  - I want to know when I should study next
  - I want to see how many cards need review
  - I want to see encouraging messages about my progress
  - I want to feel motivated by my learning journey

### Study Experience

- Users can study cards in a deck
  - Study interface hides all UI elements except essential controls
  - Cards are presented one at a time in full-screen mode
  - A minimal card counter shows progress (e.g., "10/20")
  - Cards flip with a smooth animation when tapped
  - Cards can be shuffled with a single button
  - Study session can be reset to initial state
  - Cards are marked as learned by swiping right
  - Cards are marked for review by swiping left
  - Swipe gestures have smooth animations
  - Cards marked for review are queued for future study
- Users can track their study progress
- Users can review their study history

### Pricing

- As a new user, I want to try the app for free to see if it meets my needs
- As a free user, I want to understand my usage limits
- As a free user, I want to easily upgrade to premium when I need more features
- As a premium user, I want to get the most value from my subscription
- As a user, I want to manage my subscription settings
- As a user, I want to cancel my subscription if I no longer need it

## Non-Functional Requirements

### Performance

- The app should load quickly
- Study sessions should be smooth and responsive
- Card transitions and animations should be fluid and performant
- The app should work offline
- Card flip and swipe animations should maintain 60fps
- Deck reordering should be smooth and responsive
- Statistics should update in real-time
- AI card generation should be reasonably fast

### Usability

- The interface should be clean and distraction-free
  - Study mode should hide all non-essential UI elements
  - Card counter should be minimal and unobtrusive
  - Card interactions should be intuitive and natural
  - Swipe gestures should be responsive and reliable
  - Card flip animation should be smooth and satisfying
  - Deck organization should be intuitive
  - Drag and drop should be smooth and reliable
  - Notifications should be manageable and non-intrusive
  - Progress messages should be encouraging but not distracting
  - AI card generation should be simple and intuitive
  - Card creation should be straightforward and efficient
  - Card preview should be clear and helpful
- The app should be intuitive to use
- The app should work well on different screen sizes
- The app should provide minimal, clear feedback for user actions

### Reliability

- User data should be saved automatically
- The app should recover gracefully from errors
- The app should maintain data consistency
- The app should handle network issues gracefully

### Security

- User data should be protected
- Authentication should be secure
- User sessions should be managed properly

## Future Considerations

These features may be considered in the future, but only if they can be implemented in a way that maintains the app's minimalist nature and enhances the core learning experience:

### Potential Features

- Basic spaced repetition (if it can be implemented without complexity)
- Simple study statistics (if they don't distract from learning)
- Minimal AI assistance (if it can be implemented without cluttering the interface)
- Basic study reminders (if they can be implemented without being intrusive)

## Pricing

### Free Tier ($0/month)

- Up to 3 decks
- Up to 100 cards per deck
- Basic study features
  - Card flipping
  - Swipe gestures
  - Progress tracking
  - Study history
- Limited AI features
  - 5 AI card generations per month
  - Basic prompt suggestions
- No media uploads
- Community support

### Premium Tier ($5/month)

- Unlimited decks
- Unlimited cards per deck
- All study features
  - Advanced progress analytics
  - Custom study schedules
  - Priority review queue
  - Detailed learning metrics
- Enhanced AI features
  - 50 AI card generations per month
  - Advanced prompt suggestions
  - AI-powered study recommendations
  - Custom AI prompt templates
- Media support
  - Image uploads for cards
  - Audio uploads for cards
  - Cloud storage for media
- Priority support
- Early access to new features
