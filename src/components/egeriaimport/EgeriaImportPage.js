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

const newPerson = () => {
    return {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age2: 23,
        }
    };
};

function makeData( data ) {
    return range().map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
}

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

            csv.parse(reader.result, (err, data) => {
                console.log(err);
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
                headers=dataCVS[0].toString().split(";");
                //https://gist.github.com/iwek/7154578
                for (let j = 0; j < headers.length; j++) {
                    cell.push({ id:headers[j], Header:headers[j], accessor:headers[j] });
                }

            }

            if ( i != 0 ) {
                var row=dataCVS[i].toString().split(";");
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

    render() {
        return (
            <div>
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
                <button onClick={function(){this.setState({dataSet:[ {name: 'Tanner Linsley',
                    age: 26,
                    friend: {
                        name: 'Klaud',
                        age: 36,
                    }}]})}.bind(this)}>change-data</button>
            </div>
        );
    }
}



export default EgeriaImportPage;