import React from "react";
import { topics } from "./topics";
import { Link } from "react-router-dom";

export const HomeScreen: React.FC = () => {
    return (
        <ul>
            {topics.map(topic => {
                return (
                    <li key={topic.index}>
                        <Link to={`/topic/seq/${topic.index}`}>seq</Link>
                        {` | `}
                        <Link to={`/topic/rand/${topic.index}`}>rand</Link>
                        {` | `}
                        {topic.title}
                    </li>
                );
            })}
        </ul>
    );
};
