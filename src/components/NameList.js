export const NameList = () => {
    const names = ['Name 1', 'Name 2', 'Name 3'];
    return(
        <>
            {names.map((name) => {
                return <h2 key={name}>{name}</h2>
            })}
        </>
    );
}