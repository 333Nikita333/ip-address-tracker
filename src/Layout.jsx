import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './components/AppBar';

function Layout() {
  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </>
  );
}

export default Layout;
