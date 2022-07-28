import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Heading from "../components/Heading";

const CreateTransaction = (props) =>{
    const [transaction,setTransaction] = useState({
        title:'',
        date:'',
        amount:'',
        type:''
    })

    const navigate = useNavigate();
    const handleData = (event) =>{
        event.preventDefault();
        const newEntry={id:new Date().getTime().toString(), title: transaction.title, date:transaction.date, amount:transaction.amount, type:transaction.type, status:transaction.status, quantity:transaction.quantity, unit_name:transaction.unit_name, utr:transaction.utr, project:transaction.project, comment:transaction.comment, paid_by_to:transaction.paid_by_to};

        props.setallTrans([...props.allTrans,newEntry]);
        setTransaction({
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
        props.setFlag(!props.flag);
        navigate('transactionlist');
    }

    let name,value;
    const handleInput = (event) =>{
        name = event.target.name;
        value= event.target.value;

        setTransaction({...transaction, [name]:value});
    }

    return(
        <>
            <Heading title='Create Transaction' />
            <form onSubmit={handleData}>
                <InputField title='Title' type='text' name='title' value={transaction.title} onChange={handleInput} />
                <InputField title='Date' type='date' name='date' value={transaction.date} onChange={handleInput} />
                <InputField title='Paid By/To' type='text' name='paid_by_to' value={transaction.paid_by_to} onChange={handleInput} />
                <InputField title='Amount' type='number' name='amount' value={transaction.amount} onChange={handleInput} />
                <InputField title='Quantity' type='number' name='quantity' value={transaction.quantity} onChange={handleInput} />
                <InputField title='Unit name' type='text' name='unit_name' value={transaction.unit_name} onChange={handleInput} />
                <SelectField title='Type' name='type' value={transaction.type} onChange={handleInput} dropdown={['expence','revenue']} />
                <SelectField title='Status' name='status' value={transaction.status} onChange={handleInput} dropdown={['Due','Cancled','Cleared']} />
                <InputField title='UTR' type='text' name='utr' value={transaction.utr} onChange={handleInput} />
                <InputField title='Project' type='text' name='project' value={transaction.project} onChange={handleInput} />
                <InputField title='Comment' type='text' name='comment' value={transaction.comment} onChange={handleInput} />

                <button type="submit">Create Transaction</button>
            </form>
        </>
    )
}

export default CreateTransaction;
