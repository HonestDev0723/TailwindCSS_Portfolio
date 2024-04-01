import ServiceCard from '../components/ServiceCard'

const servicesData = [
  {
    title: 'Web Application Development',
    description:
      'Want a user-friendly and responsive web application? Let me bring your vision to life with my development skills.',
  },
  {
    title: 'API Development and Integration',
    description:
      'Streamline your systems with seamless API integration - I specialize in developing and integrating APIs.',
  },
  {
    title: 'Database Design and Management',
    description:
      'Let me design and manage a database system for efficient and secure information management.',
  },
  {
    title: 'Server Configuration and Deployment',
    description:
      "Whether it's on-premises or cloud-based servers, I can configure and deploy the right solution for your needs.",
  },
  {
    title: 'Performance Optimization',
    description:
      "Need to boost your application's speed and responsiveness? I specialize in performance optimization.",
  },
  {
    title: 'Maintenance and Support',
    description:
      'With my maintenance and support services, you can have peace of mind knowing your systems are in good hands.',
  },
]

const Services = () => (
  <>
    <div className="px-6 mx-auto items-center space-y-4 text-center lg:w-2/3">
      <h1 className="text-5xl font-semibold text-white">Services</h1>
      <hr className="flex gap-1 items-center justify-center cursor-pointer text-base lg:text-lg font-semibold relative before:absolute before:rounded-md before:left-0 before:-bottom-1 before:w-0 transition-all before:duration-200 before:h-[4px] before:bg-purple-500 group-hover:before:w-full" />
      <p className="text-white">
        With a focus on quality, innovation, and customer satisfaction, I'm
        dedicated to delivering exceptional results in every project I
        undertake.
      </p>
    </div>
    <div className="grid grid-cols-1 px-6 py-6 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {servicesData.map(({ illust, title, description }, id) => (
        <ServiceCard
          key={id}
          title={title}
          description={description}
        />
      ))}
    </div>
  </>
)

export default Services
