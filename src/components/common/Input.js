import React, { Fragment } from "react";

const Input = (props) => {
  return (
    <Fragment>
      <input
        style={
          props.error
            ? // DR: Had to change 'style' to 'styles'.
              { ...styles.inputError, ...props.errorStyle }
            : { ...styles.input, ...props.style }
        }
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        type={props.type || "text"}
        placeholder={props.placeholder}
        required={props.required || false}
        accept={props.accept}
        multiple={props.multiple}
        disabled={props.disabled}
        autoComplete={props.autoComplete}
      />
    </Fragment>
  );
};

const styles = {
  input: {
    color: "#000",
    backgroundColor: "#eee",
    paddingRight: 5,
    paddingLeft: 10,
    fontSize: 18,
    border: "1px solid #d9d9d9",
    width: "100%",
    height: "40px",
    minWidth: 250,
    margin: 20,
    borderRadius: 5,
    flex: 1,
  },
  inputError: {
    color: "#000",
    backgroundColor: "#eee",
    padding: 5,
    fontSize: 18,
    borderColor: "red",
    borderWidth: 2,
    width: "60%",
    height: "auto",
    flex: 1,
    marginBottom: 4,
  },
};

export default Input;
