import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  var items = ["New York", "san Francisco", "Tokyo", "London"];
  

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
