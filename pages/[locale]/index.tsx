// import { useTranslation } from 'next-i18next';

import { makeStaticProps } from 'src/lib/getStatic';

const Home = () => {
  // const { t } = useTranslation('home');
  return <>Home</>;
};

export default Home;

// Home.getLayout = function getLayout(page: React.ReactElement) {
//   return <Layout>{page}</Layout>;
// };

// export const getStaticProps = async ({ locale }: NextPageContext) => ({
//   props: {
//     ...(await serverSideTranslations(locale || "vi", [
//       "common",
//       "page_title",
//       "header",
//       "contact",
//       "footer",
//       "home",
//       "event",
//     ])),
//   },
// });

const getStaticProps = makeStaticProps(['common', 'home']);

export { getStaticProps };

export { getStaticPaths } from 'src/lib/getStatic';
