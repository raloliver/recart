import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from 'components/Page';

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
            element={<div>Router works!</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
