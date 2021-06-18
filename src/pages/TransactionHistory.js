import React from 'react';
import './PagesCss/TransactionHistory.css'
import MaterialTable from 'material-table'
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function TransactionHistory() {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Name', field: 'Name' },
        { title: 'Số tiền giao dịch', field: 'Tiengiaodich' },
        { title: 'Ngày giao dịch', field: 'Ngaygiaodich' },

    ]);

    const [data, setData] = useState([
        
        { Name: 'Lê Văn Hoàn', Tiengiaodich: '1.000.000', Ngaygiaodich: '16/6/2021'},
        { Name: 'Hồng Ân', Tiengiaodich: '7.000.000', Ngaygiaodich: '16/6/2021'},
        { Name: 'Trần Phương Linh', Tiengiaodich: '10.000.000', Ngaygiaodich: '16/6/2021'},
        { Name: 'Nguyễn Thị Minh Nguyệt', Tiengiaodich: '500.000', Ngaygiaodich: '16/6/2021'},
        { Name: 'Trang Đỗ', Tiengiaodich: '800.000', Ngaygiaodich: '16/6/2021'},
    ]);

    return (
        <div>
            <div className="Order-table">
                <div className="useService">
                    
                </div>
                <MaterialTable
                    title="Lịch sử giao dịch"
                    columns={columns}
                    data={data}
                    actions={[
                        
                        rowData => ({
                            icon: Delete,
                            tooltip: 'Delete User',
                            onClick: (event, rowData) => new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataDelete = [...data];
                                    const index = rowData.tableData.id;
                                    dataDelete.splice(index, 1);
                                    setData([...dataDelete]);

                                    resolve()
                                }, 1000)
                            }),
                        })
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                    }}
                />
            </div>
        </div>



    )
}

export default TransactionHistory;
