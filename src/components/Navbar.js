import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link className="nav-text" to="/protfolio">
                    PROTFOLIO
                </Link>
                <Link className="nav-text" to="/skills">
                    SKILLS
                </Link>
                <Link className="nav-text" to="/">
                    ABOUT
                </Link>
            </div>
        </header>
    )
}

export default Navbar