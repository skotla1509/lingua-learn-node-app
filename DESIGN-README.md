
# Language Learning App - Design Overview

## Table of Contents
1. [Introduction](#introduction)
2. [Features Overview](#features-overview)
3. [Application Workflow](#application-workflow)
4. [Screens Overview](#screens-overview)
    - [Home](#home)
    - [Login](#login)
    - [Register](#register)
    - [Learn Language](#learn-language)
    - [Flashcards](#flashcards)
    - [Practice](#practice)
5. [Conceptual and Logical Diagrams](#conceptual-and-logical-diagrams)

---

## Introduction

The Language Learning App is a user-friendly platform designed to assist users in acquiring and practicing new languages effectively. Inspired by modern educational tools, the app leverages **flashcards**, **practice exercises**, and **language exchange posts** to make learning interactive and engaging. 

The frontend React application connects seamlessly with a Node.js backend, which in turn manages the MySQL database.

---

## Features Overview

The app provides the following core features:
- **Flashcards**: Interactive flashcards to learn vocabulary, phrases, and grammar.
- **Practice Exercises**: Assess your knowledge through multiple-choice questions, fill-in-the-blank exercises, and true/false questions.
- **Language Exchange**: Post and interact with content in your target language.
- **Feedback System**: Submit and view feedback on flashcard decks.
- **Responsive Design**: Optimized for devices of all sizes using Bootstrap.

---

## Application Workflow

1. **Guest Mode**:
   - Users can explore the app, view available features, and decide to register or log in.

2. **Authentication**:
   - Users register or log in to access personalized features.
   - Authenticated users can view their progress, practice decks, and contribute to language exchange posts.

3. **Learning Features**:
   - Users choose a language to learn, select a deck, and interact with flashcards.
   - Practice sessions evaluate user knowledge and provide feedback.

4. **Profile Management**:
   - Users can track their learning progress, and view their favorite decks.

---

## Screens Overview

### 1. Home
- **Purpose**: Provides an overview of the application and invites users to explore or sign up.
- **Key Features**:
  - Introduction to the app.
  - Navigation options for login and registration.
- **Route**: `/` or `/home`

![image](https://github.com/user-attachments/assets/9f3b4b98-603e-4cc7-a8a5-9005647eca38)


---

### 2. Login
- **Purpose**: Allows existing users to access their accounts.
- **Key Features**:
  - Input fields for username and password.
  - Error messages for invalid credentials.
  - Password reset
- **Route**: `/login`

![image](https://github.com/user-attachments/assets/ccd58122-3483-4671-a9c8-bf13ba0a7696)
![image](https://github.com/user-attachments/assets/961bcbbc-7f13-4fb4-92d7-8610d38d055f)


---

### 3. Register
- **Purpose**: Enables new users to create an account.
- **Key Features**:
  - Input fields for personal details (e.g., name, email, password).
  - Error messages for invalid credentials.
- **Route**: `/register`

![image](https://github.com/user-attachments/assets/c4bd0648-3843-4e70-b8b8-1a81d05af7d9)

---

### 4. Learn Language
- **Purpose**: Displays the available flashcard decks for a selected language.
- **Key Features**:
  - List of flashcard decks with names and descriptions.
  - Option to select a deck for further interaction.
  - Create a Language Exchange Post to interact with other users learning the same language.
- **Route**: `/learn/language`

![image](https://github.com/user-attachments/assets/1767df36-b0cd-4a25-afc2-1ed35bd18b13)


---

### 5. Flashcards
- **Purpose**: Allows users to learn using interactive flashcards.
- **Key Features**:
  - Front and back views of all flashcards in the deck.
  - Option to Mark Deck as Favorite.
  - Option to Practice this Deck after learning.
  - Interact with the Deck by Rating and Giving Feedback.
- **Route**: `/learn/language/cards`

![image](https://github.com/user-attachments/assets/82b546eb-3342-499a-b0aa-cbb6c9bde0d1)
![image](https://github.com/user-attachments/assets/df80f02d-5d2d-44e6-8227-05bf6568c01f)


---

### 6. Practice
- **Purpose**: Provides a quiz-like environment to assess user knowledge.
- **Key Features**:
  - Multiple-choice questions, fill-in-the-blank, and true/false questions.
  - Real-time feedback on answers.
  - A score summary at the end of the session.
- **Route**: `/learn/language/practice`

---
