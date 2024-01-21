import {
  BarLoader,
  BeatLoader,
  ClipLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  MoonLoader,
  PulseLoader,
  SyncLoader,
} from 'react-spinners';
import * as St from './Loading.styled';

const Loading = () => {
  return (
    <St.Container>
      <MoonLoader color="#74c0fc" />
      <GridLoader color="#74c0fc" />
      <BarLoader color="#74c0fc" />
      <ClipLoader color="#74c0fc" />
      <SyncLoader color="#74c0fc" />
      <PulseLoader color="#74c0fc" />
      <FadeLoader color="#74c0fc" />
      <BeatLoader color="#74c0fc" />
      <DotLoader color="#74c0fc" />
    </St.Container>
  );
};

export default Loading;
