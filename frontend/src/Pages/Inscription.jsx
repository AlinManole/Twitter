import React from 'react';
import { useForm } from "react-hook-form"

import styled from "styled-components"

const Formu = styled.div`
display: flex;
flex-direction : column;
`

const Inscription = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Formu>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="nom"{...register("firstName", { required: true, maxLength: 20 })} />
                <input placeholder="prénom"{...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input placehholder="âge" type="number" {...register("age", { min: 13, max: 99 })} />
                <input type="submit" />
            </form>
        </Formu>
    );
};

export default Inscription;