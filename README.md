# Custom-React-hooks

Useful custom hooks for React.

## Handle click outside of element

If you need to close a menu when click was outside.

Example use:

```
const menuNode = useRef() as MutableRefObject<HTMLDivElement>;
const [displayMenu, setDisplayMenu] = useHandleClickOutside(
    menuNode,
    false
);

const toggleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
};


...


<div ref={menuNode}>
    <MenuButton toggleMenu={toggleDisplayMenu} />
    <Menu displayMenu={displayMenu} />
</div>
```
