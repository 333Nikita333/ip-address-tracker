import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './components/AppBar';

function Layout() {
  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
