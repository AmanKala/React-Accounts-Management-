import React from "react";
import {useNavigate} from 'react-router-dom';
import Heading from "../components/Heading";

const TransactionList = (props) =>{
    const navigate = useNavigate();
    const handleClick = () =>{
        props.setTransaction(
            {
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
              }
        )
        navigate('/');
    }

    const handleEdit = (id) =>{
        let currentTransaction=props.allTrans.find((ele)=>{
            return ele.id===id;
        });
        props.setTransaction(currentTransaction);
        props.setTransactionId(id);
        navigate('/edit');
    }

    const deleteEntry=(id)=>{
        if(window.confirm('Delete this transaction?')){
            const updatedList=props.allTrans.filter((ele)=>{
                return ele.id!==id;
            })
            props.setallTrans(updatedList);
        }
    }
    return(
        <>
            <Heading title='Transaction List' />
            <table className="table-auto min-w-full mt-5">
                <thead className="border-b">
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
                                <tr key={trans.id} className="border-b text-center">
                                    <td>{trans.title}</td>
                                    <td>{trans.date}</td>
                                    <td>{trans.paid_by_to}</td>
                                    <td>{trans.amount*trans.quantity}</td>
                                    <td>{trans.type}</td>
                                    <td>{trans.status}</td>
                                    <td>{trans.utr}</td>
                                    <td>{trans.project}</td>
                                    <td>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mr-1  px-4 rounded focus:shadow-outline" onClick={()=>handleEdit(trans.id)}>Edit</button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold  px-4 rounded focus:shadow-outline" onClick={()=>deleteEntry(trans.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br/>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Create Transaction</button>
        </>
    )
}

export default TransactionList;
