import React, {useState, useEffect} from "react";
import Formulario from "./Formulario";
import Loader from "./Loader";
import Noticias from "./Noticias";
import {helpHttp} from "../helpers/helpHttp";

const Resultados = () =>{
    const [search, setSearch] = useState(null);
    const [loading, setLoading] = useState(false);
    const [not, setNot] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if(search === null) return;

        const fetchData = async () => {
            const {artist} = search;

            let artistUrl = 
            `https://newsapi.org/v2/everything?q=${artist}&language=es&apiKey=cd6dc1cdcfdd4358984620a36ba180b1&pageSize=10&page=${page}`;

            setLoading(true);

            const [artistRes] = await Promise.all([helpHttp().get(artistUrl)]);

            setNot(artistRes);

            setLoading(false);
        }

        fetchData();
    },[search, page]);

    const handleSearch = (data) =>{
        setSearch(data);
    }

   const handleAdelante = (e) => {
        e.preventDefault()
        setPage(page +1)
    }

    const handleAtras = (e) => {
        e.preventDefault()
        setPage(page -1)
    }

    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand text-uppercase" href="/">Informatorio 2022</a>
            </div>
        </nav>
        <hr/>
        <div className="container">
            {loading && <Loader />}
            
            <Formulario handleSearch={handleSearch} />
            <div className="container d-flex justify-content-between my-3">
            <button type="button" class="btn btn-dark" onClick={handleAtras}>atras</button>
            <button type="button" class="btn btn-dark" onClick={handleAdelante}>adelante</button>
            </div>
            {search && !loading && (<Noticias search={search} not={not} />)}
            
        </div>
        </>
        
        
    );
};

export default Resultados;