
import '../styles/Login.css';
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "../context/userContext.jsx";


function Login() {

    const keepUser=useContext(UserContext);
    const resgister = useNavigate();

    const useNuevaentrada = async (id) => {
        let contador = 0;
        let url = 'http://localhost:8080/api/user/' + id;
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        contador += data.entradas;

        let url2 = 'http://localhost:8080/api/user/' + id;
        let response2 = await fetch(url2, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                entradas: contador + 1
            })
        });


    }

    const userSelected = () => {
        resgister('/register')
    }
    const [formData, setFormData] = useState({
        email: '',
        password: '',

    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    async function login(e) {

        e.preventDefault();
        try {
            let url = new URL('http://localhost:8080/api/user');
            url.search = new URLSearchParams({
                email: formData.email,
                password: formData.password

            }).toString();
            console.log(decodeURIComponent(url));
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                let data = await response.json();
                // eslint-disable-next-line react-hooks/rules-of-hooks
                await useNuevaentrada(data.id);
                localStorage.setItem('user', JSON.stringify(data));
                keepUser.addUser({name:data.name,email:data.email,id:data.id});


                resgister('/Main');
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }


  return (
      <>

      <div>
          <form className={"login__form"} onSubmit={login}>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                  />
              </div>
              <p className="askRegister" onClick={userSelected}>registrate</p>
              <div className="d-flex justify-content-between">
                  <button type="button" onClick={()=>{resgister('/Main')}} className="btn btn-secondary">Back</button>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </div>

          </form>
            </div>

      </>


  );
}
export default Login