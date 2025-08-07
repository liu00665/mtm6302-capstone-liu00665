# mtm6302-capstone-liu00665
#Colour Palette (to be applied in high-fidelity version):

#Background: Dark navy(#06174D)/black to evoke the cosmos

#Primary Text: White(#FFFFF) or light gray(#D1D1D1) for high contrast

#Fonts:Gugi


#User enters a specific date and clicks the "Search" button.

The application displays:

The astronomy image for that date

A title

The full explanation text

User clicks "Add to Favourite" to save the image.

Favourites are displayed in a scrollable list, with "Remove" buttons for deletion.

Clicking on the displayed image should open its high-definition version on the same page, maintaining the functionality of a single-page application.


PART-3 STEPS

## Setting Up the Project
Initialized the project with `index.html`, `style.css`, `script.js`.
Created a structured project folder, including an `images` directory for assets.

## Building the HTML
Created semantic HTML structure with sections for the header, search/date input, main content, and favorites list.
Used proper class names for easier CSS targeting.

## Styling with CSS
Designed the site according to the PDF mockup using custom CSS with modern layout techniques (Flexbox, CSS Grid).
Applied gradients, background colors, shadows, and responsive design with media queries to ensure usability on mobile and desktop.
Made use of consistent font, color, and spacing to match the high-fidelity design.

## Resources Used

**Hi-Fi Mockup PDFs**: Provided (desktop.pdf, mobile.pdf)

## Challenges Faced

**Matching Mockup Details**
Adjusting gradients, box shadows, and spacing to closely match the mockup’s visual style required careful CSS tweaking.
Ensuring font size, weight, and spacing were consistent across browsers and devices.



# NASA APOD Search - Capstone Project Part 4

## Steps Taken to Create the Web Application

1. **Branch Setup**
   - Created the `part-4` branch from `part-3` to begin the functional development stage.

2. **HTML & CSS Structure**
   - Refined HTML for semantic structure and accessibility.
   - Styled the layout based on the hi-fi mockup, using CSS Flexbox/Grid and gradients for a modern, space-inspired look.
   - Ensured the site is responsive for both desktop and mobile devices.

3. **JavaScript Functionality**
   - Used Fetch API to retrieve APOD data from the NASA API based on user-selected date.
   - All events (search, add/remove favorite) are handled with `addEventListener` only, no inline events.
   - Implemented a "favorites" feature using `localStorage` so users can persistently save and remove their favorite pictures.
   - Used event delegation for dynamic elements (removal of favorites).
   - All interactions update the DOM without reloading the page.

4. **Testing & Validation**
   - Tested on Chrome and Firefox, including various screen sizes.
   - Validated HTML and CSS via [W3C Validator](https://validator.w3.org/).

---

## Resources Used

- **NASA APOD API**: https://api.nasa.gov/
- **API Key**: Registered via [api.nasa.gov](https://api.nasa.gov/)  
- **Images**: NASA APOD images (plus local placeholders for video and logo)
- **JavaScript Reference**: [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), [MDN - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- **Design Reference**: Hi-fi PDF mockup provided in Part 2
- **CSS Reference**: [MDN CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)

---

## Challenges Faced

- **NASA API Handling**
  - Managing different API responses (image vs video). Used a placeholder image for videos.
  - Handling API key registration and request limits.

- **LocalStorage Data Management**
  - Ensured no duplicate favorites are stored.
  - Synced UI with `localStorage` and handled persistence across sessions.

- **No Page Refresh SPA**
  - All UI updates and interactions are managed via JavaScript and DOM manipulation with no reloads.

- **Responsiveness**
  - CSS needed fine-tuning to ensure grid and flex layouts worked well on both large and small screens.


