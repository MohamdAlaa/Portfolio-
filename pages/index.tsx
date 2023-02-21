import {services} from '../data'
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'

export default function index() {
  console.log('client',services);
  
  
  return (
    <div>
      <h1>bye bye world</h1>
    </div>
  )
}
 
// export const getServerSideProps = async (context:GetServerSidePropsContext) => {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER',services)
  
//   return {
//     props: {
//       services: data.services
//     }
//   }
// }

// export const getStaticProps = async (context:GetStaticPropsContext) => {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER',services)
  
//   return {
//     props: {
//       services: data.services
//     }
//   }
// }