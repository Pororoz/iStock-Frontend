import { ReactElement, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ErrorBoundary } from 'react-error-boundary';

import CategoryPage from '@pages/CategoryPage';
import ProductPage from '@pages/ProductPage';
import BomPage from '@pages/BomPage';
import ProductLogPage from '@pages/ProductLogPage';
import PartsPage from '@pages/PartsPage';
import PartLogPage from '@pages/PartLogPage';
import AccountsPage from '@pages/AccountsPage';
import NotFound from '@pages/NotFound';
import MainPage from '@pages/MainPage';

import NavBar from '@components/NavBar';
import Breadcrumb from '@components/Breadcrumb';
import ErrorFallback from '@components/ErrorFallback';

function App(): ReactElement {
  return (
    <QueryClientProvider client={useQueryClient()}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="App">
          <header>
            <NavBar />
            <Breadcrumb />
          </header>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<div>loading</div>}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/items" element={<CategoryPage />} />
                <Route path="/items/:category" element={<ProductPage />} />
                <Route path="/items/:category/:product" element={<BomPage />} />
                <Route path="/items/:category/:product/log" element={<ProductLogPage />} />
                <Route path="/parts" element={<PartsPage />} />
                <Route path="/parts/:part/log" element={<PartLogPage />} />
                <Route path="/accounts" element={<AccountsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
