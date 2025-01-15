import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Chip from '@mui/material/Chip';


 export const CartItem = ({/* item */}) => {
   /*
      const { auth,cart } = useSelector((store) => store);
      const navigate = useNavigate();
      const dispatch=useDispatch()
      const jwt=localStorage.getItem("jwt");

      const handleUpdateCartItem=(value)=>{
         if(value===-1 && item.quantity===1){
           handleRemoveCartItem()
         }

         const data={cartItemId:item.id,quantity:item.quantity+value}
         dispatch(updateCartItem({data,jwt}))
      }

      const handleRemoveCartItem=()=>{
          dispatch(removeCartItem({cartItemId:item.id,jwt:auth.jwt  || jwt}))
      }
   
   */

   return (
     <div className="px-5">
       <div className="lg:flex items-center lg:space-x-5">
         <div>
           <img
             className="w-[5rem] h-[5rem] object-cover"
             src="https://images.unsplash.com/photo-1710091691777-3115088962c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D"
             alt=""
             //src={item.food.images[0]}
           />
         </div>
         <div className="flex items-center justify-between lg:w-[70%]">
           <div className="space-y-1 lg:space-y-3 w-full">
             <p>biryani</p> {/*item.food.name */}
             <div className="flex justify-between items-center">
               <div className="flex items-center space-x-1">
                 <IconButton >   {/*onClick={()=>handleUpdateCartItem(-1)} */}
                   <RemoveCircleOutlineIcon />
                 </IconButton>
                 <div className="w-5 h-5 text-xs flex items-center
                  justify-center">
                   {5} {/* item.quantity */}
                 </div>
                 <IconButton> {/*onClick={()=>handleUpdateCartItem(1)} */}
                   <AddCircleOutlineIcon />
                 </IconButton>
               </div>
             </div>
           </div>
           <p> Rs.900{/*item.totalPrice */}</p>
         </div>
       </div>
       <div className="pt-3 space-x-2">
         {/* item.ingredients */[1, 1, 1].map((ingredient) => (
           <Chip label={"bread"}/*{item} */ />
         ))}
       </div>
     </div>
   );
 };

 export default CartItem;

