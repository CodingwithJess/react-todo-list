import React from 'react';
const Form = props => {
return(
      <div>
        <form onSubmit={props.submitHandler}>
          <input
            type="text"
            name="item"
            placeholder="What do you need?"
            onChange={props.changeHandler}
            value={props.item}
          />
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    )
}
export default Form;