import { useState } from 'react';

type SurveyDataType = {
  [key: string]: string;
};

const Survey = () => {
  const [surveyData, setSurveyData] = useState<SurveyDataType>({});
  const [step, setStep] = useState<number>(1);

  const nextStepHandler = (answer: string) => {};

  return (
    <div>
      <h1>책 추천 설문조사</h1>
    </div>
  );
};

export default Survey;
