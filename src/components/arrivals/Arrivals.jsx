import './arrivals.css'
import Card from '../card/Card'
import cat01 from '../../img/categories/cat-01.jpg'
import cat02 from '../../img/categories/cat-02.jpg'
import cat03 from '../../img/categories/cat-03.jpg'

const Arrivals = () => {
    return ( 
    <section className='arrivals'>
        <div className="container">
            <div className="arrivals_header">
                <h2 className='title-2'>NEW ARRIVALS</h2>
            </div>
            <div className="arrivals_cards">
                <Card title='Hoodies & Sweetshirt' image={cat01}/>
                <Card title='Coats & Parkas' image={cat02}/>
                <Card title='Tees & T-Shirt' image={cat03}/>
                
            </div>
        </div>
    </section> );
}
 
export default Arrivals;