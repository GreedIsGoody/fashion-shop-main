import './arrivals.css'
import Card from '../card/Card'
const Arrivals = () => {
    return ( 
    <section className='arrivals'>
        <div className="container">
            <div className="arrivals_header">
                <h2 className='title-2'>NEW ARRIVALS</h2>
            </div>
            <div className="arrivals_cards">
                <Card/>
                <Card/>
                <Card/>
                
            </div>
        </div>
    </section> );
}
 
export default Arrivals;