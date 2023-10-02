const Key = (props) => {
    const style = {
        width : "80px",
        height : "80px",
        backgroundColor : "cyan",
        fontSize : "35px",
        border : "3px solid blue",
        borderRadius : "15px",
    }

    return(
        <button style={style}>{props.id}</button>
    );
}

export default Key;