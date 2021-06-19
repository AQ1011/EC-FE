import React, {useState} from 'react';
import MaterialTable from 'material-table'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Delete from '@material-ui/icons/Delete';
import '../PageAdmincss/xacnhan.css';
import { useHistory } from 'react-router-dom';
export default function Dangxacnhan() {

  const [columns, setColumns] = useState([
    { title: 'Mã đơn', field: 'madon' },
    { title: 'Ngày giao', field: 'ngaygiao'},
    { title: 'Tên sản phẩm', field: 'tensanpham' },
    { title: 'Giá', field: 'gia' },
    { title: 'Trạng thái', field: 'trangthai'}
    
  ]);
  const [data, setData] = useState([
    { madon: '111', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000',trangthai:'Đang xử lí' },
    { madon: '222', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000', trangthai: 'Đang xử lí' },
    { madon: '333', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000', trangthai: 'Đang xử lí' },
    { madon: '444', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000', trangthai: 'Đang xử lí' },
    { madon: '555', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000', trangthai: 'Đang xử lí' },
    { madon: '666', ngaygiao: '17/06/2021', tensanpham: 'Trà chanh mật ong', gia: '10000',trangthai:'Đang xử lí' },
  ]);
  const history = useHistory();
  return (
        <div className="tables-status">
              <MaterialTable
            columns={columns}
            title='Bảng đang xác nhận'
            data={data}
            actions={[
              {
                icon: CheckCircleIcon,
                tooltip: 'xác nhận',
                onClick: (event, newData) => alert("đã xác nhận")
              },
              {
                icon: Delete,
                tooltip: 'Xóa',
                onClick: (event, newData) => alert("đã xóa")
              },
            ]}
              options={{
                actionsColumnIndex: -1,
              }}/>
            </div>
  );
}
