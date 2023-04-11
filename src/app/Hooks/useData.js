// "use client";
import React, { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/quiz")
            .then(res => res.json())
            .then(item => setData(item.data))
    }, [])

    return [data]
};

export default useData;