function Card({color = 'light', className, children}) {
  return(
    <div
      className={`${className} ${color === 'light' ? 'dark:bg-neutral-800 bg-white' : 'dark:bg-neutral-900 bg-neutral-100'}  overflow-hidden rounded-2xl`}
    >
      {children}
    </div>
  );
}

export default Card
