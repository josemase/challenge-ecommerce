import {useEffect} from "react";
import useSellsReport from "../hooks/useSellsReport.jsx";
import useUserReport from "../hooks/useUserReport.jsx";
import {Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const Resports = () => {



    const user=useUserReport();
    const sells=useSellsReport();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(user);
        console.log(sells);
    }, [user,sells]);

    const resgister = () => {
        navigate('/Main');

    }


    return (
        <>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Clientes mas frecuentes</th>

                </tr>
                </thead>
                <tbody>
                {user.map((user) => (
                    // eslint-disable-next-line react/jsx-key
                    <tr >
                        <td>{user.name} {user.surname} ------ {user.email}</td>
                    </tr>
                ))}

                </tbody>

            </table>
            <br/>
            <Row>
                <Col>
                    <hr className={"main__line"}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr className={"main__line"}/>
                </Col>
            </Row>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Libros mas vendidos</th>

                </tr>
                </thead>
                <tbody>
                {sells.map((sell) => (
                    // eslint-disable-next-line react/jsx-key
                    <tr >
                        <td>{sell}</td>
                    </tr>
                ))}

                </tbody>

            </table>

            <Button className={"btn btn-primary"} onClick={() => window.print()}>Imprimir</Button>
            <br/><br/><br/>
            <button type="button" onClick={()=>{resgister('/Main')}} className="btn btn-secondary">Back</button>
        </>
    )
}
export default Resports;
