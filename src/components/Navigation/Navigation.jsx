import { Link, NavList } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </NavList>
    </nav>
  );
};

export default Navigation;
