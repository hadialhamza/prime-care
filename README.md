# PrimeCare - Trusted Care Service Booking Platform

PrimeCare is a modern, full-stack web application designed to connect families with trusted caregivers. Whether it's baby care, elderly companionship, or specialized sick care, PrimeCare offers a seamless booking experience with verified professionals.

![PrimeCare Preview](https://i.ibb.co.com/ycPCDS7z/Home-page.png)

## 🚀 Key Features

- **Service Booking**: Browse and book services for Baby Care, Elderly Care, and Sick Care.
- **User Authentication**: Secure login and registration powered by **NextAuth.js**.
- **Dashboard**: Manage your bookings and view status updates.
- **Responsive Design**: Fully responsive UI built with **Tailwind CSS** and **Shadcn UI** primitives.
- **Dynamic Metadata**: SEO-optimized pages with dynamic OpenGraph and Twitter cards.
- **Dark Mode**: Built-in dark mode support using `next-themes`.

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: JavaScript / React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/) (Icons)
- **Animations**: AOS (Animate On Scroll), Swiper (Carousels)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database**: MongoDB
- **Forms**: React Hook Form

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm
- MongoDB database (local or Atlas)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/hadialhamza/prime-care.git
    cd prime-care
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**

    Create a `.env.local` file in the root directory and add the following variables:

    ```env
    # Database Connection
    MONGODB_URI=your_mongodb_connection_string

    # NextAuth Configuration
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret_key

    # Site Configuration
    NEXT_PUBLIC_SITE_URL=http://localhost:3000

    # Optional: Email Service (if applicable)
    # SMTP_HOST=...
    # SMTP_USER=...
    # SMTP_PASS=...
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```bash
prime-care/
├── public/              # Static assets (images, icons, manifest)
├── src/
│   ├── app/             # Application routes (App Router)
│   │   ├── api/         # API routes (Auth, Bookings)
│   │   ├── (auth)/      # Auth pages (Login, Register)
│   │   ├── services/    # Service listing & details pages
│   │   └── ...
│   ├── components/      # Reusable UI components
│   │   ├── layouts/     # Navbar, Footer
│   │   ├── shared/      # Common components (Cards, Headings)
│   │   └── ui/          # Radix/Primitive UI components
│   ├── lib/             # Utility functions & DB connection
│   └── models/          # Mongoose models (Users, Bookings)
├── package.json         # Dependencies and scripts
└── ...
```

## 📜 Scripts

| Script          | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Starts the development server                |
| `npm run build` | Builds the application for production        |
| `npm run start` | Starts the production server                 |
| `npm run lint`  | Runs ESLint to check for code quality issues |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by Hadi Al Hamza
