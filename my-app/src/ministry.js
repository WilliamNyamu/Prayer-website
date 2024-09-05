import Great from './great_commission.js';
import data from './data.js';
function Ministry() {

    const cards = data.map(item =>{
        return (
            <Great
                image = {item.image}
                details = {item.details}
                location = {item.location}
                time_details = {item.time_details}
            />
  
        );

    })
    return (
        <section>
            <h1 className='great_header'>THE GREAT COMMISSION</h1>
            <div className='great_div'>
                {cards}
            </div>
            
            
        </section>
    );
    
}
export default Ministry;

// <Great 
// image = "people_praying.jpg"
// details = "During the days of Jesus on earth, he offered up prayers and petitions with fervent cries and tears to the one who could save him from death, and he was heard because of his reverent submission."
// location = "THE FAMOUS: SR13 :)"
// time_details = "0500hrs - 0620hrs"
// />
// <Great 
// image = "people_praying.jpg"
// details = "During the days of Jesus on earth, he offered up prayers and petitions with fervent cries and tears to the one who could save him from death, and he was heard because of his reverent submission."
// location = "THE FAMOUS: SR13 :)"
// time_details = "0500hrs - 0620hrs"
// />
// <Great 
// image = "people_praying.jpg"
// details = "During the days of Jesus on earth, he offered up prayers and petitions with fervent cries and tears to the one who could save him from death, and he was heard because of his reverent submission."
// location = "THE FAMOUS: SR13 :)"
// time_details = "0500hrs - 0620hrs"
// />
// <Great 
// image = "people_praying.jpg"
// details = "During the days of Jesus on earth, he offered up prayers and petitions with fervent cries and tears to the one who could save him from death, and he was heard because of his reverent submission."
// location = "THE FAMOUS: SR13 :)"
// time_details = "0500hrs - 0620hrs"
// />