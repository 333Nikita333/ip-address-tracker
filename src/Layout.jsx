import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './components/AppBar';
import styled from 'styled-components';

const Section = styled.section`
  @media screen and (max-width: 375px) {
    max-width: 400px;
  }

  @media screen and (min-width: 1441px) {
    max-width: 500px;
  }
`;

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
