import { getLongLinkFromId } from '@/utils/store';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const LinkPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const url = getLongLinkFromId(id);

      if (url) {
        window.location.href = url;
      } else {
        throw new Response('Not Found', { status: 404 });
      }
    }
  }, [id, navigate]);

  return <div>Redirecting...</div>;
};

export default LinkPage;
