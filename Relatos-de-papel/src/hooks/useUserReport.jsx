import {useEffect, useState} from "react";


const useSellsReport = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {


    const clientMostVisited = async () => {
        let url = new URL('http://localhost:8080/api/user');
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();

        data.map((user) => {
            //condicion para ver los 5 usuario con mas entradas
            data.sort((a, b) => b.entradas - a.entradas);
            setClients(data.slice(0, 5));
        })
    }
    clientMostVisited();
    }, []);

    return clients;
};
export default useSellsReport;