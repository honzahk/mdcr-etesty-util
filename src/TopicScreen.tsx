import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { topics, TTopics } from "./topics";

export const TopicScreen: React.FC = () => {
    const [topic, setTopic] = useState<null | TTopics[0]>(null);

    const { topicId } = useParams<{ topicId: string }>();

    useEffect(() => onTopicChange, []);
    useEffect(() => onTopicChange, [topicId]);

    const onTopicChange = () => {
        setTopic(topics.find(topic => topic.number == parseInt(topicId)));
    };

    if (topic == null) {
        return <div>loading...</div>;
    }
    return <div>ttt {topic.title}</div>;
};
