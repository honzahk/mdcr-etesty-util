import React, { useEffect, useState } from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { useParams, Link } from "react-router-dom";
import { topics, TTopic } from "./topics";

export const TopicScreen: React.FC = () => {
    const [topic, setTopic] = useState<null | TTopic>(null);
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [userAnswerIndex, setUserAnswerIndex] = useState<null | number>(null);

    const { topicIndex } = useParams<{ topicIndex: string }>();

    useEffect(() => {
        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        const topic = topics.find(topic => topic.index == parseInt(topicIndex));
        topic.questions = topic.questions.map(question => {
            return {
                ...question,
                answers: shuffle(question.answers)
            };
        });
        setTopic(topic);
    }, []);

    if (topic == null) {
        return <div>loadinggg...</div>;
    }

    const question = topic.questions[questionIndex];
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
                <h2 style={{ marginLeft: 20 }}>{topic.title}</h2>
            </div>
            <div style={{ paddingLeft: 50 }}>
                <div style={{ marginBottom: 20 }}>
                    <b>
                        <div
                            style={{ display: "inline-block", marginRight: 10 }}
                        >
                            [{question.index}/{topic.questionCount}]
                        </div>
                        {question.text}
                    </b>
                </div>
                <div style={{ width: 600 }}>
                    {question.answers.map((answer, answerIndex) => {
                        let backgroundColor =
                            answerIndex == userAnswerIndex &&
                            answerIndex == correctAnswerIndex
                                ? "green"
                                : answerIndex == correctAnswerIndex
                                ? "green"
                                : answerIndex == userAnswerIndex
                                ? "red"
                                : null;
                        return (
                            <div
                                key={answerIndex}
                                style={{
                                    ...(userAnswerIndex != null && {
                                        backgroundColor: backgroundColor
                                    }),
                                    border: "1px solid black",
                                    padding: "10px"
                                }}
                                onClick={() =>
                                    userAnswerIndex == null &&
                                    setUserAnswerIndex(answerIndex)
                                }
                            >
                                {answer.text}
                            </div>
                        );
                    })}
                    {userAnswerIndex != null && (
                        <div style={{ float: "right", marginTop: 20 }}>
                            {questionIndex > 0 && (
                                <ArrowBack
                                    style={{ marginRight: 10 }}
                                    onClick={() => {
                                        setQuestionIndex(questionIndex - 1);
                                        setUserAnswerIndex(null);
                                    }}
                                />
                            )}
                            {questionIndex < topic.questionCount - 1 && (
                                <ArrowForward
                                    style={{ marginRight: 10 }}
                                    onClick={() => {
                                        setQuestionIndex(questionIndex + 1);
                                        setUserAnswerIndex(null);
                                    }}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
