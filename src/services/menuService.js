import {fetchMenu, postOrder, fetchOrders} from '../api/api'

export const getMenu = async () => {
  try {
    const response = await fetchMenu()
    return response.data
  } catch (error) {
    console.error('Error fetching menu', error)
  }
}

export const placeOrder = async order => {
  try {
    const response = await postOrder(order)
    return response.data
  } catch (error) {
    console.error('Error placing order', error)
  }
}

export const getOrderHistory = async () => {
  try {
    const response = await fetchOrders()
    return response.data
  } catch (error) {
    console.error('Error fetching order history', error)
  }
}
