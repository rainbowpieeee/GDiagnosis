import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import './RSI.css'
import cellEditFactory,{ Type } from 'react-bootstrap-table2-editor';

class CalculateRSI extends Component {
    render() {

        const cellEditProp=cellEditFactory({
            mode:'dbclick',
            blurToSave: true,
            afterSaveCell: this.handleChange=(oldValue, newValue, row, column) =>{
                if (newValue!==oldValue)
                {const newData={value:newValue,
                    id:row['id'],
                    field:column.dataField
                }
                    this.props.data(newData);
                }
            }
        });
        return (
            <div className='Table AppointmentList'>
                <BootstrapTable data={this.props.data} cellEdit={cellEditProp}>
                    <TableHeaderColumn isKey dataField='id' width='4%'>
                        №
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='name' width='60%' thStyle={ { whiteSpace: 'normal' }}>
                        В течение последнего месяца насколько следующие проблемы Вас беспокоили?
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='editor'>
                        0 - нет проблем;
                        5 - серьезные
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default CalculateRSI;