import {useEffect, useRef, useState} from "react";


const useSellsReport = () => {
    const [sells, setSells] = useState([]);
    const [books, setBooks] = useState([]);
    const prevTopFiveRef = useRef([]);

    useEffect(() => {
        const fetchData = async () => {
            let url = new URL('http://localhost:8080/api/orders');
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let data = await response.json();
            setSells(data.map(order => order.bookId));
        };

        fetchData();
    }, []);



    const topFive = [...new Set(sells)].sort((a, b) => b - a).slice(0, 5);

    useEffect(() => {
        if (JSON.stringify(prevTopFiveRef.current) !== JSON.stringify(topFive)) {
            const fetchAllProducts = async () => {
                for (const sell of topFive) {
                    let url = new URL('http://localhost:8080/api/books/' + sell);
                    let response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    let data = await response.json();
                    setBooks(prevBooks => [...prevBooks, data.titleSent]);
                }
            };
            fetchAllProducts();
            prevTopFiveRef.current = topFive;
        }
    }, [topFive]);

    return books;
};
export default useSellsReport;