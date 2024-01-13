import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { filteredPostId } from '../../api/supabase.api';
import { Tablesposts } from './bookertalkmain/BookerTalkMain';

const Detail = () => {
  const params = useParams().id;
  const [data, setData] = useState<Tablesposts>();

  const getPosts = async () => {
    const result = await filteredPostId(params as string);
    setData(result[0]);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <div>디테일 페이지</div>
      <div>{data?.title}</div>ㅇ<div>{data?.content}</div>
    </>
  );
};

export default Detail;
