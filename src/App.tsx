/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/

import * as React from "react";
import GridExample from './Components/GridExample'

export interface State {
    rowValues?:any[],
    colValues?:any[]
}

export const initialState: State = {
    rowValues:[],
    colValues:[]
}
export class App extends React.Component<{}, State>{
    private static updateCallback: (data: object) => void = null;
    public static update(newState: State) {
        if (typeof App.updateCallback === 'function') {
            App.updateCallback(newState);
        }
    }
    public state: State = initialState;

    public componentWillMount() {
        App.updateCallback = (newState: State): void => { this.setState(newState); };
    }
    public componentWillUnmount() {
        App.updateCallback = null;
    }
    constructor(props: any) {
        super(props);
        this.state=initialState
    }
     
    render() {
        const {rowValues,colValues}=this.state
        return (
            <div >
                <GridExample row={rowValues} col={colValues}/>
            </div >
        )
    }
}

export default App