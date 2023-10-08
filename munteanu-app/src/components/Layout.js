import Navigation from "./Navigation";

const Layout = (props) => {
    return <>
        <Navigation></Navigation>
        <main>
            {props.children}
        </main>
    </>
}

export default Layout;