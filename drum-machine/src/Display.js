
const Display = () => {

    const style = {
        height : "40px",
        width : "200px",

        position : "absolute",
        left : "500px",
        top : "180px",

        padding : "20px 0px 20px 0px",
        border : "10px dashed yellow",
        borderRadius : "5px",

        textAlign : "center"
    }
    return (
        <h1 style = { style }>Hello</h1>
    );
}

export default Display;