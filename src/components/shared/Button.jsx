import PropTypes from 'prop-types';

function Button({
  bgColor,
  outlineOnly,
  outlineOnlyTextColor,
  children,
  bigBtn,
}) {
  return (
    <button
      className={`px-[20px] py-[10px] font-semibold rounded-full ${
        bigBtn ? 'w-80' : 'w-fit'
      } hover:opacity-50 ${
        outlineOnly
          ? `text-${outlineOnlyTextColor} border-2 border-blue-500`
          : `text-blue-100 bg-${bgColor}`
      }`}
    >
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  bgColor: 'zoom-blue',
  outlineOnlyTextColor: 'blue-600',
};

Button.propTypes = {
  outlineOnlyTextColor: PropTypes.string,
};

{
  /* <button
      className={`px-[20px] py-[10px] font-semibold rounded-full ${
        bigBtn ? 'w-80' : 'w-fit'
      } hover:opacity-50 ${
        outlineOnly
          ? ` border-2 text-${outlineOnlyTextColor} border-${borderColor}`
          : !outlineOnly && `bg-${bgColor} text-${textColor}`
      } `}
    ></button> */
}
