**🏡 Havenly – Real Estate Rental Platform**

Havenly is a simple real estate rental web app that allows users to explore rental properties, create accounts, and book houses. The project focuses on responsive design, intuitive navigation, and interactive features like popups and guest login.

**Demo The website** = https://jatinjoshisolutions.github.io/Renties-Rent-Smarter-Live-Better/

**🚀 Features
🔑 Authentication**

Login Page

Standard login form with username & password fields.

Bypass option: Any input is accepted (for demo/testing).

Guest Login: Allows direct access to homepage without credentials.

Create Account Page

Account creation form.

After submitting, a confirmation popup appears.

Redirects to homepage only after clicking OK.

**🏠 Homepage**

Navbar with:

Project branding (Havenly).

Search bar.

Home logo at the start.

Navigation links.

Responsive Design

Layout adjusts properly on minimized windows and all device sizes.

Fixed issues with elements breaking or leaving extra space.

**📂 Categories**

Category Navbar

Completely fills width (no empty gaps).

Straight edges (removed curved borders).

Divided into 3 category boxes with spacing in between.

**🏘️ Property Details Page**

Background Image (fixed bug with CSS background not appearing).

Rent Now Button

When clicked, shows a popup: “Contact details will be shared within a few minutes”.

**🛠️ Tech Stack**

Frontend: HTML, CSS, JavaScript

Icons: Font Awesome (for buttons/icons)

Styling: Pure CSS with flexbox layout

Popups: JavaScript alert() and confirm()

**📂 Project Structure**
Havenly/
│── index.html         # Homepage
│── login.html         # Login page (with guest login + bypass)
│── createAccount.html # Account creation with popup before redirect
│── houseDetails.html  # Property details page with background + rent button
│── style.css          # Main styling
│── createAccount.css  # Styles for create account page
│── script.js          # JS for login, popups, guest login
│── assets/            # Images, icons, backgrounds

**💡 Future Improvements**

Add backend authentication (Node.js / Firebase).

Store user accounts and rental details in a database.

Implement advanced property search and filters.

Replace JS alerts with custom modal popups.

**👨‍💻 Author : Jatib Joshi**

Jatin (Project Developer)

