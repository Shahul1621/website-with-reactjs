
import './header.css'
export default function Header(){
  return (
      <header className="header">
       <div>
        <h1>News@365</h1>
       </div>
        <nav className="navbar">
          <ul className='list'>
            <li>Sports</li>
            <li>Cinema</li>
            <li>Politics</li>
            <li>Economics</li>
            <li>Profile</li>
          </ul>
        </nav>
      </header>

  );
}