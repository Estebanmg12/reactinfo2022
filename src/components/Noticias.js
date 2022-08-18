import React from "react";
import Message from "./Message";

const Noticias = ({search, not}) =>{
    if(!not) return null;
    return (
      <div>
          {not?.articles?.map((artist) => (
            <a>
            <hr/>
            <img class="rounded float-end" src={artist.urlToImage ?  artist.urlToImage : "/images/default_image.png"} 
            width="200" height="200" >
            </img>
            <div className="flex flex-col p-2 lg:w-[380px] lg:h-[350px] 
            lg:rounded-b-lg bg-gray-200 dark:bg-gray-900">
              <h2 className="mx-3 text-lg font-bold">{artist.title}</h2>
              <p className="mx-3 mt-2">{artist.description}</p>
              <div className="flex justify-between mx-3 mt-auto text-sm font-light">
                <p className="">Publicado el: {artist.publishedAt.slice(0, 10)}</p>
                <p className="">{artist.source.name}</p>
                <a href={artist.url} target="_blank">Mas Información</a>
              </div>
            </div>
          </a>
          ))}
        </div>
    )
        
}

export default Noticias;