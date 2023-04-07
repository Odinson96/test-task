import type { NextPage } from 'next';
import Head from 'next/head';
import { UserList } from '../components/UsersList';

// export const getStaticProps: GetStaticProps = async () => {
//    const response = await axios.get('http://localhost:3002/users');
//    const data: value[] = response.data
//   return {
//     props: {
//       data: data,
//     },
//   };
// };

// const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
        <UserList />
      </div>
    </>
  );
};

export default Home;
