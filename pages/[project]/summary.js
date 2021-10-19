import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { challengesData } from '../../data/main';
import Summary from '../../components/Main/Summary/Summary.component';
import Layout from '../../components/Main/Layout/Layout.component';

const SummaryPage = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { project } = router.query;

  useEffect(() => {
    const currentData = challengesData?.find((p) => p.link.includes(project));
    setData(currentData);
  }, [challengesData]);

  return <Summary data={data} />;
};

export const getServerSideProps = (ctx) => {
  return {
    props: {
      params: ctx.params
    }
  };
};

SummaryPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SummaryPage;
