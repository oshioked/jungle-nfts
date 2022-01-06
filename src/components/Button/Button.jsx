import './Button.scss';

const Button = props => {
    const { title, onClick, children } = props;
    return(
        <button className='primary-button' onClick={onClick}>
            {children || title}
        </button>
    )
}

export default Button;