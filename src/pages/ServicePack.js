import React from 'react';
import './PagesCss/ServicePack.css'
import MaterialTable from 'material-table'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Delete from '@material-ui/icons/Delete';
function ServicePack() {
    const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Mã dịch vụ', field: 'Madichvu' },
    { title: 'Mã gói', field: 'Magoi'},
    { title: 'Số lượng đơn', field: 'SLD' },
    { title: 'Thời hạn', field: 'Thoihan' },
    { title: 'Giá', field: 'Gia'}
    
  ]);

  const [data, setData] = useState([
    { Madichvu: '181000', Magoi: 'MG1', SLD: 1987, Thoihan: 30,Gia:10 },
    { Madichvu: '280200', Magoi: 'MG2', SLD: 2017, Thoihan: 10, Gia: 10 },
    { Madichvu: '280200', Magoi: 'MG2', SLD: 2017, Thoihan: 10, Gia: 10 },
    { Madichvu: '280200', Magoi: 'MG2', SLD: 2017, Thoihan: 10, Gia: 10 },
    { Madichvu: '280200', Magoi: 'MG2', SLD: 2017, Thoihan: 10, Gia: 10 },
    { Madichvu: '280200', Magoi: 'MG2', SLD: 2017, Thoihan: 10,Gia:10 },
  ]);

return (
    <div>
        <div className="Order-table">
            <div className="useService">
                <p1>Gói dịch vụ đang sử dụng: </p1>
            </div>
      <MaterialTable
        title="Gói dịch vụ"
        columns={columns}
        data={data}
        actions={[
          {
            icon: CheckCircleIcon,
            tooltip: 'Select',
            onClick: (event,newData) => alert("sửa")
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
          search:false,
      }}
        />
    </div>
</div>
        
    
    
  )
}

export default ServicePack;
