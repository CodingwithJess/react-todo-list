import React from "react";

const List = (props) => (
  props.itemList.length > 0 ? props.itemList.map((item, i)
  => (
    <div key={i}>
      <input type="checkbox"/>
      {item}
    </div>
  )):
    <h3>List is currently empty!</h3>
)

export default List;