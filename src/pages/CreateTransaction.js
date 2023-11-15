import React from "react";
import {useNavigate} from 'react-router-dom';
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Heading from "../components/Heading";

const CreateTransaction = (props) =>{
    const navigate = useNavigate();

    const handleData = (event) =>{
        event.preventDefault();
        const newEntry={id:new Date().getTime().toString(), title: props.transaction.title, date:props.transaction.date, amount:props.transaction.amount, type:props.transaction.type, status:props.transaction.status, quantity:props.transaction.quantity, unit_name:props.transaction.unit_name, utr:props.transaction.utr, project:props.transaction.project, comment:props.transaction.comment, paid_by_to:props.transaction.paid_by_to};
        let emptyList={title:'',date:'',paid_by_to:'',amount:'',quantity:'',unit_name:'',type:'',status:'',utr:'',project:'',comment:'',};

        if(props.buttonChange){
            props.setallTrans(
                props.allTrans.map((ele)=>{
                    if(ele.id===props.transactionId)
                    {
                        return {...ele,title: props.transaction.title, date:props.transaction.date, amount:props.transaction.amount, type:props.transaction.type, status:props.transaction.status, quantity:props.transaction.quantity, unit_name:props.transaction.unit_name, utr:props.transaction.utr, project:props.transaction.project, comment:props.transaction.comment, paid_by_to:props.transaction.paid_by_to}
                    }
                    return ele;
                })
            );
        }
        else{
            props.setallTrans([...props.allTrans,newEntry]);
        }

        props.setTransaction(emptyList);

        navigate('/transactionlist');
    }

    let name,value;
    const handleInput = (event) =>{
        name = event.target.name;
        value= event.target.value;

        props.setTransaction({...props.transaction, [name]:value});
    }

    const handleList = () =>{
        navigate('/transactionlist');
    }

    return(
        <>
            {
                props.buttonChange ? <Heading title='Edit Transaction' /> :<Heading title='Create Transaction' />
            }
            <form onSubmit={handleData} className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-10">
                <InputField title='Title' type='text' name='title' value={props.transaction.title} onChange={handleInput} required={true} />
                <InputField title='Date' type='date' name='date' value={props.transaction.date} onChange={handleInput} required={true} />
                <InputField title='Paid By/To' type='text' name='paid_by_to' value={props.transaction.paid_by_to} onChange={handleInput} required={true} />
                <InputField title='Amount' type='number' name='amount' value={props.transaction.amount} onChange={handleInput} required={true} />
                <InputField title='Quantity' type='number' name='quantity' value={props.transaction.quantity} onChange={handleInput} required={true} />
                <InputField title='Unit name' type='text' name='unit_name' value={props.transaction.unit_name} onChange={handleInput} required={true} />
                <SelectField title='Type' name='type' value={props.transaction.type} onChange={handleInput} required={true} dropdown={['expence','revenue']} />
                <SelectField title='Status' name='status' value={props.transaction.status} onChange={handleInput} required={true} dropdown={['Due','Cancled','Cleared']} />
                <InputField title='UTR' type='text' name='utr' value={props.transaction.utr} onChange={handleInput} required={true} />
                <InputField title='Project' type='text' name='project' value={props.transaction.project} onChange={handleInput} required={true} />
                <InputField title='Comment' type='text' name='comment' value={props.transaction.comment} onChange={handleInput} required={true} />

                {
                    props.buttonChange ? <button className="mr-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" type="submit">Edit Transaction</button> : <button className="mr-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" type="submit">Create Transaction</button>
                }
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" onClick={handleList}>Transaction List</button>
            </form>
        </>
    )
}

export default CreateTransaction;
