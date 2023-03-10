import {services} from '../data' 
import ServiceCard  from '../components/ServiceCard'
import Head from 'next/head'

export default function index() {  
  return (
  <div className="flex flex-col flex-grow px-6 pt-1 ">
    <Head>
      <title>Frontend Developer | Portofolio</title>
    </Head>
    <h6 className="my-3 text-base font-medium">
    I am Talented and CreativeFront End Developer skilled at designing
    sites and writing clean code. Work Experience Matched content to
    customer specifications through skilled design, writing and editing with 3 Years 
    of Experance in the field of software in general Experience in front end field in particular
    , always looking forward to gain more experience.
    </h6>
    <div
      className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-dark-100 "
      style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" , marginTop: "2rem" }}
    >
      <h4 className="my-3 text-xl font-semibold tracking-wide ">
        What I am doing
      </h4>

      <div className="grid gap-6 my-3 md:grid-cols-2">
        {/* children's initial and animate property should be same as the parent during a stagger effect  */}
        {services.map((service) => (
          <div
            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
            key={service.title}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}