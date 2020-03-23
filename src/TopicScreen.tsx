import React, { useEffect, useState, useRef } from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { useParams, Link, RouteComponentProps } from "react-router-dom";
import { topics, TTopic } from "./topics";

export const TopicScreen: React.FC<RouteComponentProps> = props => {
    const [state, setState] = useState<{
        topic: null | TTopic;
        questionIndex: number;
        userAnswerIndex: null | number;
    }>({
        topic: null,
        questionIndex: 0,
        userAnswerIndex: null
    });

    //get params from url
    const { mode, topicIndex } = useParams<{
        mode: string;
        topicIndex: string;
    }>();

    //we need fresh values of state for keyevent handlers (react hooks specific) - we need to use refs
    const stateRef = useRef(state);
    stateRef.current = state;

    useEffect(() => {
        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        //get the selected topic (in copy, because we might shuffle questions/answer)
        const topic = JSON.parse(
            JSON.stringify(
                topics.find(topic => topic.index == parseInt(topicIndex))
            )
        );
        topic.questions = topic.questions.map(question => {
            return {
                ...question,
                answers: shuffle(question.answers)
            };
        });

        if (mode == "rand") {
            console.log("eee");
            topic.questions = shuffle(topic.questions);
        }

        setState({ ...state, topic });

        //setup key handlers
        const onKeyUp = (e: KeyboardEvent) => {
            if (e.key == "1" || e.key == "2" || e.key == "3") {
                //user can answer with keys 1/2/3
                //parse the key, covert it to index by decrementing it
                const answerIndex = parseInt(e.key) - 1;
                if (
                    (answerIndex >= 0 &&
                        answerIndex <=
                            stateRef.current.topic.questions[
                                stateRef.current.questionIndex
                            ].answers.length) == false
                ) {
                    //check if there are enough answers (some questions may have only 2 answers)
                    return;
                }
                setState({ ...stateRef.current, userAnswerIndex: answerIndex });
            } else if (e.key == "ArrowLeft") {
                onClickPrevQuestion();
            } else if (e.key == "ArrowRight") {
                onClickNextQuestion();
            }
        };

        window.addEventListener("keyup", onKeyUp);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keyup", onKeyUp);
        };
    }, []);

    const onClickPrevQuestion = () => {
        if (stateRef.current.questionIndex > 0 == false) {
            return;
        }
        setState({
            ...stateRef.current,
            questionIndex: stateRef.current.questionIndex - 1,
            userAnswerIndex: null
        });
    };

    const onClickNextQuestion = () => {
        if (
            stateRef.current.questionIndex <
                stateRef.current.topic.questionCount - 1 ==
            false
        ) {
            return;
        }
        setState({
            ...stateRef.current,
            questionIndex: stateRef.current.questionIndex + 1,
            userAnswerIndex: null
        });
    };

    if (state.topic == null) {
        return <div>loadinggg...</div>;
    }

    const question = state.topic.questions[state.questionIndex];
    const correctAnswerIndex = question.answers.findIndex(
        answer => answer.isCorrect
    );

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    borderBottom: "3px solid black",
                    marginBottom: 30
                }}
            >
                <Link
                    to={`/`}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <ArrowBack color="primary" />
                </Link>
                <h2 style={{ marginLeft: 20 }}>{state.topic.title}</h2>
            </div>
            <div style={{ paddingLeft: 50 }}>
                <div style={{ marginBottom: 20 }}>
                    <b>
                        <div
                            style={{ display: "inline-block", marginRight: 10 }}
                        >
                            [{state.questionIndex + 1}/
                            {state.topic.questionCount}] (n. {question.index})
                        </div>
                        {question.text}
                    </b>
                </div>
                <div style={{ width: 600 }}>
                    {question.answers.map((answer, answerIndex) => {
                        let backgroundColor = null;
                        if (answerIndex == state.userAnswerIndex) {
                            //always mark user's answer as red
                            backgroundColor = "red";
                        }
                        if (answerIndex == correctAnswerIndex) {
                            //always mark correct answer as green - that will even overwrite user's red answer if it was correct
                            backgroundColor = "lawngreen";
                        }

                        return (
                            <div
                                key={answerIndex}
                                style={{
                                    ...(state.userAnswerIndex != null && {
                                        backgroundColor: backgroundColor
                                    }),
                                    border: "1px solid black",
                                    padding: "10px"
                                }}
                                onClick={() =>
                                    state.userAnswerIndex == null &&
                                    setState({
                                        ...state,
                                        userAnswerIndex: answerIndex
                                    })
                                }
                            >
                                {answer.text}
                            </div>
                        );
                    })}
                    {state.userAnswerIndex != null && (
                        <div style={{ float: "right", marginTop: 20 }}>
                            {state.questionIndex > 0 && (
                                <ArrowBack
                                    style={{ marginRight: 10 }}
                                    onClick={onClickPrevQuestion}
                                />
                            )}
                            {state.questionIndex <
                                state.topic.questionCount - 1 && (
                                <ArrowForward
                                    style={{ marginRight: 10 }}
                                    onClick={onClickNextQuestion}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
