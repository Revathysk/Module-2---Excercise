
class Grocery extends React.Component {
    render() {
        return (
            <div> 
                <li onClick={()=> this.props.handlePurchase(this.props.grocerylist)}> 
                    {this.props.grocerylist.item} - {this.props.grocerylist.brand} - {this.props.grocerylist.quantity} 
                </li>     
            </div>
        );
    }
}


