import {Header} from "./components/";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from "axios";


function App() {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => {
                setItems(data.pizzas)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact={true} path={'/'} render={() => <Home items={items}/>}/>
                <Route exact={true} path={'/Cart'} component={Cart}/>
            </div>
        </div>
    )
}

export default App;
