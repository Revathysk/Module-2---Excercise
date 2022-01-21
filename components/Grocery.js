
class Grocery extends React.Component {
    render() {
        {console.log(this.props.grocerylist.item,this.props.grocerylist.isPurchased)}
        return (
            <div class='itemlist' onClick={()=> this.props.handlePurchase(this.props.grocerylist)}>
                <li id ='grocery'> 
                    {this.props.grocerylist.item} -
                    {this.props.grocerylist.quantity} -
                    {this.props.grocerylist.brand}
                </li>     
            </div>     
        );
    }
}


