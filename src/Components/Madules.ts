export interface rowData{
    Name?: string;
    age ?: number;
    number? : number;
    place?: string;
    work?:string
 };
 
 export interface columnDefs{
     field?: string;
     filter?: boolean;
     headerCheckboxSelection?: boolean,
     checkboxSelection?: boolean,
 };
 
 export interface defaultCol{
     sortable?: boolean;
     filter?: boolean;
     editable?: boolean;
     resizable?:boolean;
     rowSelection?:boolean
 }
 
 export interface commonType{
     rowData?: rowData[];
     columnDefs?:columnDefs[];
     defaultColDef?:defaultCol;
 }
 
 export interface IOlympicData {
     athlete: string;
     age: number;
     country: string;
     year: number;
     date: string;
     sport: string;
     gold: number;
     silver: number;
     bronze: number;
     total: number;
   }
   