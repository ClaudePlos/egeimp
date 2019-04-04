import React, {Component} from 'react';
import Header from '../common/Header';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Mo.css';

class MoFront extends Component {

    constructor(){
        super();

        var today = new Date(),
            date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();


        this.state = {
            date: date,
            location: [
                {
                    id: 0,
                    title: 'New York',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 1,
                    title: 'Dublin',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 2,
                    title: 'California',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 3,
                    title: 'Istanbul',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 4,
                    title: 'Izmir',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 5,
                    title: 'Oslo',
                    selected: false,
                    key: 'location'
                }
            ],
            rowData: [
                {lp: "1", nameDiet: "Celica", s: 35, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "2", nameDiet: "Mondeo", s: 32, s2: 35},
                {lp: "3", nameDiet: "Boxter", s: 72, s2: 35}
            ]
        }
    }

    render() {

        console.log(this.state.date);

        return (
                <div>
                    <Header/>




                    <div>
                        <div>
                            MapiOrder #01

                            <div>
                                <input type="date" id="start"  name="trip-start" value={this.state.date}></input>
                            </div>

                            <div className="form-m01">

                                <select className="form-control">
                                    <option>--select KK--</option>
                                    {
                                        this.state.location &&
                                        this.state.location.map((h, i) =>
                                            (<option key={i} value={h.id}>{h.title}</option>))
                                    }
                                </select>

                                <select className="form-control">
                                    <option>--select GZ--</option>
                                    {
                                        this.state.location &&
                                        this.state.location.map((h, i) =>
                                            (<option key={i} value={h.id}>{h.title}</option>))
                                    }
                                </select>

                                <button className="button">Zapisz</button>

                            </div>
                        </div>



                    </div>


                    <div className="ag-theme-balham" style={{ height: '100%', width: '100%', marginBottom: '20px', marginTop: '20px' }}>
                        <AgGridReact
                            rowData={this.state.rowData}>
                            <AgGridColumn headerName="LP" field="lp" width={55} filter="text" sortable resizable></AgGridColumn>
                            <AgGridColumn headerName="Nazwa Diety" field="nameDiet" width={150} filter="text" sortable resizable></AgGridColumn>
                            <AgGridColumn headerName="Planowanie">
                                <AgGridColumn headerName="S" field="s" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="II S" field="s2" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="O" field="o" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="P" field="p" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="K" field="k" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="PN" field="PN" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="Uwagi" field="comments" width={200} filter="text" editable={true} resizable></AgGridColumn>
                            </AgGridColumn>

                            <AgGridColumn headerName="Korekta">
                                <AgGridColumn headerName="S" field="s" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="II S" field="s2" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="O" field="o" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="P" field="p" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="K" field="k" width={60} filter="text" editable={true} resizable></AgGridColumn>
                                <AgGridColumn headerName="PN" field="PN" width={60} filter="text" editable={true} resizable></AgGridColumn>
                            </AgGridColumn>


                        </AgGridReact>
                    </div>


                </div>




        )
    }


}
export default (MoFront);