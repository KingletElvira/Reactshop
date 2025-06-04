export function Cart(props) {
    const { quanity = 0, handleBaskeShow = Function.prototype } = props;
    
    return (
      <div className="cart teal white-text lighten-2" onClick={handleBaskeShow}>
        <i className="material-icons">shopping_basket</i>
        {quanity ? <span className="card-quanity">{quanity}</span> : null}
      </div>
    );
  }