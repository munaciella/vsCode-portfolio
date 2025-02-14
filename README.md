# vscode-portfolio

A Visual Studio Code themed developer portfolio website built with Next.js and deployed on Vercel.

![vscode-portfolio screenshot](./public/Screenshot%202025-02-14%20at%2012.03.14.png)

---

## Features Roadmap

- **Themes and Customizations**
  - [x] GitHub Dark (default)
  - [ ] One Dark Pro
  - [x] Dracula
  - [x] Ayu
  - [x] Nord
- [ ] Interactive Custom Terminal

For other features and theme suggestions, please [open an issue](https://github.com/munaciella/vsCode-portfolio/issues).

---

## Environment Variables

To fetch your projects and github profile from github (or other services), create an `.env.local` file in the project directory with the github api token.

---

## Running the Development Server

Install dependencies and start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Project Structure
-	Components:

All VSCode-related components can be found in the components folder.

-	Pages:
The content of the portfolio is managed in the pages folder. To add or remove pages, modify components/Sidebar.jsx and components/Tabsbar.jsx.
