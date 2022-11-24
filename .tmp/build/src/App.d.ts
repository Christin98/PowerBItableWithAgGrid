import * as React from "react";
export interface State {
    rowValues?: any[];
    colValues?: any[];
}
export declare const initialState: State;
export declare class App extends React.Component<{}, State> {
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    componentWillMount(): void;
    componentWillUnmount(): void;
    constructor(props: any);
    render(): JSX.Element;
}
export default App;
