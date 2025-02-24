import {useNavigate} from "react-router-dom";
import {useState} from "react";


function Register() {
    const atras = useNavigate();
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    async function registerUser(e) {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        try {
            let url = 'http://localhost:8080/api/user';
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.nombres,
                    surname: formData.apellidos,
                    email: formData.email,
                    password: formData.password,
                    entradas:0
                })
            });

            if (response.ok) {
                atras('/user');
            } else {
                alert('Error en el registro');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }




    return (
            <div>
                    <form className={"login__form"} onSubmit={registerUser}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Nombres</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nombres"
                                value={formData.nombres}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Apellidos</label>
                            <input
                                type="text"
                                className="form-control"
                                name="apellidos"
                                value={formData.apellidos}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Correo electronico</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Confirmar Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="button" onClick={()=>{atras('/user')}} className="btn btn-secondary">Back</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
            </div>
    );
}

export default Register;