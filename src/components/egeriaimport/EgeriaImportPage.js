import React from 'react';
import Header from '../common/Header';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import csv from 'csv/lib/es5';
import styles from './EgeriaImportPage.css';
import * as egeriaActions from '../../actions/sessionActionsEgeria';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const products = [];


class EgeriaImportPage extends React.Component {
    constructor(props){
        super(props);
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
    constructor(props){
        super(props);
        this.state = {
            dataSet:[
            // {name: 'Tanner Linsley łś',
            //     age: 26,
            //     friend: {
            //         name: 'Jason Maurer śćł',
            //         age: 23,
            //     }}
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
        }], daneGotoweDoWyslaniaJSON:[]
            , formatDelimeter: ',' // może być ; lub ,
            , formatCash: '.' // can be . or ,
        };
        this.onClickUploadDataToEgeria = this.onClickUploadDataToEgeria.bind(this);



        this.handleClick = this.handleClick.bind(this);
        this.inputFileChanged = this.inputFileChanged.bind(this);

    }

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

        console.log("parseCSV-l.142");
        //console.log(rows);
        this.setState({daneGotoweDoWyslaniaJSON: rows })
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

    onClickUploadDataToEgeria(event) {
        event.preventDefault();
        console.log('Upload data to Egeria.');
        const dataJSON = this.state.daneGotoweDoWyslaniaJSON;
        this.props.actions.actUploadDataInvoiceMotozegToEgeria(dataJSON);
    }


    handleClick(){

        let input = this.refs.input_reader;
        input.click();
    };

    inputFileChanged(e){
        if(window.FileReader){
            let file = e.target.files[0], reader = new FileReader(), self = this;
            reader.onload = function(r){

                csv.parse(reader.result, {delimiter: self.state.formatDelimeter}, (err, data) => {
                    console.log(err);
                    console.log("csv-parse");
                    console.log(data);
                    self.parseCSV(data)
                });

            }
            //reader.readAsDataURL(file);
            reader.readAsText(file, 'Windows-1250'); // kodowanie znakow wazne !!!
        }
        else {
            alert('Soryy, your browser does\'nt support for preview');
        }
    }


    render() {
        const { accept, capture, multiple } = this.props, { src, value } = this.state;
        return (

            <div>
                formatDelimeter: <input type="text" size="3" value={this.state.formatDelimeter} onChange={evt => this.updateFormatDelimeter(evt)}/>
                formatCash: <input type="text" size="3" value={this.state.formatCash} onChange={evt => this.updateFormatCash(evt)}/>

                <div class="row">

                    <button onClick={this.handleClick}>Upload</button>
                    <input type="file" ref="input_reader" accept={Array.isArray(accept) ? accept.join(',') : accept} multiple={multiple} capture={capture} style={{display:'none'}} onChange={this.inputFileChanged}/>

                    <input
                        type="submit"
                        value="Wgraj do Egerii"
                        className="btn btn-primary"
                        onClick={this.onClickUploadDataToEgeria}/>

                </div>

                <ReactTable
                    //loading={products}
                    data={this.state.dataSet}
                    columns={this.state.columns}
                    className="react-table -striped -highlight"
                    style={{ height: '100%' }}
                    charset="utf-8"
                />
            </div>
        );
    }
}

DataFromCSV.defaultProps = {
    accept: '.csv',
    capture: true,
    multiple: false
}
DataFromCSV.propTypes = {
    accept: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    capture: PropTypes.bool,
    multiple: PropTypes.bool
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(egeriaActions, dispatch)
    };
}
export default connect(null, mapDispatchToProps)(DataFromCSV, EgeriaImportPage);
