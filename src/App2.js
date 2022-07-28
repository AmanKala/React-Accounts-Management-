import { useState } from 'react';
import './App.css';
import CreateTransaction from './pages/CreateTransaction';
import TransactionList from './pages/TransactionList';
import {Routes,Route} from 'react-router-dom';

function App() {
  const [allTrans,setallTrans] = useState([]);
  const [flag, setFlag] = useState(true);

  return(
    <>
        <Routes>
            <Route exact path = '/' element={<CreateTransaction allTrans={allTrans} setallTrans={setallTrans} flag={flag} setFlag={setFlag} />} />

            <Route exact path = '/transactionlist' element={<TransactionList allTrans={allTrans} flag={flag} setFlag={setFlag}/>} />
        </Routes>
    </>
  )
}

export default App;
