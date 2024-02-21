export const ClickHandler = () => {
    const clickHandler = (event, count = 1) => {
        console.log('Button Clicked', count);
    }
    return (
        <>
            <button onClick={clickHandler}>Click Handler</button>
            <button onClick={(event) => clickHandler(event, 5)}>Click Handler 5</button>
        </>
    );
}