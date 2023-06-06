import React from 'react'
import classes from '../css/customerpage.module.css'
 
import Qrimg from '../asset/qr_pay.jpg' 
import UpcomingOffer from './UpcomingOffer'
 
  
function CustomerPage() {
  return (
    <div style={{display:'flex'}}>
      <UpcomingOffer/>
      <div className={classes.main}>

      <div className={classes.header}>
        <h4>BILL NUMBER: 00</h4>
        <h4>ORDER   ID: 000000000000000</h4>
      </div>
        
        <div className={classes.table}>
        <table className="table table-bordered">
  <thead>
    <tr  >
      
      <th  >Item Name</th>
      <th  >QTY</th>
      <th  >Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr  >
      
      <td>Mark</td>
      <td>00</td>
      <td>0000</td>
    </tr>
    <tr>
       
      <td>Jacob</td>
      <td>00</td>
      <td>0000</td>
    </tr>
    <tr>
       <td>marry</td>
      <td>00</td>
      <td>0000</td>
    </tr>
    <tr>
       
      <td>Jacob</td>
      <td>00</td>
      <td>0000</td>
    </tr>
    <tr>
       
      <td>Jacob</td>
      <td>00</td>
      <td>0000</td>
    </tr>
    <tr>
       
      <td>Jacob</td>
      <td>00</td>
      <td>0000</td>
    </tr>
    <tr>
       
      <td>Jacob</td>
      <td>00</td>
      <td>0000</td>
    </tr>
    <tr>
       
      <td>Jacob</td>
      <td>00</td>
      <td>0000</td>
    </tr>
    <tr>
       
      <td>Jacob</td>
      <td>00</td>
      <td>0000</td>
    </tr>
    
    
  </tbody>
</table>

        </div>
<div className={classes.footer}>
        <div className={classes.amount}>
            <h3>TOTAL AMOUNT :</h3>
            <h1>₹1234</h1>
        </div>
        <div  className={classes.pay}>
            <h6>SCAN TO PAY</h6>
             <img  src={Qrimg}  alt='qr' />  
        </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerPage
