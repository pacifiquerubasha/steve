import { useEffect, useState } from 'react'
import './App.css'
import Suit from './Suit';
import Shirt from './Shirt';
import Pants from './Pants';

function App() {
  
  const blazers = ['#000', '#000080', '#808080', '#964B00', '#d2b48c'];
  const shirts = ['#FFF', '#FFFDD0', '#B6D0E2'];
  const trousers = ['#000', '#000080', '#808080', '#964B00', '#d2b48c', ];

  const [combinations, setCombinations] = useState([]);

  useEffect(()=>{
    const combos = []
    for(const blazer of blazers){
        for(const shirt of shirts){
          for(const trouser of trousers){
            combos.push([blazer, shirt, trouser]);
          }
        }
    }

  setCombinations(combos)

  }, [])
  

  return (
    <div className="App">
      <div className='title'>
        STEVE HARVEY'S 5 SUITS COMBO
      </div>
      <div className='combinations'>
        {combinations.map((combo, key)=>{        
            return (
              <>
                <div className='index'>
                    <div>{key+1}</div>    
                    <div className='outfit'>
                      <div className=''>
                        <Suit color={combo[0]}/>
                      </div>
                      <div className='shirt'>
                        <Shirt color={combo[1]}/>
                      </div>
                      <div className=''>
                        <Pants color={combo[2]}/>
                      </div>
                    
                    </div>            

                </div>
              </>
            )
        })
        }
      </div>
      
    </div>
  )
}

export default App
