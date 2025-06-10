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

### Deck Management

- Users can create new flashcard decks
- Users can edit existing decks
- Users can delete decks
- Users can organize their decks
  - Drag and drop to reorder decks
  - Pin decks to highlight them at the top
  - Toggle study reminders for each deck

### Deck View

- Users can access a detailed deck view
  - Edit deck title
  - View total card count
  - Manage deck notifications
  - View encouraging progress message
    - Fun, gamified text that reflects study performance
    - Updates based on recent study activity
    - Celebrates achievements and progress
    - Motivates continued study
- Users can manage cards within a deck
  - View all cards in the deck
  - Add new cards
    - Manual card creation
    - AI-assisted card generation from prompts
  - Remove cards
- Users can view deck statistics
  - Study history
  - Learning progress over time
  - Next study time
  - Number of cards in review queue
  - Additional metrics (to be defined with spaced learning algorithm)

### Card Management

- Users can add cards to decks
- Users can edit cards
- Users can delete cards
- Users can reorder cards within a deck

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

## User Stories

### Authentication

- As a new user, I want to create an account so I can start using the app
- As a user, I want to sign in with Google for convenience
- As a user, I want to reset my password if I forget it

### Deck Management

- As a user, I want to create a new deck to organize my study materials
- As a user, I want to edit my decks to keep them up to date
- As a user, I want to organize my decks
  - I want to drag and drop decks to reorder them
  - I want to pin important decks to the top
  - I want to toggle study reminders for each deck

### Deck View

- As a user, I want to manage my deck details
  - I want to edit the deck title
  - I want to see how many cards are in the deck
  - I want to manage study reminders for this deck
  - I want to see encouraging messages about my progress
- As a user, I want to manage the cards in my deck
  - I want to see all cards in the deck
  - I want to add new cards manually
  - I want to generate cards using AI prompts
  - I want to remove cards
- As a user, I want to track my progress with this deck
  - I want to see my study history
  - I want to see how my learning has improved
  - I want to know when I should study next
  - I want to see how many cards need review
  - I want to feel motivated by my progress

### Study Experience

- As a user, I want to study my cards to learn the material
  - I want to focus solely on the current card without distractions
  - I want to know how many cards I have left to study
  - I want to flip cards with a satisfying animation
  - I want to shuffle my deck when I need to
  - I want to reset my study session to start over
  - I want to mark cards as learned by swiping right
  - I want to mark cards for review by swiping left
  - I want smooth animations for all card interactions
- As a user, I want to track my progress to see how I'm improving
- As a user, I want to review my study history to identify areas for improvement

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
