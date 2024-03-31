interface CardProps {
  color?: 'light' | 'dark'
  className?: string
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  color = 'light',
  className,
  children,
}) => (
  <div
    className={`${className} ${color === 'light' ? 'dark:bg-neutral-800 bg-white' : 'dark:bg-neutral-900 bg-neutral-100'}  overflow-hidden rounded-2xl`}
  >
    {children}
  </div>
)

export default Card
