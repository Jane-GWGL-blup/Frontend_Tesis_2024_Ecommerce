import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import AdminManageOrders from "../../components/admin/AdminManageOrders";
import { getOrderByUserId } from "../../services/OrderService";

const UserOrderHistoryPage = () =>{ 
    const {userId} = useParams();
    const [orders,setOrders] = ([])
    const [loading,setLoading] = (true);

    useEffect (() => {
        const fetchOrders = async () => {
            try {
                const userOrder = await getOrderByUserId(userId)
                setOrders(userOrder)
            } catch (error) {
                console.error(`Error fetching orders for user ${userId}:`,error)
            }finally{
                setLoading(false)
            }
        }
        fetchOrders(false)
    },[userId])

    if (loading) {
        return <p>Loading orders ...</p>
    }

    return (
        <div>
            <h2>Orders History for User ${userId}</h2>
            <AdminManageOrders orders={orders}/>
        </div>
    )
}
export default UserOrderHistoryPage;