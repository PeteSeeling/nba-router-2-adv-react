import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Detail() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
        const getCharacter = async () => {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );
            const characterData = await res.json();
            
        }
    })
}