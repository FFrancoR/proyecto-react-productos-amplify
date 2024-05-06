import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCountries } from "../api/countryService";
import { createUser } from "../api/userService";
import { Toast } from 'primereact/toast';



export const RegisterForm = () => {

    const [countries, setCountries] = useState([]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("")
    const [countryId, setCountryId] = useState("")
    const navigate = useNavigate();
    const toast = useRef(null);


    useEffect(() => {
        getCountries().then(
            (res) => setCountries(res.data),
        )

    }, [])

    const showCountriesInDropdown = () => {
        if (countries.length === 0) return;

        return (
            <div>
                {countries.map(item => (
                    <li key={item.countryId} onClick={() => setChosenCountry(item)} className="dropdown-item">{item.countryName}</li>
                ))}
            </div>
        );
    };

    const setChosenCountry = (country) => {
        setCountry(country.countryName)
        setCountryId(country.countryId)
    }

    const showToast = () => {
        toast.current.show({
            severity: 'error',
            summary: 'Error',
            detail: 'Completar todos los campos.',
            life: 1500
        });
    }

    const createNewUser = (event) => {
        if (firstName == "" || lastName == "" || email == "" || countryId == "" || phone == "") {
            event.preventDefault()
            showToast()
            return
        }
        event.preventDefault()
        const user = {};
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.phone = phone;
        user.countryId = countryId;

        createUser(user);
        setTimeout(() => navigate("/usuarios"), 1000)

    }


    return (
        <div>
            <h3>
                REGISTRATE!
            </h3>
            <form className="m-3 p-3">
                <div className="form-group m-3 p-1">
                    <label>Nombre</label>
                    <input value={firstName} onChange={(event) => { setFirstName(event.target.value) }} placeholder="Ingresa tu nombre"></input>
                </div>
                <div className="form-group m-3 p-1">
                    <label>Apellido</label>
                    <input value={lastName} onChange={(event) => { setLastName(event.target.value) }} placeholder="Ingresa tu apellido"></input>
                </div>
                <div className="form-group m-3 p-1">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} placeholder="Ingresa tu email"></input>
                </div>
                <div className="form-group m-3 p-1">
                    <label>Telefono</label>
                    <input type="phone" value={phone} onChange={(event) => { setPhone(event.target.value) }} placeholder="Ingresa tu telefono"></input>
                </div>
                <div>
                    <label >Pais</label>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {country != "" ? country : "Seleccionar"}
                        </button>
                        <ul className="dropdown-menu">
                            {showCountriesInDropdown()}
                        </ul>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100" onClick={(event) => createNewUser(event)}>Submit</button>
                <div className="card flex justify-content-center">
                    <Toast ref={toast} />


                </div>
            </form>

        </div>
    )
}
