
function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary'
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  )
}

export default Button
