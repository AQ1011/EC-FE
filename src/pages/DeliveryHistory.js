import React from 'react';
import './PagesCss/DeliveryHistory.css'
import MaterialTable from 'material-table'
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function DeliveryHistory() {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Name', field: 'Name' },
        { title: 'Khối lượng', field: 'Khoiluong' },
        { title: 'Loại', field: 'Loai' },
        { title: 'Thời gian', field: 'Thoigian' },
        { title: 'Tổng tiền', field: 'Tongtien' }

    ]);

    const [data, setData] = useState([
        
        { Name: 'Lê Văn Hoàn', Khoiluong: '10kg', Loai: 'dễ vỡ', Thoigian: '30', Tongtien: '100' },
        { Name: 'Lê Văn Hoàn', Khoiluong: '10kg', Loai: 'dễ vỡ', Thoigian: '30', Tongtien: '100' },
        { Name: 'Lê Văn Hoàn', Khoiluong: '10kg', Loai: 'dễ vỡ', Thoigian: '30', Tongtien: '100' },
        { Name: 'Lê Văn Hoàn', Khoiluong: '10kg', Loai: 'dễ vỡ', Thoigian: '30', Tongtien: '100' },
        { Name: 'Lê Văn Hoàn', Khoiluong: '10kg', Loai: 'dễ vỡ', Thoigian: '30', Tongtien: '100' },
    ]);

    return (
        <div>
            <div className="Order-table">
                <div className="useService">
                    
                </div>
                <MaterialTable
                    title="Lịch sử giao hàng"
                    columns={columns}
                    data={data}
                    actions={[
                        {
                            icon: CheckCircleIcon,
                            tooltip: 'select',
                            onClick: (event, newData) => alert("đã chọn")
                        },

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

export default DeliveryHistory;
