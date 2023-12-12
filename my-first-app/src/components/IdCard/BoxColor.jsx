//ITERACION 4

const BoxColor = ({ r, g, b }) => {

    return (
        <div className="box-container" style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`
        }}>

            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor
