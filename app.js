//     item: 'Milk',
//     brand: 'Organic Valley',
//     units: '1 Gallon',
//     quantity: 0,
//     isPurchased: false



class App extends React.Component {

    state = {
        gList: groceryList,
        item:'',
        brand:'',
        quantity:'1',        
        purchaseItems:[]
    }

    removeItem=(item)=>{
       
        
       console.log('remove:',item)
       let index = this.state.purchaseItems.indexOf(item);
       console.log('index',index)
        if (index > -1) {
            console.log('array slice')
            console.log('purchase:', this.state.purchaseItems[index])
            this.state.purchaseItems.splice(index, 1) }
       this.setState({
           purchaseItems: this.state.purchaseItems
       })        

    }

    addtoPurchase=(item)=> {
        this.setState({
        purchaseItems: [item,...this.state.purchaseItems]
        })
         
    }
    
    handleChange=(event)=>{
        this.setState({
            [event.target.id]: event.target.value            
        })
    }

    handleAdd=(event)=>{

        event.preventDefault();

        // console.log('in handleAdd to list',this.state.item)  
              
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: '1',
            quantity: this.state.quantity,
            isPurchased:false
        }

        this.setState({
             gList: [newItem,...this.state.gList],
             item:'',
             brand:'',
             quantity:'1',
        } )       
    }

    render()    {    
        
        return(            
            <div class ="main-div">
                
                <div id="additems">
                    <form>
                        <label htmlFor="Itemname"> Item Name</label>
                        <input id="item" type="text" value={this.state.item} onChange={this.handleChange}/>
                        <label htmlFor="Itembrand"> Item Brand</label>
                        <input id="brand" type="text" value={this.state.brand} onChange={this.handleChange}/>
                        <label htmlFor="quantity"> Quantity </label>
                        <input id="quantity" type="number" value={this.state.quantity} onChange={this.handleChange}/>
                    </form>

                    <button id='addtolist' onClick={this.handleAdd}> Add To List</button>
                  
                </div>

                <div class="glist">
                    <h1> Grocery List </h1>  
                    <ul>
                        {this.state.gList.map((grocerylist) =>
                         <Grocery grocerylist={grocerylist} handlePurchase={this.addtoPurchase}/>                   
                        )
                    }                    
                    </ul>
                </div>
                
                <div class="glist">
                    <h1> Purchase List </h1>                        
                    
                    <ul>
                        {   this.state.purchaseItems.map
                            ( (purchaselist) => !purchaselist.isPurchased ? <Purchase purchaselist={purchaselist} handleRemove={this.removeItem}/> : null)
                                // ( <li > {purchaselist.item} - {purchaselist.brand} - {purchaselist.quantity}  
                                //  <button onClick={()=> this.removeItem(purchaselist) } id='Remove'> Remove </button> 
                                // </li>)                                                           
                        }                                            
                    </ul>
                    
                    {}
                </div>

            </div>
        )
    }
}
 
ReactDOM.render(
    <App/>,
    document.querySelector('#container')
)
