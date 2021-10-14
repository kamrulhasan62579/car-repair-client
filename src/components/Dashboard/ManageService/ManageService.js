import React, {useEffect, useState} from 'react';
import Loading from '../../Loading/Loading';
import ManageServiceData from '../ManageServiceData/ManageServiceData';

const ManageService = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:3011/getService")
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])
    return (
        <div>
            <h4 className="text-center">You can delete service from here</h4>
            {
                serviceData.length === 0 ? <Loading></Loading> : <ManageServiceData rows={serviceData}></ManageServiceData>
            }
        </div>
    );
};

export default ManageService;