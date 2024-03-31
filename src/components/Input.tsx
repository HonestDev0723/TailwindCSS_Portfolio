interface InputProps {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  multiline?: boolean
  rows?: number
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  multiline = false,
  rows = 3,
}) =>
  multiline ? (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className="dark:bg-neutral-800 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:ring-indigo-500 w-full resize-none rounded-lg px-6 py-3 focus:outline-none focus:ring-2 dark:text-white"
    />
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      className="dark:bg-neutral-800 focus:ring-indigo-500 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 w-full rounded-lg px-6 py-3 focus:outline-none focus:ring-2 dark:text-white"
    />
  )

export default Input
