//ITERACION 1

const IdCard = ({ lastName, firstName, gender, height, picture, birth }) => {
    return (
        <div className="data-container">
            <img src={picture} alt={firstName} />
            <div>
                <h4>{lastName}</h4>
                <h4>{firstName}</h4>
                <h4>{gender}</h4>
                <h4>{height}</h4>
                <h4>{`${birth.toLocaleDateString()}`}</h4>
            </div>
        </div>
    )
}

export default IdCard