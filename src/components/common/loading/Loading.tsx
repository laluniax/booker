import { PacmanLoader } from 'react-spinners';
import * as St from './Loading.styled';

const Loading = () => {
  return (
    <St.Container>
      <PacmanLoader color="#74c0fc" size={30} speedMultiplier={2} />
    </St.Container>
  );
};

export default Loading;
