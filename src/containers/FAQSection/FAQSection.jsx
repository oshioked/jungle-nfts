import React, { useState, useRef } from "react"
import "./FAQSection.scss"
import FAQCard from "../../components/FAQCard/FAQCard"
import SectionPadding from "../../components/SectionPadding/SectionPadding"
import TitleText from "../../components/TitleText/TitleText"

const faqs = [
  {
    question: "What is jungle",
    answer:
      "Nirure ad officia ex enim irure minim labore. Nirure ad officia ex enim irure minim labore. ",
  },
  {
    question: "How can i get to the jungle?",
    answer: "Nirure ad officia ex enim irure minim labore. ",
  },
  {
    question: "What is mint price for an orangutan",
    answer: "Nirure ad officia ex enim irure minim labore. ",
  },
]
const FAQSection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null)
  const cardsContRef = useRef(null)

  return (
    <div className="faq-section">
      <SectionPadding className="content">
        <div className="head">
          <TitleText>frequently asked questions</TitleText>
        </div>
        <div ref={cardsContRef} className="faq-cards-container">
          {faqs.map((a, i) => (
            <FAQCard
              onClick={() => setSelectedCardIndex(i)}
              question={a.question}
              answer={a.answer}
              isActive={selectedCardIndex === i}
            />
          ))}
        </div>
      </SectionPadding>
    </div>
  )
}

export default FAQSection
