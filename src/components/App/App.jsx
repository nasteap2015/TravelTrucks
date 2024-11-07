import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Layout } from '../Layout/Layout';

const Homepage = lazy(() => import('../../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const CatalogItemPage = lazy(() => import('../../pages/CatalogItemPage/CatalogItemPage'));

function App() {


  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/catalog/:id" element={<CatalogItemPage/>} />
        </Routes>
    </Layout>
  )
}

export default App
