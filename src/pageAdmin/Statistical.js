// import React from 'react';
import './PageAdmincss/statistical.css'
import { Bar, Pie } from 'react-chartjs-2';
import imgchart from '../components/Navbar/img/chart.png'

function Statistical() {
    return (
        <div className="contain">
        <div className="chart-container">
            <div className="app">
                <Bar
                    data={{
                        labels: ['Thu2', 'Thu3', 'Thu4', 'Thu5', 'Thu6', 'Thu7'],
                            datasets: [{
                            label: 'Đơn hàng trong tuần',
                            data: [100, 200, 300, 400, 500, 600],
                            backgroundColor:'red'
                        }]
                    }}
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                    >
                </Bar>
                
            </div>
            </div>

            <div className="total-container">
                <h4>Tổng số đơn trong ngày</h4>
                <h3>1000</h3>
            </div>

            <div className="chart-pie-container">
                <div className="app-pie">
                    <Pie
                    data={{
                        labels:['Thu2', 'Thu3', 'Thu4', 'Thu5', 'Thu6', 'Thu7'],
                        datasets:[{
                        data:[100, 200, 300, 400, 500, 600],
                        backgroundColor:['red','green','orange','purple','cyan','blue'],
                        }]}}>
                    </Pie>
                </div>
            </div>
            <div className="img-chart-container">
                <img src={imgchart} />
            </div>
        </div>
        
        
    );
}
export default Statistical;
