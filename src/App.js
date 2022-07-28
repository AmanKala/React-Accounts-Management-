import { useState } from 'react';
import './App.css';
import CreateTransaction from './pages/CreateTransaction';
import TransactionList from './pages/TransactionList';

function App() {
  const [allTrans,setallTrans] = useState([]);
  const [flag, setFlag] = useState(true);
  return(
    <>
    {
      (flag?<CreateTransaction allTrans={allTrans} setallTrans={setallTrans} flag={flag} setFlag={setFlag} />:<TransactionList allTrans={allTrans} flag={flag} setFlag={setFlag}/>)    
    }
    </>
  )
}

export default App;
