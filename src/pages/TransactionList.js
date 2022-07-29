import React from "react";
import {useNavigate} from 'react-router-dom';
import Heading from "../components/Heading";

const TransactionList = (props) =>{
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/');
    }

    const handleEdit = (id) =>{
        let currentTransaction=props.allTrans.find((ele)=>{
            return ele.id===id;
        });
        console.log(currentTransaction);
        props.setTransaction(currentTransaction);
        props.setTransactionId(id);
        navigate('/edit');
    }

    const deleteEntry=(id)=>{
        const updatedList=props.allTrans.filter((ele)=>{
            return ele.id!==id;
        })
        props.setallTrans(updatedList);
    }
    return(
        <>
            <Heading title='Transaction List' />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Paid To/By</th>
                        <th>Total</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>UTR</th>
                        <th>Project</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.allTrans.map((trans)=>{
                            return(
                                <tr key={trans.id}>
                                    <td>{trans.title}</td>
                                    <td>{trans.date}</td>
                                    <td>{trans.paid_by_to}</td>
                                    <td>{trans.amount*trans.quantity}</td>
                                    <td>{trans.type}</td>
                                    <td>{trans.status}</td>
                                    <td>{trans.utr}</td>
                                    <td>{trans.project}</td>
                                    <td>
                                        <button onClick={()=>handleEdit(trans.id)}>Edit</button>
                                        <button onClick={()=>deleteEntry(trans.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br/>
            <button onClick={handleClick}>Create Transaction</button>
        </>
    )
}

export default TransactionList;
