import axios from 'axios'

export const fetchMenu = () => axios.get('/api/menu')

export const postOrder = order => axios.post('/api/orders', order)

export const fetchOrders = () => axios.get('/api/orders')
