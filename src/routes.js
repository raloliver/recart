import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Page from 'components/Page';
import Home from 'pages/Home';
import Category from 'pages/Category';
import Cart from 'pages/Cart';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Page />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/category/:guid"
            element={<Category />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
