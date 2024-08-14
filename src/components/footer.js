import './footer.css'

export default function Footer() {
  return (
    <div>
        <footer className="footer">
        <div className="container">
          <div className='sports-list'>
            <h1>Sports</h1>
            <li>Cricket</li>
            <li>Football</li>
            <li>Kabbaddi</li>
            <li>Badmintion</li>
            <li>Olympic</li>
            <li>Hockey</li>
            </div>
            <div className='cinema-list'>
              <h1>Cinema</h1>
              <li>Hollywood</li>
              <li>Bollywood</li>
              <li>Kollywood</li>
              <li>Mollywood</li>
              <li>Chinese</li>
            </div>
            <div className='indian-list'>
              <h1>Indian</h1>
              <li>TamilNadu</li>
              <li>Kerala</li>
              <li>Karnataka</li>
              <li>AndhraPradesh</li>
              <li>Delhi</li>
            </div>
            <div className='international-list'>
              <h1>International</h1>
              <li>USA</li>
              <li>Russia</li>
              <li>UK</li>
              <li>France</li>
              <li>China</li>
              <li>Japan</li>
            </div>
            <div className='education-list'>
              <h1>Education</h1>
              <li>Engineering</li>
              <li>Arts&Science</li>
              <li>Law</li>
              <li>Medicine</li>
              <li></li>
            </div>
        </div>
        <div className='final'>
        &copy; 100% code done by Shahul Meeran 2024 Kekran Mekran Company 
        </div>
        </footer>
    </div>
  );
}
