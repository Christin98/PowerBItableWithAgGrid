"use strict";
import powerbi from "powerbi-visuals-api";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import * as React from "react";
import * as ReactDOM from "react-dom";
import {App,initialState} from "./App";    
import { colMapping,deStructured,Colvalues}  from './Components/Mapping'
import "./../style/visual.less";

export class Visual implements IVisual {
    private target: HTMLElement;
    private reactRoot: React.ComponentElement<any, any>;

    constructor(options: VisualConstructorOptions) {
        this.reactRoot = React.createElement(App, {});
        this.target = options.element;
        ReactDOM.render(this.reactRoot, this.target);
    }

    public update(options: VisualUpdateOptions) {
        if(options.dataViews && options.dataViews[0]){
            const dataView: DataView = options.dataViews[0];
            const rowHeaderValue=[]
            const colHeaderValue=[]
            
            dataView.categorical.categories.map((value)=>{
                rowHeaderValue.push(value.source.displayName) 
            })
            dataView.categorical.values.map((value)=>{
                rowHeaderValue.push(value.source.displayName) 
            })
            dataView.categorical.categories.map((value)=>{
                colHeaderValue.push(value.values) 
            })
            dataView.categorical.values.map((value)=>{
                colHeaderValue.push(value.values)
            })
            const Data=colMapping(rowHeaderValue,colHeaderValue)
            const RowData=deStructured(Data)
            const colData=Colvalues(rowHeaderValue)
            console.log(RowData);

            
            App.update({
                rowValues:RowData,
                colValues:colData
            });
        } else {
            this.clear();
        }
    }     
    private clear() {
        App.update(initialState);
    }
}