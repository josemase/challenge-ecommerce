
import { useEffect, useState} from "react";


const usePreparedata = (title, price) => {

    const [data, setData] = useState({});
    const content = {
        title: title,
        price: price,
    };
    useEffect(() => {
        setData(content);
    }, []);

    return data;

}
export default usePreparedata;