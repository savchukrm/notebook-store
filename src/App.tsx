import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ './pages/Cart')
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ './pages/NotFound')
);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/">
            <Route index={true} element={<Home />} />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="/*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
