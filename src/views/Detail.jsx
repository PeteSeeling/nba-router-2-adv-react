import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Detail() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [character, setCharacter] = useState({})
  
    useEffect(() => {
        const getCharacter = async () => {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );
            const characterData = await res.json();
            setCharacter(characterData);
            setLoading(false);
        };
        getCharacter();
    }, []);

    return(
        <>
            <Link to='/'>
                <input
                    type='button'
                    text='Character List' />
            </Link>
        <hr />
        {loading ? (
            <p>Loading...</p>
        ) : (
            <>
            <div>
                <section>
                    <h2>{character.name}</h2>
                    <span>Status: {character.status}</span>
                    <p>Species: {character.species}</p>
                    {/* <p>Location: {character.location.name}</p> */}
                    <p>Gender: {character.gender}</p>
                    <img alt={`${character.name}`} src={character.image} />
                    </section>
                    </div>
                    </>
        )}
            </>
        )}
    
