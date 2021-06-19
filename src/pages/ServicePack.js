import React, {useEffect, useState} from 'react';
import './PagesCss/ServicePack.css'
import MaterialTable from 'material-table'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Delete from '@material-ui/icons/Delete';
import AddPackage from '../components/AddPackage';

import PackageService from '../services/package.service';
function ServicePack() {
  const [packs, setPacks] = useState([]);

  useEffect(() =>{
    PackageService.getAllPackages().then(response => {
      setPacks(response.data)
      console.log(packs)
    });
  },[])

  const [columns, setColumns] = useState([
    { title: 'Tên vận chuyển', field: 'Tenvanchuyen' },
    { title: 'Mã dịch vụ', field: 'Madichvu' },
    { title: 'Mã gói', field: 'name'},
    { title: 'Số lượng đơn', field: 'description' },
    { title: 'Thời hạn', field: 'expiryDate' },
    { title: 'Giá', field: 'cost'}
    
  ]);

  const [data, setData] = useState([
    { Tenvanchuyen:'Grap',Madichvu: '181000', Magoi: 'MG1', SLD: 1987, Thoihan: 30,Gia:10 },
    { Tenvanchuyen:'Grap',Madichvu: '181000', Magoi: 'MG2', SLD: 2017, Thoihan: 10, Gia: 10 },
    { Tenvanchuyen:'Shipchung',Madichvu: '290700', Magoi: 'MG2', SLD: 2017, Thoihan: 10, Gia: 10 },
    { Tenvanchuyen:'LalaMove',Madichvu: '191000', Magoi: 'MG2', SLD: 2017, Thoihan: 10, Gia: 10 },
    { Tenvanchuyen:'GHN',Madichvu: '280200', Magoi: 'MG2', SLD: 2017, Thoihan: 10, Gia: 10 },
    { Tenvanchuyen:'GHN',Madichvu: '280200', Magoi: 'MG2', SLD: 2017, Thoihan: 10,Gia:10 },
  ]);

return (
    <div>
        <div className="Order-table">
            <div className="useService">
                <p1>Gói dịch vụ đang sử dụng: </p1>
            </div>
            
      <AddPackage/> 
      <MaterialTable
        title="Gói dịch vụ"
        columns={columns}
        data={packs}
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
