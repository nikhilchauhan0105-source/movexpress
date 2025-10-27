const NavListItem = ({ list, isactive }) => {
  return (
    <>
      <li>
        <a
          onClick={(() => setActive(true), () => setIsOpen(false))}
          className={`${isactive ? "underline" : null}`}
          href={list.url}
        >
          {list.name}
        </a>
      </li>
    </>
  );
};

export default NavListItem;
