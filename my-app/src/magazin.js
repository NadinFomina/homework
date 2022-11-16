// import './style.css'
import Shop from './Product'

export default function App() {

    return (
        <div>
            <Shop>
                <ul>
                    {products.map(
                        products =>
                            <li
                                key={products.id}>
                                {products.title}
                                {products.price}
                                {products.description}
                                <img src={products.thumbnail} />
                            </li>

                       
                    )}

                </ul>
            </Shop>

        </div>
    )
}