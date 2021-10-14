import React, { useEffect, useState } from 'react';
import ManageAdminData from '../ManageAdminData/ManageAdminData';
import './ManageAdmin.css'
import Loading from "../../Loading/Loading"

const ManageAdmin = () => {
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3011/getAdmin")
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [])
    return (
        <div className="manage-admin-width">
            <h4 className="text-center">You can Delete Admin From Here</h4>
             {admin.length===0 ? <Loading></Loading> : <ManageAdminData rows={admin}></ManageAdminData>               
             }
        </div>
    );
};

export default ManageAdmin;