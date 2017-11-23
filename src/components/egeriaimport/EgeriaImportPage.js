import React from 'react';
import Header from '../common/Header';
import ReactFileReader from "react-file-reader";
import ReactTable from 'react-table'
import "react-table/react-table.css";
import csv from 'csv';
import styles from './EgeriaImportPage.css';

const products = [];


class EgeriaImportPage extends React.Component {
    constructor(){
        super();
        this.state ={
            status:false
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <DataFromCSV/>
            </div>
        );
    }

}

function addProducts(quantity) {
    const startId = products.length;
    for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
            name: 'Tanner Linsley',
            age: 26+i,
            friend: {
                name: 'Jason Maurer',
                age2: 23+i,
            }
        });
    }
};

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};



export class DataFromCSV extends React.Component {
    constructor(){
        super();
        this.state = {dataSet:[
            {name: 'Tanner Linsley',
                age: 26,
                friend: {
                    name: 'Jason Maurer',
                    age: 23,
                }}
        ], columns:[{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
        }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
        }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
        }]
            , formatDelimeter: ';'
            , formatCash: ','
        };
    }

    handleFiles = files => {
        var reader = new FileReader();
        reader.onload = (upload) => {
            // Use reader.result
            //console.log(reader.result);
            //alert(reader.result)

            console.log(reader);
            console.log(reader.result);

            csv.parse(reader.result, {delimiter: this.state.formatDelimeter}, (err, data) => {
                console.log(err);
                console.log("csv-parse");
                console.log(data);
                this.parseCSV(data)
            });
        }
        reader.readAsText(files[0]);
    };


    parseCSV(dataCVS) {

        var cell = [];
        var rows = [];
        var headers;

        for (let i = 0; i < dataCVS.length; i++) {

            if (i == 0) {
                headers=dataCVS[0];
                //https://gist.github.com/iwek/7154578
                for (let j = 0; j < headers.length; j++) {
                    cell.push({ id:headers[j], Header:headers[j], accessor:headers[j] });
                }
            }

            if ( i != 0 ) {
                var row=dataCVS[i];
                var rowObject = {};
                for (let j = 0; j < row.length; j++) {
                    rowObject[headers[j]] = row[j] ;

                    if ( j == headers.length-1 ){
                        rows.push( rowObject );
                    }
                }
            }
        }

        console.log("!!!!!!!!!!!!!!!");
        console.log(rows);

        this.setState({columns: cell })
        this.setState({dataSet: rows })
    };

    updateFormatDelimeter(evt) {
        this.setState({
            formatDelimeter: evt.target.value,
        });
    }

    updateFormatCash(evt) {
        this.setState({
            formatCash: evt.target.value,
        });
    }

    render() {
        return (
            <div>
                formatDelimeter: <input type="text" size="3" value={this.state.formatDelimeter} onChange={evt => this.updateFormatDelimeter(evt)}/>
                formatCash: <input type="text" size="3" value={this.state.formatCash} onChange={evt => this.updateFormatCash(evt)}/>
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                    <button className='btn'>Upload</button>
                </ReactFileReader>
                <ReactTable
                    //loading={products}
                    data={this.state.dataSet}
                    columns={this.state.columns}
                    className="react-table -striped -highlight"
                    style={{ height: '100%' }}
                />
            </div>
        );
    }
}



export default EgeriaImportPage;