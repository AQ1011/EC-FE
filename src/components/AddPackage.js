import PackageService from '../services/package.service';
import React,{useState} from 'react';


const AddPackage = () => {
    const [name,setName] = useState('');
    const [quantity,setQuantity] = useState('');
    const [exp,setExp] = useState(0);
    const [price,setPrice] = useState(0);

    function createPackageCustomer() {
        PackageService.createPackageCustomer(name, quantity, exp, price);
        document.getElementsByClassName("ip").value = '';
    }

    return(
    <div>
        Thêm gói dịch vụ
        <input class="ip" placeholder="Ma goi" onChange={(e) => setName(e.target.value)}></input>
        <input class="ip" placeholder="So luong don" onChange={(e) => setQuantity(e.target.value)}></input>
        <input class="ip" placeholder="Thoi han" onChange={(e) => setExp(e.target.value)}></input>
        <input class="ip" placeholder="Gia" onChange={(e) => setPrice(e.target.value)}></input>
        <button onClick={createPackageCustomer}>Thêm</button>
    </div>)
}

export default AddPackage;