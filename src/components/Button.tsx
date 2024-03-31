interface ButtonProps {
  icon?: React.JSX.Element
  wide?: boolean
  onClick: () => void
  children: string
}

const Button: React.FC<ButtonProps> = ({
  icon,
  wide = false,
  onClick,
  children,
}) => (
  <button
    type="button"
    className={`${wide && 'w-full'} hover:bg-indigo-600 bg-indigo-500 inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3 text-white transition-colors duration-300`}
    onClick={onClick}
  >
    {icon && <div className="w-6">{icon}</div>}
    {children}
  </button>
)

export default Button
