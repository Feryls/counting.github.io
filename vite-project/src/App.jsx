import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  const Tambah = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  const Kurang = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const Reset = () => {
    setCount(0);
  }

  return (
    <>
      <div>
        <h3 >Ini adalah simulasi tambah max = 10, kurang max = 0, dan reset mengembalikan nilai ke angka 0</h3>
        <h1>{count}</h1>
        <div className='d-flex justify-content-center alignt-content-center gap-3'>
          <button className='btn btn-success' onClick={Tambah}>Tambah</button>
          <button className='btn btn-primary' onClick={Reset}>Reset</button>
          <button className='btn btn-danger' onClick={Kurang}>Kurang</button>
        </div>
      </div>
    </>
  );
}

export default App
