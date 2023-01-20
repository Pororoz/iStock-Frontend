import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '@components/NavBar';
import ItemsPage from '@pages/ItemsPage';
import CategoryPage from '@pages/CategoryPage';
import ProductPage from '@pages/ProductPage';
import ProductLogPage from '@pages/ProductLogPage';
import PartsPage from '@pages/PartsPage';
import PartLogPage from '@pages/PartLogPage';
import AccountsPage from '@pages/AccountsPage';
import NotFound from '@pages/NotFound';

function App(): ReactElement {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:category" element={<CategoryPage />} />
        <Route path="/items/:category/:product" element={<ProductPage />} />
        <Route path="/items/:category/:product/log" element={<ProductLogPage />} />
        <Route path="/parts" element={<PartsPage />} />
        <Route path="/parts/:part/log" element={<PartLogPage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
