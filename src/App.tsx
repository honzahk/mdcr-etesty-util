import React, { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { topics } from "./topics";
import { TopicScreen } from "./TopicScreen";
export const App: React.FC = () => {
    const [state, setState] = useState<{ topics: typeof topics }>({
        topics: topics
    });
    if (state === null) {
        return <span>loading..</span>;
    }
    return (
        <BrowserRouter>
            <ul>
                {state.topics.map(topic => {
                    return (
                        <li key={topic.number}>
                            <Link to={`/topic/${topic.number}`}>
                                {topic.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <Switch>
                <Route exact path={`/`} />
                <Route path={`/topic/:topicId`} component={TopicScreen} />
                <Route render={() => <div>404</div>} />
            </Switch>
        </BrowserRouter>
    );
};
