# 🎬 Movie Search App  

A simple movie search application built with Next.js, TypeScript, Redux, and Tailwind CSS. Users can search for movies, view details, and favourite them. Favorites persist across page reloads using `localStorage`.  

## 🚀 Features  
✅ Search for movies using TMDB API  
✅ View detailed movie information  
✅ Add/remove movies from favourites  
✅ Favorites persist using `localStorage`  
✅ Responsive design with Tailwind CSS  

## 🛠️ Tech Stack  
- **Next.js** (React framework)  
- **TypeScript** (Static typing)  
- **Redux Toolkit** (State management)  
- **TMDB API** (Movie data source)  
- **Tailwind CSS** (Styling)  

## 📦 Installation & Setup  
Clone the repository and install dependencies:  
```bash
git clone https://github.com/Devbearking/Movie-Search-App.git
cd movie-search-app
npm install
```

## 2️⃣ Install dependencies
```bash
npm install
or
yarn install
```

## 3️⃣ Set up environment variables
Create a .env.local file in the root directory and add your TMDB API credentials:
```bash
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
NEXT_PUBLIC_TMDB_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
```

## 4️⃣ Run the development server
```bash
npm run dev
# or
yarn dev
```

