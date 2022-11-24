import { useState, useEffect } from 'react';
import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';
import './GridExample.less';
import {defaultCol} from './Madules'

const GridExample = (props:any) => {

const defaultCol:defaultCol={
    sortable: true,
    filter: true,
    editable: true,
    resizable:true,
    rowSelection:true
}
  return (
    <div className="ag-theme-alpine" style={{height: 400, width: "auto"}}>
           <AgGridReact
               rowData={props.row}
               columnDefs={props.col}
               defaultColDef={defaultCol}>
               
           </AgGridReact>
       </div>
  )
}
export default GridExample