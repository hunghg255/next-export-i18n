// import { useTranslation } from 'next-i18next';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { makeStaticProps } from 'src/lib/getStatic';

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <h1>{t('home.title')}</h1>
      <br />
      <br />

      <Link className='p-4 bg-[blue]' href={'/en'}>
        EN
      </Link>
      <br />
      <br />

      <br />

      <Link className='p-4 bg-[red]' href={'/vi'}>
        VI
      </Link>
    </>
  );
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
