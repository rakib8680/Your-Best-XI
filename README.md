# 🏏 BPL Dream 11 — Build Your Ultimate Cricket Team

A fun, interactive cricket team builder where you assemble your dream squad of 11 players within a given budget. Built with React 19 and styled with Tailwind CSS 4 + DaisyUI.

## 🔗 Live Demo

🌐 [BPL Dream 11](https://bpl-dream-xi-alpha.vercel.app)

## ✨ Features

- **Player Selection** — Browse a roster of 12 international cricket players and pick up to 6 for your squad.
- **Budget Management** — Start with 9,000,000 coins. Each player costs differently — plan wisely!
- **Smart Validations** — Prevents duplicate selections, exceeding squad limit, or overspending budget.
- **Toast Notifications** — Rich toast alerts (via Sonner) for every interaction: selection, removal, errors, and budget refunds.
- **Double Toast on Removal** — Removing a player shows both a removal confirmation and a budget refund notification.
- **Toggle View** — Switch between "Available Players" and "Selected Players" tabs.
- **Skeleton Loading** — Suspense-based loading skeletons while player data is fetched.
- **Newsletter Subscription** — A beautiful gradient newsletter card overlapping the footer.
- **Responsive Design** — Fully responsive layout across desktop, tablet, and mobile.

## 🛠️ Tech Stack

| Technology         | Purpose                                |
| ------------------ | -------------------------------------- |
| **React 19**       | UI framework with hooks & Suspense     |
| **Vite 7**         | Lightning-fast build tool & dev server |
| **Tailwind CSS 4** | Utility-first CSS framework            |
| **DaisyUI 5**      | Tailwind component library             |
| **Sonner**         | Toast notification system              |

## 📁 Project Structure

```
src/
├── assets/                  # Images & static assets
│   ├── banner-main.png
│   ├── bg-shadow.png
│   ├── logo.png
│   └── logo-footer.png
├── components/
│   ├── Footer/
│   │   ├── Footer.jsx       # Footer with links & subscribe
│   │   └── NewsletterCard.jsx # Gradient newsletter section
│   ├── Players/
│   │   ├── AvailablePlayers.jsx   # Grid of available players
│   │   ├── SelectedPlayers.jsx    # Selected squad list
│   │   ├── SinglePlayer.jsx       # Individual player card
│   │   └── PlayerCardsSkeleton.jsx # Loading skeleton
│   ├── Hero.jsx              # Hero banner section
│   └── Navbar.jsx            # Top navigation with budget
├── App.jsx                   # Main app with state & logic
├── main.jsx                  # Entry point with Toaster
└── index.css                 # Global styles
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/rakib8680/BPL-Dream-11.git

# Navigate to the project
cd BPL-Dream-11

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📬 Contact

Made with ❤️ by **Rakib**
