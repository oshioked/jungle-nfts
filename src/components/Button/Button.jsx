import BodyText from '../BodyText/BodyText';
import './Button.scss';

const Button = props => {
    const { title, onClick } = props;
    return(
        <button className='primary-button' onClick={onClick}>
            <BodyText>{title}</BodyText>
        </button>
    )
}

export default Button;