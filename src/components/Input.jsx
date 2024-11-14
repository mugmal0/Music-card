import PropTypes from "prop-types";
export default function Input(props) {
  return (
    <div className="stake">
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        className={props.className}
        onChange={props.onChange}
      />
      <button onClick={props.onAdd}>ADD</button>
    </div>
  );
}
Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onAdd: PropTypes.func,
  onChange: PropTypes.func,
};
