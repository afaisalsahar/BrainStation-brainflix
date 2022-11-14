import './CallToAction.scss';

const CallToAction = ({modifier, text, handleClick}) => {
    return (
        <button 
            className={`call-to-action call-to-action--${modifier}`}
            onClick={() => (handleClick ? handleClick() : null)}
            >{text}
        </button>
    );
};

export default CallToAction;