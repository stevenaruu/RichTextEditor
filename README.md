# React-based Rich Text Editor

## Overview
This documentation provides an overview of the React‑based rich editor preset implemented with modern web technologies. The project leverages a powerful stack designed for speed, type safety, and seamless editing functionality. The rich editor preset is built to offer a complete content management experience within a React application. It allows users to perform all core CRUD operations—read, create, update, and delete editor content—while ensuring high performance and an intuitive user interface.

## Technology Stack
1. **React (Vite SWC):** The core framework for the application.
3. **TypeScript:** For robust type safety.
4. **Tiptap:** Powers the rich text editing functionality. 
5. **Tailwind CSS:** Ensures rapid, responsive styling.
6. **shadcdn:** Manages components and assets delivery.

## Key of Features
1. Rich Editor Initialization:
   - Initializes a Tiptap editor that supports text formatting options such as Bold, Italic, and Underline.
   - Provides multiple heading options (h1, h2, h3) along with bullet and numbered lists, all implemented within a customizable toolbar
2. Content Persistence:  
    - Integrates with localStorage and react‑redux for saving, reading, and updating the editor’s state in HTML format.  
    - Supports reinitialization of the editor from the serialized state.
3. Custom Enhancements:  
    - Implements a custom “Highlight” block that applies a custom color to selected text, accessible via the toolbar.
4. User Experience Improvements:  
    - Includes keyboard shortcuts (e.g., Ctrl+B, Ctrl+I, Ctrl+U) to streamline editing.  
    - Features a responsive UI that updates in real-time as the user types or applies formatting.
5. Design Approach:  
    - Adopts Atomic Design principles to ensure a scalable and maintainable code structure.

## Getting started
This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

## Prerequisites
- [Node.js](https://nodejs.org/en/) (v18 or later)

## Installation
1. Clone this repository:
```bash
git clone https://github.com/stevenaruu/RichTextEditor.git
```

2. Navigate to the project directory:
```bash
cd RichTextEditor
```

3. Install dependencies
```bash
npm install
```

4. Start the program
```bash
npm run dev
```
