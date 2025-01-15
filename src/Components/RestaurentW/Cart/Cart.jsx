import { Divider } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux';

const items=[1,1]

const Cart = () => {
  /*
  const createOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModel = () => setOpen(true);
  const [open,setOpen] = React.useState(false);
  const {cart,auth}=useSelector(store=>store)
  const dispatch=useDispatch()

  const handleClose = () => setOpen(false);
  const handleSubmit = (value) => {

     const data={
        jwt:localStorage.getItem("jwt"),
        order:{
          restaurantId:cart.cartItems[0].food?.restaurant.id,
          deliveryAddress:{
            fullName:auth.user?.fullName,
            streetAddress:values.streetAddress,
            city:values.city,
            state:values.state,
            postalCode:values.pincode,
            country:"Sri Lanka"
          }
        }
     }
       dispatch(createOrder(data))
       console.log("form value ",values)
    };

  */
  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {/*cart.cart?*/items.map((item) => (
            <CartItem /*item={item}*/   />
          ))}
            <Divider />
            <div className='billDetails px-5 text-sm'>

                <p className='font-extralight py-5'>Bill Details</p>
                <div className='space-y-3'>
                    <div className='flex justify-between text-gray-400 '>
                         <p>Item Total</p>
                         <p>Rs.600</p> {/*cart.cart.total */}
                          
                    </div>
                    <div className='flex justify-between text-gray-400 '>
                         <p>Deliver Fee</p>
                         <p>Rs.300</p>
                    </div>
                    <div className='flex justify-between text-gray-400 '>
                         <p>GST and Restaurant Cherges</p>
                         <p>Rs.150</p>
                    </div>
                    <Divider/>
                </div>
              <div className='flex justify-between text-gray-400'>
                  <p>Total Pay</p>
                  <p>Rs.1050</p>  
                  {/*cart.cart?.total+33+21 */}
              </div>
            </div>
        </section>
       <Divider orientation='vertical' flexItem/>
       <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
            
 
 
       </section>
        
      </main>
    </div>
  );
};

export default Cart
