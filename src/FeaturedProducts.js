import products from "./products"
const FeaturedProducts = ({addtocart}) => {
    return <div className="products-container">
        <h2>Featured Products</h2>
        <hr />
        <div className="parent">
            {products.map((item)=>{                
                const{image,desc,price,id}=item
                return <div className="product-card" key={id}>                    
                    <img src={require(`${image}`)} alt="" />
                    <h4>{desc}</h4>
                    <p>₦ {price}</p>
                    <button className="add_to_cart_btn" onClick={()=>addtocart(image,desc,price)}>Add to cart</button>
                </div>
            })}
        </div>
    </div>;
}


export default FeaturedProducts;