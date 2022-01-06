import './TitleText.scss';

const TitleText = props => {
    return(
        <span data-text={props.children} className='title-text' />
    )
}

export default TitleText;