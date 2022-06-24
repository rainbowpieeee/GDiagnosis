import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import './GERD.css'

class CalculateGERD extends Component {
    render() {
        return (
            <div className='Table AppointmentList'>
                <BootstrapTable
                    data={this.props.data}

                    >
                    <TableHeaderColumn isKey dataField='id' width='4%'>
                        №
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='name' width='60%' tdStyle={ { whiteSpace: 'normal' } }>
                        Вопрос
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='value1'>
                        0 дней
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='value2'>
                        1 день
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='value3'>
                        2-3 дня
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='value4'>
                        4-7 дней
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default CalculateGERD;