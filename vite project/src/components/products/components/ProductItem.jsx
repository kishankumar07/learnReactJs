function ButtonComponent(){
    return <button>Click</button>
}

function ProductItem(){
    return(
        <div>
            <h5>Product1</h5>
            <ButtonComponent/>
        </div>
    )
}
export default ProductItem