import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MaterialTable from 'material-table'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './PageAdmincss/orderManagement.css'
function OrderManagement() {

  const [value, setValue ] = useState(0);
  const onTabClicked = (e, val) => {
    setValue(val);
  }

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
  return (
    <div className="tabs-container">
      <AppBar position= 'static'>
        <Tabs value={value} onChange={onTabClicked}>
          <Tab label='Đang xác nhận' />
          <Tab label='Đã xác nhận' />
          <Tab label='Đang giao' />
          <Tab label='Hoàn thành' />
          <Tab label='Đã hủy' />
        </Tabs>
      </AppBar>
      <Panel value={value} index={0}>
            <div className="table-status">
              <MaterialTable
            columns={columns}
            title='Bảng xác nhận đơn hàng'
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
      </Panel>
      <Panel value={value} index={1}>
        <div className="table-status">
              <MaterialTable
            columns={columns}
            title='Bảng đã xác nhận đơn hàng'
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
      </Panel>
      <Panel value={value} index={2}>
        <div className="table-status">
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
      </Panel>
      {/* <Panel value={value} index={3}>
        <div className="table-status">
              <MaterialTable
            columns={columns}
            title='Bảng hoàn thành'
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
      </Panel> */}
      {/* <Panel value={value} index={4}>
        <div className="table-status">
              <MaterialTable
            columns={columns}
            title='Bảng đã hủy'
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
      </Panel> */}
    </div>
  );
}
function Panel(props){
  const { children, value, index } = props;
  return (<div>
    {value === index && (<div>{ children}</div>)}
  </div>); 
}
export default OrderManagement;
