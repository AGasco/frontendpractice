import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { challengesData } from '../../data/main';

const DemoPage = () => {
  const [Component, setComponent] = useState();
  const router = useRouter();
  const { project } = router.query;

  useEffect(() => {
    const { component } = challengesData?.find((p) => p.link.includes(project));
    setComponent(component);
  }, []);

  return Component ? Component : <p>Sorry, this page is not built yet</p>;
};

export const getServerSideProps = (ctx) => {
  return {
    props: {
      params: ctx.params
    }
  };
};

export default DemoPage;
