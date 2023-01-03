import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Layout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
};
export default Layout;
