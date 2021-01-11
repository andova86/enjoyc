import BreadcrumbHome from "./base/BreadcumbHome";
import Image from "next/dist/client/image";
import Link from "next/link";

const Navbar = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <div className="navbar-brand ">

                        <Link href="/">
                            <Image
                                src="/svg/logo_color.svg"
                                alt="logo"
                                width={129}
                                height={100}
                            />
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <BreadcrumbHome text="de Lujo"/>
                            </li>

                        </ul>

                        <form className="d-flex">
                            <input className="form-control me-2 rounded-pill" type="search" placeholder="Search"
                                   aria-label="Search"/>

                        </form>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;