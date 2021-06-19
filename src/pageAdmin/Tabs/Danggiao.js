import React, {useState} from 'react';
import MaterialTable from 'material-table'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import '../PageAdmincss/xacnhan.css'
export default function Danggiao() {

  const [columns, setColumns] = useState([
    { title: 'Mã đơn', field: 'madon' },
    { title: 'Ngày giao', field: 'ngaygiao'},
    { title: 'Tên sản phẩm', field: 'tensanpham' },
    { title: 'Giá', field: 'gia' },
    { title: 'Trạng thái', field: 'trangthai'}
    
  ]);
  const [data, setData] = useState([
    { madon: '111', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000',trangthai:'Đang giao' },
    { madon: '222', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000', trangthai: 'Đang giao' },
    { madon: '333', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000', trangthai: 'Đang giao' },
    { madon: '444', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000', trangthai: 'Đang giao' },
    { madon: '555', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000', trangthai: 'Đang giao' },
    { madon: '666', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000',trangthai:'Đang giao' },
  ]);
  return (
        <div className="tables-status">
              <MaterialTable
            columns={columns}
            title='Bảng đang giao'
            data={data}
            actions={[
              {
                icon: CheckCircleIcon,
                tooltip: 'xác nhận',
                onClick: (event, newData) => alert("đã xác nhận")
              }]}
              options={{
                actionsColumnIndex: -1,
              }}/>
            </div>
  );
}
