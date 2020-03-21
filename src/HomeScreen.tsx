import React from "react";
import { topics } from "./topics";
import { Link } from "react-router-dom";

export const HomeScreen: React.FC = () => {
    return (
        <ul>
            {topics.map(topic => {
                return (
                    <li key={topic.index}>
                        <Link to={`/topic/${topic.index}`}>{topic.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
