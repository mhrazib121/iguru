// "use client";
import React, { useEffect, useState } from 'react';

const useSingleData = ({ courseId }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${courseId}`)
            .then(res => res.json())
            .then(item => setData(item.data))
    }, [courseId]);

    return { data }
};

export default useSingleData;