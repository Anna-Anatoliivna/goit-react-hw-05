import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import { lazy, Suspense } from 'react';
import { Loader } from './components/Loader/Loader';
import { Header } from './components/Header/Header';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

