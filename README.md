# Kukuru - URL Shortener

Kukuru is a simple and efficient URL shortening service built with Vite, React, React Router DOM, TypeScript, and Tailwind CSS. This application allows users to shorten long URLs and easily manage them.
live deployment is at https://kekere.vercel.app/

## Features

- Shorten long URLs into compact, shareable links.
- Store shortened URLs locally for quick access.
- Automatically detect and skip already shortened URLs.
- Copy shortened URLs to the clipboard with a single click.
- View and manage all shortened URLs in a user-friendly interface.

## Tech Stack

- **Vite**: A fast build tool and development server.
- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: For routing and navigation in the application.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Store2**: A lightweight local storage library for managing persistent data.
- **vitest**: Next Generation Testing Framework.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kukuru.git
   cd kukuru
   ```
2. Install dependencies:

```bash
yarn
```

3. Start the development server:

```bash
yarn dev
```

4. Open your browser and navigate to http://localhost:5173 to view the application.

Usage
Enter a long URL in the input field and click the "Shorten now!" button.
The shortened URL will be displayed along with the original URL.
You can copy the shortened URL or delete it if no longer needed.
