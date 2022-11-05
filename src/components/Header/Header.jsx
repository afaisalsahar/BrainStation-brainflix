import './Header.scss';

import brainFlixLogo from '../../assets/logo/BrainFlix-logo.svg';

import Avatar from '../Avatar/Avatar';
import CallToAction from '../CallToAction/CallToAction';

const Header = () => {
    return (
        <header className="masthead">
            <div className="masthead__container">
                <a className="masthead__go-home" href="/">
                    <img className="masthead__logo" src={brainFlixLogo} alt="BrainFlix Logo" />
                </a>
                <div className="masthead__actions">
                    <form className="masthead__form">
                        <input type="search" className="masthead__search" name="masthead--search" id="masthead--search" placeholder="Search" />
                    </form>

                    <Avatar showImage={true} defaultAvatar={true} avatarAlt="user avatar" />

                    <form className="masthead__upload">
                        <CallToAction modifier="upload" text="Upload"/>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;
