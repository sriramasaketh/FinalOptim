import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {placeOrder} from '../services/menuService'
import './OrderForm.css'

const OrderForm = () => {
  const [tableNumber, setTableNumber] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const {state} = useLocation()
  const {order} = state || []
  const navigate = useNavigate()

  const handleOrderSubmit = () => {
    const orderData = {
      table_number: tableNumber,
      contact_number: contactNumber,
      order_date: `${date} ${time}`,
      items: order,
    }

    placeOrder(orderData)
      .then(() => {
        alert('Order placed successfully')
        navigate('/history')
      })
      .catch(error => console.error('Error placing order:', error))
  }

  return (
    <div className='order-form'>
      <h1>Place Your Order</h1>
      <form>
        <div>
          <label>Table Number</label>
          <input
            type='text'
            value={tableNumber}
            onChange={e => setTableNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact Number (Optional)</label>
          <input
            type='text'
            value={contactNumber}
            onChange={e => setContactNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type='date'
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time</label>
          <input
            type='time'
            value={time}
            onChange={e => setTime(e.target.value)}
            required
          />
        </div>
        <button type='button' onClick={handleOrderSubmit}>
          Submit Order
        </button>
      </form>
    </div>
  )
}

export default OrderForm
