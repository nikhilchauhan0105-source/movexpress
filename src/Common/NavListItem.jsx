const NavListItem = ({ list,setActive}) => {
  return (
    <>
      <li>
        <a
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
