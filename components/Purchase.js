class Purchase extends React.Component {
    render() {
        return (
            <div class='itemlist'>
                  {/* { !this.props.purchaselist.isPurchased ? */}
                       <li id='purchase'>{this.props.purchaselist.item} - {this.props.purchaselist.brand} - {this.props.purchaselist.quantity} 
                        </li>
                        <button onClick={()=> this.props.handleRemove(this.props.purchaselist) } id='Remove'> Remove </button>
                        {/* : null */}
                  {/* }                */}
                 
            </div>
        );
    }
}
