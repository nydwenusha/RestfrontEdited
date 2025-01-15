import { IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const RestaurantCard = (/*{item}*/) => {

   /*const navigate=useNavigate() 
     const dispatch=useDispatch();
     const jwt=localStorage.getItem("jwt")
     const {auth}=useSelector(store=>store)

     const handleAddToFavorite=()=>{
         dispatch(addToFavorite({restaurantId:item.id,jwt}))
      }

      const handleNavigateToRestaurant=()=>{
        if(item.open){
           navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)
        }
      }
     */


  return (
    <Card className="w-[18rem]">
      <div
        className={`${
          true ? "cursor-pointer" : "cursor-not-allowed"
        } relative `}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://images.unsplash.com/photo-1497644083578-611b798c60f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""

          /*
          src={item.images[1]}
          */
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true?"success":"error"}    /* color={item.open?"success":"error"}*/
          label={true?"open":'closed'}      /* label={item.open?"open":'closed'}*/
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
              <p /*onClick={handleNavigateToRestaurant} */className="font-semibold text-lg cursor-pointer">Midland Restaurant{/*{item.name}*/}</p>    
              <p className="text-gray-500 text-sm">
                  Craving it all? Dive into our global fla...
                  {/*{item.description}*/}
              </p>

               

        </div>
        <div>
            <IconButton /* onClick={handleAddToFavorite} */>
                {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                {/*  {isPresentInFavorites(auth.favorites,item)?<FavoriteIcon/
                >:<FavoriteBorderIcon/>} */}
            </IconButton>
        </div>


      </div>
    </Card>
  );
};

export default RestaurantCard;
