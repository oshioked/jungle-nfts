import './TitleText.scss';

const TitleText = props => {
    return(
        <span data-text={props.children} className={`title-text ${props.className || ''}`} />
    )
}

export default TitleText;