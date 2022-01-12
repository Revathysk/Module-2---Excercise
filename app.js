

class App extends React.Component {

    state = {
        gList: groceryList,
        listitems:['Milk']
    }

    render(){
        console.log('APP',this.state.gList)       
        
        return(            
            <div class ="main-div">
                
                <div class="itemslist">
                    <h1> Template List </h1>  

                    <ul>
                        { this.state.gList.map((gitems)=>
                        <li> {gitems.item} - {gitems.brand} - {gitems.quantity} </li> )
                        } 
                    </ul>
                    <button id='addTemplate' onClick={handleAddList()}> Add to GroceryList</button>
                    <button id='addPurchase'> Add to Purchase</button>
                </div>

                <div class="topurchase">
                    <h1> Purchase List </h1>                               
            
                    <ul>
                        {this.state.listitems}
                    </ul>
                    <button id='removepurchase'> Remove </button>
                </div>
            </div>
        )
    }
}
 
ReactDOM.render(
    <App/>,
    document.querySelector('#container')
)
