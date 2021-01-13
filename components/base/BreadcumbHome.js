import Image from 'next/image'
import Link from 'next/link'


const BreadcrumbHome = (props) => {


    return (


        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item text-primary">

                    <Link href="/">
                        <a className="link-primary text-decoration-none"><strong>Viajes a Cuba</strong> a la Medida </a>
                    </Link>
                </li>
                <li className="breadcrumb-item active text-primary d-none" aria-current="page">{props.text}</li>
            </ol>
        </nav>


    );
}

export default BreadcrumbHome;