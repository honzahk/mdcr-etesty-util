import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { topics } from "./topics";
import { TopicScreen } from "./TopicScreen";
import { HomeScreen } from "./HomeScreen";

export const App: React.FC = () => {
    const [state, setState] = useState<{ topics: typeof topics }>({
        topics: topics
    });

    if (state === null) {
        return <span>loading..</span>;
    }

    return (
        <MuiThemeProvider theme={null}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={`/`} component={HomeScreen} />} />
                    <Route
                        path={`/topic/:topicIndex`}
                        component={TopicScreen}
                    />
                    <Route render={() => <div>404</div>} />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    );
};
