import Card from './Card'

function ServiceCard({illust, title, description}) {
  return(
    <Card
      color="dark"
      className="hover:bg-indigo-500 dark:hover:bg-indigo-500 group space-y-8 p-8 transition-colors duration-300"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-xl font-semibold transition-colors duration-300 group-hover:text-white dark:text-white">
          {title}
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 group-hover:text-indigo-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </Card>
  );
}
export default ServiceCard;