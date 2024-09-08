const Header = ({ text, size }) => {
  if (size === 1) return <h1>{text}</h1>;
  else if (size === 2) return <h2>{text}</h2>;
};

export default Header;
