import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";
import API_URL from "./../common/config"

function AdminCheck() {
    const {token} = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    const config = {
        "method": "get",
        "url": `${API_URL}/auth`,
        "headers": {
            "Authorization": `Bearer ${token}`

        }
    };

    useEffect(() => {
        axios(config).then((response) => {
            console.log("Enviaste un token bueno y estás loggeado")
            console.log(response);
            setMsg(response.data.message);
        }).catch((error) => {
            console.log("Hubo un error, no estás loggeado");
            console.log(error);
            setMsg(response.data.message)
        })
    }, [])

    return (
        <h1>{msg}</h1>
    )

}

export default AdminCheck;