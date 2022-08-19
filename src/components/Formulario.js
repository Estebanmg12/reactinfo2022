import React, {useState} from "react";

const initialForm = {
    artist:"",
}

const Formulario = ({handleSearch}) =>{
    const [form, setForm] = useState(initialForm);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if(form.artist.length < 3) {
            alert("Datos incompletos");
            return;
        }

        handleSearch(form);
        setForm(initialForm);
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <input type="text" name="artist" placeholder="Buscador de noticias" 
            onChange={handleChange} value={form.artist} />
            <input type="submit" value="Buscar" />
           </form>
        </div>
    );
};

export default Formulario;