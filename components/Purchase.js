class Purchase extends React.Component {
    render() {
        return (
            <div>
               <li > {this.props.purchaselist.item} - {this.props.purchaselist.brand} - {this.props.purchaselist.quantity}  
                    <button onClick={()=> this.props.handleRemove(this.props.purchaselist) } id='Remove'> Remove </button> 
                </li>
                 
            </div>
        );
    }
}
