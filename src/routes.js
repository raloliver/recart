import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Page from 'components/Page';
import Home from 'pages/Home';
import Category from 'pages/Category';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
