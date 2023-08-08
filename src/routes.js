import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from 'components/Page';
import Home from 'pages/Home';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
