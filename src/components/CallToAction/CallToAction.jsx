import './CallToAction.scss';

const CallToAction = ({modifier, text}) => {
    return (
        <button className={`call-to-action call-to-action--${modifier}`}>{text}</button>
    );
};

export default CallToAction;