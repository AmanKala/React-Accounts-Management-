import { useState } from 'react';
import './App.css';
import CreateTransaction from './pages/CreateTransaction';
import TransactionList from './pages/TransactionList';
import {Routes,Route} from 'react-router-dom';

function App() {
  const [allTrans,setallTrans] = useState([]);
  const [transaction,setTransaction] = useState({
    title:'',
    date:'',
    paid_by_to:'',
    amount:'',
    quantity:'',
    unit_name:'',
    type:'',
    status:'',
    utr:'',
    project:'',
    comment:'',
  });
  const [transactionId, setTransactionId] = useState('');
  
  return(
    <>
        <Routes>
            <Route exact path = '/' element={<CreateTransaction allTrans={allTrans} setallTrans={setallTrans} transaction={transaction} setTransaction={setTransaction} />} buttonChange={false} />

            <Route exact path = '/edit' element={<CreateTransaction allTrans={allTrans} setallTrans={setallTrans} transaction={transaction} setTransaction={setTransaction} buttonChange={true} transactionId={transactionId} />} />

            <Route exact path = '/transactionlist' element={<TransactionList allTrans={allTrans} setallTrans={setallTrans} transaction={transaction} setTransaction={setTransaction} setTransactionId={setTransactionId} />} />
        </Routes>
    </>
  )
}

export default App;
