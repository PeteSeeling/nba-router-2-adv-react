import { useHistory, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function List(){
    const history = useHistory();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const status = new URLSearchParams(location.search).get('status') ?? 'all';
    const [characters, setCharacters] = useState([]);

    const handleStatusChange = (e) => {
        history.push(`/?status=${e.target.value}`);
    };

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            const statusParam = new URLSearchParams(location.search).get('status');

            const url = 
                statusParam === 'all' || !statusParam
                ? 'https://rickandmortyapi.com/api/character'
                : `https://rickandmortyapi.com/api/character?status=${statusParam}`;
            const res = await fetch(url);
            const { results } = await res.json();

            setCharacters(results)
            setLoading(false)
        };
        fetchCharacters()
    }, [location.search]);

    return (
        <>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <>
            <section>
                <div>
                    <h3>Sort by Status: </h3>
                    <select id='status' value={status} onChange={handleStatusChange}>
                        <option value='all'>All</option>
                        <option value='dead'>Dead</option>
                        <option value='alive'>Alive</option>
                        <option value='unknown'>Unknown</option>
                        </select>
                        </div>
                        </section>
                        <div>
                            {characters.map((character) => {
                                return(
                                    <section key={character.id}>
                                        <Link to={`/characters/${character.id}`}>
                                            <h4>{character.name}</h4>
                                        </Link>
                                        <span>Species: {character.species}</span>
                                        <p>Status: {character.status}</p>
                                    </section>
                                );
                            })}
                                    </div>
                                    </>
    )};
</>
    )}