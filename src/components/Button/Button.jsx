import TitleText from '../TitleText/TitleText';
import './Button.scss';

const Button = props => {
    const { title, onClick } = props;
    return(
        <button className='primary-button' onClick={onClick}>
            {title}
        </button>
    )
}

export default Button;