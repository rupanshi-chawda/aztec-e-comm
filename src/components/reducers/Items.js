import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg'
import Item9 from '../../images/item9.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/action-types/operations'


const initState = {
    items: [
        {id:1,title:'Winter', desc: "Tribal print, Multicolor dress available in all sizes, can be ordered in custom made basis. ", price:1400,img:Item1},
        {id:2,title:'Ajio', desc: "Tribal print, Multicolor dress available in all sizes, can be ordered in custom made basis. ", price:1800,img: Item2},
        {id:3,title:'Biba', desc: "Tribal print, Multicolor dress available in all sizes, can be ordered in custom made basis. ",price:2100,img: Item3},
        {id:4,title:'Adidas', desc: "Tribal print, comfortable shoes available in all sizes.", price:2099,img:Item4},
        {id:5,title:'Nike', desc: "Tribal print, comfortable shoes available in all sizes.", price:1049,img: Item5},
        {id:6,title:'Bata', desc: "Tribal print, comfortable shoes available in all sizes.",price:900,img: Item6},
        {id:7,title:'Shein', desc: "Tribal print, minimalistic designed accessories, earrings.", price:110,img:Item7},
        {id:8,title:'AztecInc', desc: "Tribal print, minimalistic designed accessories, handbag", price:480,img: Item8},
        {id:9,title:'Veer', desc: "Tribal print, minimalistic designed accessories, necklace",price:120,img: Item9}

    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    
  else{
    return state
    }
    
}

export default cartReducer
