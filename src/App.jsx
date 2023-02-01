import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Movie } from "./pages/Movie";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Routes>
                <Route strict path="/react-movies" element={<Home />} />
                <Route
                    strict
                    path="/react-movies/:nameRu"
                    element={<Movie />}
                />
                <Route
                    strict
                    path="/react-movies/favorites"
                    element={<Favorites />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
