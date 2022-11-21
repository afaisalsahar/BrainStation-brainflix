// load SASS - logo image - Avatar component - and Link hook
import "./Header.scss";

import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";

import Avatar from "../Avatar/Avatar";

import { Link } from "react-router-dom";

// renders header with link to the upload page and user avatar component
const Header = () => {
    return (
        <header className="masthead">
            <div className="masthead__container">
                <div className="masthead__branding">
                    <a className="masthead__home" href="/">
                        <img
                            className="masthead__logo"
                            src={brainFlixLogo}
                            alt="BrainFlix Logo"
                        />
                    </a>
                </div>
                <div className="masthead__actions">
                    <form className="masthead__form">
                        <input
                            type="search"
                            className="masthead__search"
                            name="masthead--search"
                            id="masthead--search"
                            placeholder="Search"
                        />
                    </form>

                    <Avatar
                        showImage={true}
                        defaultAvatar={true}
                        avatarAlt="user avatar"
                    />

                    <form className="masthead__upload">
                        <Link className="masthead__action" to="/upload">
                            Upload
                        </Link>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;
