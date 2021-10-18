import { useRouter } from 'next/router';
import Summary from '../../components/Summary/Summary.component';

const SummaryPage = () => {
  const router = useRouter();
  const { project } = router.query;
  const data = {};

  return (
    <div>
      <p>{`Welcome to ${project}'s summary`}</p>
      <Summary data={data} />
    </div>
  );
};

export default SummaryPage;
