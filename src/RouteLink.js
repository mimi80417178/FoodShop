import { Switch, Route } from "react-router-dom";
import Products from './components/Product'
import ProductsView from './components/ProductsView'
import Cart from './components/Cart'


const RouteLink = () => {
    return (

        <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path="/productsview/:id" component={ProductsView} />
            <Route exact path='/cart' component={Cart} />
        </Switch>
    )
}

export default RouteLink