# Events Website - Photography & Videography Business

A modern, responsive Events Website built for a professional photography and videography business based in Dehradun, Uttarakhand. This website showcases professional photography services and allows clients to discover, book, and connect with the business for various event types.

## 🚀 Live Demo

[View Live Website](#) <!-- Add your deployed URL here -->

## 📸 Screenshots

<!-- Add screenshots of your website here -->

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Architecture**: Component-based structure
- **Deployment**: Vercel (recommended)

## ✨ Features

### 🎨 Design & UI/UX
- **Dark Theme**: Sophisticated black/gray gradient backgrounds
- **Glass Morphism**: Modern glassmorphism effects with backdrop blur
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion for hover effects, scroll triggers, and page transitions
- **Interactive Elements**: Mouse parallax effects and dynamic hover states

### 📱 Pages & Sections

#### **Homepage**
- Hero section with gradient text effects
- Events carousel showcase
- Statistics section with animated counters
- Call-to-action sections

#### **About Page**
- Company story and team information
- Statistics showcase (500+ Happy Clients, 8+ Years Experience)
- Service highlights
- White-themed testimonial/CTA section

#### **Events Page**
- Dynamic event filtering by category and date
- Interactive event cards with hover effects
- Real-time search and filtering
- Event catalog with multiple categories

#### **Contact Page**
- Professional contact form with validation
- Interactive contact information cards
- Google Maps integration with real location
- Social media links and business hours

## 🏢 Business Information

- **Business Name**: Dehradun Photography Studio
- **Location**: 349, Park Rd, Laxman Chowk, Dehradun, Uttarakhand 248001
- **Phone**: +91 74559 32245
- **Instagram**: [@ayush_chaudhary_032](https://www.instagram.com/ayush_chaudhary_032/)
- **Email**: info@dehradunphotography.com

### 📷 Services Offered
- Wedding Photography
- Corporate Events
- Birthday Parties
- Fashion Shoots
- Pre-Wedding Shoots
- Baby Photography
- Product Photography

## ⚡ Interactive Features

- **Real-time Filtering**: Event search by category and date
- **WhatsApp Integration**: Direct messaging for bookings
- **Google Maps**: Live directions to studio location
- **Form Handling**: Contact form with submission states
- **Social Media Links**: Direct connections to Instagram and other platforms

## 🎯 Special Components

### Custom Components
- **MouseParallax**: Interactive mouse-following effects
- **EventCard**: Reusable event display components  
- **StatsSection**: Animated statistics with white card design
- **Navbar & Footer**: Consistent navigation and branding
- **ParallaxSection**: Scroll-based parallax animations

### Theme System
- **Primary Colors**: Blue, Purple, Pink gradients for headings
- **Background**: Black/gray gradients for modern look
- **Accent Elements**: White cards and glass morphism effects
- **Typography**: Gradient text effects with proper contrast

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mouse-triger.git
   cd mouse-triger
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page  
│   ├── events/            # Events page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── EventCard.tsx      # Event display cards
│   ├── Footer.tsx         # Site footer
│   ├── MouseParallax.tsx  # Mouse parallax effects
│   ├── Navbar.tsx         # Navigation bar
│   ├── ParallaxSection.tsx # Scroll parallax
│   └── StatsSection.tsx   # Statistics display
├── styles/                # Global styles
└── utils/                 # Utility functions
    └── dummyEvents.ts     # Sample event data
```

## 🎨 Customization

### Colors & Theme
The project uses Tailwind CSS for styling. Main color schemes:

- **Gradients**: `from-blue-600 via-purple-600 to-pink-500`
- **Backgrounds**: `from-gray-900 via-black to-gray-900`
- **Accent**: White cards with glass morphism effects

### Content Updates
1. **Business Information**: Update contact details in components
2. **Services**: Modify service lists in contact and about pages  
3. **Events**: Update `src/utils/dummyEvents.ts` with real events
4. **Images**: Replace placeholder images with actual photos

### Google Maps Integration
Update the Google Maps URL in `src/app/contact/page.tsx`:
```typescript
href="https://www.google.com/maps/place/YOUR_EXACT_LOCATION"
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Tablet**: 768px - 1919px  
- **Mobile**: 320px - 767px

## 🔧 Key Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "framer-motion": "^10.0.0",
  "tailwindcss": "^3.0.0",
  "typescript": "^5.0.0"
}
```

## 📈 Performance Features

- **Next.js Optimization**: Server-side rendering and static generation
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting for faster page loads
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayush Chaudhary**
- Instagram: [@ayush_chaudhary_032](https://www.instagram.com/ayush_chaudhary_032/)
- Phone: +91 74559 32245
- Location: Dehradun, Uttarakhand

## 🙏 Acknowledgments

- **Next.js** for the amazing React framework
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Vercel** for deployment and hosting

## 📞 Support

For support or inquiries about photography services:
- **WhatsApp**: [+91 74559 32245](https://wa.me/917455932245?text=Hi! I'm interested in your photography services. Can you please share more details?)
- **Email**: Aayush1628jaat@gmai.com
- **Instagram**: [@ayush_chaudhary_032](https://www.instagram.com/ayush_chaudhary_032/)

---

**Made with ❤️ in Dehradun, Uttarakhand**

*This project was built to showcase professional photography services and provide an excellent user experience for potential clients.*

## 📧 Email (Contact form)

The Contact page uses an API route (`/api/contact`) to send emails via Resend.

Setup:
- Copy `.env.example` to `.env.local` and fill values:
   - `RESEND_API_KEY` – your Resend API key
   - `CONTACT_TO_EMAIL` – destination (defaults to `aayush1628jaat@gmail.com`)
   - `CONTACT_FROM_EMAIL` – from address (use a verified domain)

Notes:
- In production (e.g., Vercel), set these env vars in project settings.
- After saving env vars, redeploy or restart the dev server.
