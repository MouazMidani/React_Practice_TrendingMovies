# 🎬 React\_Practice\_TrendingMovies

Creating a trending movies web application while focusing on practicing **TypeScript** and **React Native** concepts.

-----

## 💡 Project Goals & Context

This project serves as a hands-on practice application developed by following a detailed **YouTube video tutorial**:

  * **Core Technologies:** Built primarily with **React Native** and **TypeScript** for a robust and scalable codebase.
  * **Styling:** Introduces and utilizes **Tailwind CSS v4** for utility-first styling, covering installation, configuration with and applying utility classes.
  * **API Integration:** Fetches real-time movie data from **The Movie Database (TMDB) API**, utilizing modern React Native features.
  * **Design & Assets:** The project is based on a **Green forest design** I have Implemented, and assets (images/SVGs like `star.svg`, `hero.png`, `search.svg`, etc.) are managed in the `public` folder.
  * **Hosting:** The initial hosting setup is complete.

-----

## ✨ Key Learning Points

### 1\. **Styling with Tailwind CSS v4**

  * **Installation:** Using `npm install tailwind CSS` and configuring.
  * **Usage:** Applying utility classes directly via `className` (e.g., `text-3xl font-bold underline`).

### 2\. **React Native Component Structure & Data Flow**

  * **Semantic HTML:** Using React Native tags like `<View>`, `<Text>`, and `<FlatList>`.
  * **Component Creation:** Creating the first component, `Search.jsx`, and importing it into `App.jsx`.
  * **Props:** Passing data and setter functions (`searchTerm`, `setSearchTerm`) as **props** from the parent (`App.jsx`) to the child (`Search.jsx`).
  * **Destructuring:** Using **JavaScript destructuring** to access props elegantly within the child component.
  * **React Native Principles (Important\!):**
      * **Props are Read-Only:** Props should **never** be changed by the child component.
      * **State Mutation:** State should **only** be updated using the setter function (`setSearchTerm`)—direct mutation is forbidden.
  * **Forms (Controlled Inputs):** Implementing a controlled input for the search bar.

### 3\. **API Integration & Data Fetching**

  * **Environment Variables:** Securing the **MOVIE related keys** by storing it in a local `.env.local` file and accessing it using `process.EXPO.PUBLIC.KEY`.
  * **`useEffect` Hook:** Using `useEffect` with an **empty dependency array** (`[]`) to execute the `fetchMovies` function only once when the component loads.
  * **Asynchronous Logic:** Defining an `async/await` function to handle the API call.
  * **Error Handling:** Implementing `try...catch...finally` blocks to handle network errors and API failures, managing the `errors and state`, and always stopping the loading state in `finally`.
  * **Loading State:** Using an `isLoading` state to provide user feedback while data is being fetched.
  * **Conditional Rendering:** Advanced conditional logic using **Ternary Operators** to display:
    1.  The loading state (`is-loading`).
    2.  The error message (`error-message`).
    3.  The movie results (via a list and `.map()` over the `movieList` state).

-----

## 🛠️ Project Structure

```
├── public/
│   ├── Background.png
│   ├── Design.png
│   ├── icon.png
│   ├── Movies.png
│   └── ... (other assets)
├── src/
│   ├── components/
│   │   └── Search.jsx
|   |   └── ... (other components)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css (Tailwind directives & custom styles)
├── .env (contains ENV keys)
└── README.md
```

TODO: 
  work on the Mobile layout more
