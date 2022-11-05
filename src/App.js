
import { useState } from 'react';
import AboutCity from './comp/AboutCity';
import scroll from './img/icons8-толстая-стрелка-вниз-24 (1).png'
function App() {
  const [active,setActive] = useState(1);

  return (
    <div className="App">
      {
        active === 0
        ? <div className={`scroll_cont ${active}`}>
            <img className='scroll' src={scroll}/>
          </div>  
        :<AboutCity/>
      }
    </div>


  );
}

export default App;
