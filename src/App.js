import logo from './logo.svg';
import './App.css';
import profile from './profile__img.png';
import slack from './slack.png';
import github from './github.png';
import zuri from './zuriLogo.png';
import Ig4 from './I4G.png';
import text from './Footer_text.png';


function App() {
  return (
    <div>
      <header>
        <img id='profile__img' src={ profile } />
        <img />
        <h2>Annette Black</h2>
      </header>
      <div className='buttons'>
        <button>Twitter link</button>
        <button id='btn__zuri'>Zuri Team</button>
        <button id='books'>Zuri Books</button>
        <button id='book__python'>Python Books</button>
        <button id='pitch'>Background Check for coders</button>
        <button id='book_design'>Design Books</button>
        <div id='social-icons'>
          <img src={ slack } />
          <img src={ github } />
        </div>
        <footer id='logos'>
          <img src={ zuri } />
          <img src={ text } />
          <img src={ Ig4 } />
        </footer>
      </div>
    </div>
  );
}

export default App;
