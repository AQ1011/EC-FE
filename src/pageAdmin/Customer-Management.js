import React from 'react';
import './PageAdmincss/customerManagement.css'
import MaterialTable from 'material-table'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Delete from '@material-ui/icons/Delete';
import user from '../components/Navbar/img/user.png'
import totaluser from '../components/Navbar/img/totaluser.png'
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
              <p className="text-primary-p">NEW USERS</p>
              <p className="text-primary-p">Today</p>
              <span className="font-bold text-title">20</span>
              <img src={user} />
            </div>
        </div>
        <div className="card">
            <div className="card_inner">
            <p className="text-primary-p">TOTAL USERS</p>
            <p className="text-primary-p">1 week</p>
              <span className="font-bold text-title">578</span>
              <img src={totaluser} />
            </div>
          </div>
      </div>
    </div>
    <div className="Orderr-table">
      <MaterialTable
        title="Quản lí khách hàng"
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

export default CustomerManagement;
