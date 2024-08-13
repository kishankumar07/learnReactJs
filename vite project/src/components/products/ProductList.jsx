// import ProductItem from "./components/ProductItem";
import styles from './product-item.module.css'


// let dummyProductData = ['Product1','Product2','Product3'];

function ProductList({list,key}){
    return(
     <div style={{padding:'30px',border:'2px solid red',marginBottom:'12px'}} key={key}>
            <h3 className={styles.productTitleName}>{list}</h3>
            <button className={styles.buttonStyle}>Click</button>
     </div>
    )
}

export default ProductList; 