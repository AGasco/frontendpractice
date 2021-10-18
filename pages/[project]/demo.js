import { useRouter } from 'next/router';

const Summary = () => {
  const router = useRouter();
  const { project } = router.query;

  return <p>{`Welcome to ${project}'s demo`}</p>;
};

export default Summary;
