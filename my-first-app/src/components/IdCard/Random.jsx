//ITERACION 3

const Random = ({ min, max }) => {
    const randomValues = Math.floor(Math.random() * (max - min)) + min

    return (

        <p>random value betwen {min} and {max}: {randomValues}</p>

    )
}


export default Random