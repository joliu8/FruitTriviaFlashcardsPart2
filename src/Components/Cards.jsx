import React, { Component, useState } from "react";

import yellowemoji from '../assets/yellowemoji.jpg'
import durian from '../assets/durian.jpg'
import banana from '../assets/banana.jpg'
import strawberry from '../assets/strawberry.jpg'
import peach from '../assets/peach.jpg'
import watermeal from '../assets/watermeal.jpg'

const Cards = () => {
    const [cardPairs, setCardPairs] = useState([
        { "Enter a guess into the textbox below and hit submit. Incorrect answers will be red and correct answers will be green. After submitting, you may click the card to flip!": ["Nice, you are ready to go! Click the next button to continue!", yellowemoji] },
        { "What fruit is known as the 'king of fruits'? Hint: it is stinky!": ["Durian", durian] },
        { "What fruit is the most commonly eaten around the world?": ["Banana", banana] },
        { "What fruit has an average of 200 seeds on its exterior?": ["Strawberry", strawberry] },
        { "What was the first fruit eaten on the moon?": ["Peaches", peach] },
        { "What is the smallest edible fruit in the world?": ["Asian watermeal (Wolffia)", watermeal] }
    ]);

    const [index, setIndex] = useState(0);

    const [isQuestion, setQuestionFlag] = useState(true);

    const [input, setInput] = useState('');

    const [trueAnswer, setTrueAnswer] = useState('');

    const [hasSubmitted, setHasSubmitted] = useState(false);

    const [score, setScore] = useState(0);

    const[streak, setStreak] = useState(0);

    const [updatedScore, setUpdatedScore] = useState(false);


    //wrong or correct
    const [correct_ans, setCorrectAnswer] = useState('');

    function createRandomColor() {
        const r = Math.floor(Math.random() * 62) + 194;
        const g = Math.floor(Math.random() * 62) + 194;
        const b = Math.floor(Math.random() * 62) + 194;
        document.getElementById("flashcard-front").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("flashcard-back").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    }

    function toggleQuestion() {
        setQuestionFlag(!isQuestion);
    }

    const onNewDrink = (i) => {
        setInput('');
        setCorrectAnswer('');
        setTrueAnswer(Object.values(cardPairs[i])[0][0]);
        setHasSubmitted(false);
        setUpdatedScore(false);


    };


    const onCheckAnswer = () => {

        setHasSubmitted(true);

        if (trueAnswer.toLowerCase() === input.toLowerCase()) {
            setCorrectAnswer('correct');
            setUpdatedScore(true);
            if(!updatedScore)
                setScore(score + 1);
        }
        else {
            setCorrectAnswer('wrong');
            setScore(0);

            if(score > streak){
                setStreak(score);
            }
        }

    };




    return (
        <div>
            {/* <h3>{hasSubmitted.toString()} + {input}+ {correct_ans} </h3> */}
            <h3>Number of Cards: {cardPairs.length}</h3>
            <h3>Score: {score} Streak: {streak}</h3>
            <div className={`flashcard ${!isQuestion ? 'flipped' : ''}`} onClick={() => { if (hasSubmitted) { toggleQuestion(); } }}>

                <div id="flashcard-front" class="front">
                    {Object.keys(cardPairs[index])[0]}
                </div>

                <div id="flashcard-back" class="back">
                    {Object.values(cardPairs[index])[0][0]}
                    {Object.values(cardPairs[index])[0][1] && (
                        <img src={Object.values(cardPairs[index])[0][1]} alt="flashcard visual" />
                    )}
                </div>


            </div>

            <div className="buttons">

                <input
                    id={correct_ans}
                    type="text"
                    placeholder="Guess the fruit..."
                    className="textbox"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                {/* <button className="nav" onClick={onCheckAnswer}>Submit</button> */}
                <button className="nav" onClick={onCheckAnswer}>Submit</button>



            </div>

            <div className="buttons">
                <button
                    id="navbutton"
                    className="nav"
                    onClick={() => {
                        if (index > 0 && index < Object.keys(cardPairs).length) setIndex(index - 1)
                        // else setIndex((index + 1) % Object.keys(cardPairs).length);
                        setQuestionFlag(true);
                        createRandomColor();
                        onNewDrink(index - 1);

                    }}
                >
                    Previous
                </button>

                <h6 className="navtext">{index + 1}</h6>

                <button
                    id="navbutton"
                    className="nav"
                    onClick={() => {
                        if (index < cardPairs.length - 1) setIndex(index + 1);
                        // else setIndex((index + 1) % Object.keys(cardPairs).length);
                        setQuestionFlag(true);
                        createRandomColor();
                        onNewDrink(index + 1);
                    }}
                >
                    Next
                </button>

                <button
                    id="navbutton"
                    className="nav"
                    onClick={() => {
                        const randIndex = Math.floor(Math.random() * (cardPairs.length - 1)) + 1;
                        setIndex(randIndex);
                        // else setIndex((index + 1) % Object.keys(cardPairs).length);
                        setQuestionFlag(true);
                        createRandomColor();
                        onNewDrink(randIndex);
                    }}
                >
                    Shuffle
                </button>


            </div>


        </div >
    );

};

export default Cards;