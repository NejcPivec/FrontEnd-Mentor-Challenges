import React, {useState} from 'react';

const Question = ({ question, answer }) => {

    const [open, setOpen] = useState(false);

    const questionHandler = (e) => {
        setOpen(true);
        rotatex(180);

        if(open === true) {
            setOpen(false);
           rotatex(360);
        }
    }

    function rotatex(deg) {
        const innerArrow = document.querySelector(".arrow");
        innerArrow.setAttribute("transform", `rotate(${deg})`);
    }

    return (
        <div className="question">
            <div className="main">
                <p className="main-question">{question}</p>
                <svg className="arrow" onClick={questionHandler} width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </div>
            {
                open && (
                <div className="second">
                    <p className="anwser">{answer}</p>
                </div>
                )
            }
            
        </div>
    )
}

export default Question
