const NavListItem = ({ list,setActive}) => {
  return (
    <>
      <li>
        <a
          className="hover:text-amber-600"
          onClick={(() => setActive(true), () => setIsOpen(false))}
          href={list.url}
        >
          {list.name}
        </a>
      </li>
    </>
  );
};

export default NavListItem;
