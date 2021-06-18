import React from 'react';
import './PageAdmincss/servicePackManagement.css'
import MaterialTable from 'material-table'
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import totaldichvu from '../components/Navbar/img/totaldichvu.png'
function CustomerManagement() {
    const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Id', field: 'id' },
    { title: 'Name', field: 'name'},
    { title: 'Email', field: 'email' },
    { title: 'Gender', field: 'gender' },
    { title: 'Phone', field: 'phone'}
    
  ]);

  const [data, setData] = useState([
    { id: '1', name: 'Lê Văn Hoàn', email: 'hoan@gmail.com', gender: 'nam',phone:'012343456' },
    { id: '2', name: 'Ngô Anh Quốc', email: 'hoan@gmail.com', gender: 'nam', phone: '012343456' },
    { id: '3', name: 'Nguyễn Hoàng Huy', email: 'hoan@gmail.com', gender: 'nam', phone: '012343456' },
    { id: '4', name: 'Nguyễn Thành Công', email: 'hoan@gmail.com', gender: 'nam', phone: '012343456' },
    { id: '5', name: 'Trần Phương Linh', email: 'hoan@gmail.com', gender: 'nam', phone: '012343456' },
    { id: '6', name: 'Phạm Tấn Đạt', email: 'hoan@gmail.com', gender: 'nam',phone:'012343456' },
  ]);

return (
  <div>
    <div className="main__container">
      <div className="main__cards">
          <div className="card">
            
            <div className="card_inner">
              <p className="text-primary-p">Tổng dịch vụ</p>
              <span className="font-bold text-title">20</span>
              <img src={totaldichvu} />
            </div>
        </div>
        
      </div>
    </div>
    <div className="Orderr-table">
      <div className="btn-them">
        <Button variant="contained" color="secondary">
          Add
        </Button>
      </div>
      <MaterialTable
        
        title="Quản lí dịch vụ"
        columns={columns}
        data={data}
            actions={[
            {
                icon: Edit,
                tooltip: 'edit',
                onClick: (event, newData) => alert("đã sửa")
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

export default CustomerManagement;
