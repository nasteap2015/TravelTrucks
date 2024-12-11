import { lazy, useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css'
import { Layout } from '../Layout/Layout';

const Homepage = lazy(() => import('../../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const CatalogItemPage = lazy(() => import('../../pages/CatalogItemPage/CatalogItemPage'));
const Features = lazy(() => import('../Features/Features'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

function App() {


  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/catalog/:id" element={<CatalogItemPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Layout>
    
  )
}

export default App
