function ListItem(props) {
  const { id, name, age, address } = props;

  return (
    <div
      key={id}
      id={id}
      style={{
        padding: "20px",
        border: "1px solid black",
        display: "flex",
        gap: "20px",
        margin: "10px",
        background: "yellow",
      }}
    >
      <p>NAME: {name}</p>
      <p>AGE: {age}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default ListItem;
