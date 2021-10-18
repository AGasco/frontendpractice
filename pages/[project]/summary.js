import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Summary from '../../components/Summary/Summary.component';
import { challengesData } from '../../components/HomeMain/HomeMain.config';

const SummaryPage = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { project } = router.query;

  useEffect(() => {
    const currentData = challengesData?.find((p) => p.link.includes(project));
    setData(currentData);
  }, []);

  return <Summary data={data} />;
};

export default SummaryPage;
