import './GradientBorderContainer.scss';

const GradientBorderContainer = props => {
    return(
        <div className={`gradient-border ${props.className}`}>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default GradientBorderContainer;