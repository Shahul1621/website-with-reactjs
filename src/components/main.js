import './main.css'
import Footer from './footer'
import Header from './header'
import Award from '../award.png'
import olympic from '../olympic.png'
import modijii from '../modijii.png'
import food from '../food.png'
import coin from '../coins.png'
import joe from '../int.png'
import news1 from '../news1.png'
import news2 from '../news2.png'
import news3 from '../news3.png'
import news4 from '../news4.png'
import news5 from '../news5.png'
import news6 from '../news6.png'

export default function Main(){
  return (
    <div className="main">
    <Header />
     <div className='main-content'>
         <div className='left'>
   
               <div className='cinema'>
                <img src={Award} alt="dsf" />
                <div className='cinema-content'>
                 <h1>'Doll of Decade' -Samantha</h1>
                 <p>Indian Actress Samantha ruth prabhu handles the golden award for the best actress for the acting in the Family Man2</p>
                </div>
                </div>

                <div className="sports">
               <div className="sports-content">
                <h1>Once again Neeraj </h1>
                <p>Indian Athlete Neeraj Chopra handles the golden award for the best athlete</p>
               </div>
               <img src={olympic}></img>
                </div>

            </div>

            <div className="right">
                <div className="modiji-content">
              <img src={modijii}></img>
                <div className='politics'>
                    <p>Modiji is in his prime</p>
                </div>
              </div>
              <div className='food'>
                <p>Food is the best and see more about it</p>
                <div className='food-content'>
                    <img src={food}></img>
                </div>
                </div>
                <div className='economic'>
                    <img src={coin}></img>
                    <div className='economic-time'>
                        <p>Sudden crisis in the economy</p>
                    </div>
                </div>
                <div className='international'>
                    <p>Joe biden moves to india for a meet</p>
                    <div className='international-content'>
                        <img src={joe}></img>
                    </div>
                </div>
                </div>

    </div>
    
<marquee> <img src={news1}></img> ---------- <img src={news2}></img> ---------- <img src={news3}></img> ---------- <img src={news4}></img> ---------- 
<img src={news5}></img> ---------- <img src={news6}></img>
</marquee>
    </div>
  );
}

