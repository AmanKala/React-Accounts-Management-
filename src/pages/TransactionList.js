import React from "react";
import {useNavigate} from 'react-router-dom';
import Heading from "../components/Heading";

const TransactionList = (props) =>{
    const navigate = useNavigate();
    const handleClick = () =>{
        props.setFlag(!props.flag);
        navigate('/');
    }

    const handleEdit = () =>{
        navigate('/');
    }
    return(
        <>
            <Heading title='Transaction List' />
            {
                props.allTrans.map((trans)=>{
                    return(
                        <div key={trans.id}>
                            <span>{trans.title}</span>&nbsp;&nbsp;
                            <span>{trans.paid_br_to}</span>&nbsp;&nbsp;
                            <span>{trans.date}</span>&nbsp;&nbsp;
                            <span>{trans.amount}</span>&nbsp;&nbsp;
                            <span>{trans.quantity}</span>&nbsp;&nbsp;
                            <span>{trans.unit_name}</span>&nbsp;&nbsp;
                            <span>{trans.type}</span>&nbsp;&nbsp;
                            <span>{trans.status}</span>&nbsp;&nbsp;
                            <span>{trans.utr}</span>&nbsp;&nbsp;
                            <span>{trans.project}</span>&nbsp;&nbsp;
                            <span> <button onClick={handleEdit}>Edit</button> </span>&nbsp;&nbsp;
                        </div>
                    )
                })
            }
            <button onClick={handleClick}>Create Transaction</button>
        </>
    )
}

export default TransactionList;
