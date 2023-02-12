import { useLocation } from "react-router-dom";

const PWLink = ({ to, classes, children }) => {
  const location = useLocation();

  const handleClick = (event) => {
    if (location && location.pathname === to) {
      event.preventDefault();
    }
  };

  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default PWLink;
