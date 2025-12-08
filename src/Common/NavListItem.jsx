import { Link } from "react-router";

const NavListItem = ({ list,setActive}) => {
  return (
    <>
      <li>
        <Link to={list.url}
          className="hover:text-amber-600"
          onClick={(() => setActive(true), () => setIsOpen(false))}
        >
          {list.name}
        </Link>
      </li>
    </>
  );
};

export default NavListItem;
