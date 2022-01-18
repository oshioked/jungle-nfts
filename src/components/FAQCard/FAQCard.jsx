import React from 'react';
import './FAQCard.scss';
import BodyText from '../BodyText/BodyText';
import TitleText from '../TitleText/TitleText';

const FAQCard = props => {
    const {question, answer, isActive, onClick} = props;
    return (
        <div onClick={onClick} className='faq-card'>
            <div className="question-container">
                <TitleText className="question">{question}</TitleText>
                <TitleText className="sign">{isActive ? "-" : "+"}</TitleText>
            </div>
            <div className={`answer-container ${isActive ? 'active' : ''}`}>
                <BodyText>{answer}</BodyText>
            </div>
        </div>
    )
}

export default FAQCard;