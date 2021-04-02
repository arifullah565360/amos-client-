import {useState, useEffect, useContext} from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [orders , setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    useEffect(() => {
        fetch('https://young-beyond-69977.herokuapp.com/order?email='+loggedInUser.email)
          .then(res => res.json())
          .then(data => setOrder(data) )
    }, [])


    return (
        <div>
            <h3>you have :{orders.length} </h3>
            {
                orders.map(order => <li>User:{order.userName}  Product: {order.productName} {(new Date(order.date).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Order;