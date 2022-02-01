
function Header(props: {
    children?: React.ReactNode;
}) {
    return (
        <header className="">
            {props.children}
        </header>
    );
}

export default Header;
