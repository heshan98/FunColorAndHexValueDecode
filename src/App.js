import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import colorNames from 'colornames';

function App() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(newItem)
  // }
  const [newItem, setNewItem] = useState('')
  const [hexColor, setHexColor] = useState('')
  return (


    <div className="App" style={{ paddingTop: '30px' }}>

      <div style={{
        backgroundColor: `${newItem}`,
        fontSize: '30px', paddingTop: '40px', width: '50%', textAlign: 'center',
         margin: 'auto', paddingBottom: '25px', border: '3px solid black'
      }}>
        {newItem.length ? newItem : 'Type the color name And Get color And Hex Value'}
        <p>{hexColor}</p>
      </div>

      <form className='submit' style={{ paddingTop: '20px' }}>
        <label htmlFor='additem'>Type Color :</label>&nbsp;&nbsp;
        <input
          autoFocus
          id='addItem'
          type='text'
          placeholder='ex:red'
          required

          onChange={(e) => {
            setNewItem(e.target.value)
            setHexColor(colorNames(e.target.value))


              (console.log(e.target.value))
          }

          }

        />


      </form>
    </div>

  );
}

export default App;
