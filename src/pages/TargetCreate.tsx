import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step from "../components/goal/Step";
import Goal from "../components/goal/Goal";
import LastStep from "../components/goal/LastStep";
import Duration from "../components/goal/Duration";
import SubGoalRoutine from "../components/goal/SubGoalRoutine";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { TargetInfoType, TargetStepType } from "../types/TargetTypes";

import CreateBar from "../components/target/animationBars/CreateBar";
import useToastList from "../hooks/useToastList";

import { usePreventGoBack } from "../hooks/usePreventLeave";
import GobackToast from "../components/toast/GobackToast";
import useCreateTarget from "../hooks/api/target/useCreateTarget";

const targetSchema: yup.ObjectSchema<any> = yup.object({
  goal: yup.string().required("목표를 입력해주세요"),
  subGoal: yup.array().of(
    yup.object().shape({
      id: yup.string(),
      value: yup.string().required("세부 목표를 작성해주세요"),
    })
  ),
  routine: yup.array().of(
    yup.object().shape({
      id: yup.string(),
      value: yup.string().required("세부 목표를 작성해주세요"),
    })
  ),
  endDate: yup.string().required("목표 달성일을 지정해주세요"),
});

const TargetCreate = () => {
  const { show } = useToastList();
  // const targetService = useTarget();
  const { mutate: createTarget } = useCreateTarget();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<TargetStepType>("goal");
  console.log(message);

  const methods = useForm<TargetInfoType>({
    defaultValues: {
      subGoal: [{}, {}],
      routine: [{}, {}],
    },
    resolver: yupResolver(targetSchema),
  });

  const onSubmitHandler = (data: TargetInfoType) => {
    createTarget(data, {
      onSuccess: (res) => {
        console.log("res", res);
        show("createToast");
        navigate("/target");
      },
      //TODO
      //onError : () => {}
    });
  };

  usePreventGoBack();

  return (
    <div className=" flex flex-col items-center h-screen px-6 pb-10 relative">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmitHandler)}
          className="w-full relative"
        >
          <CreateBar step={step} />
          <Step check={step === "goal"}>
            <Goal setStep={setStep} />
          </Step>
          <Step check={step === "subGoal"}>
            <SubGoalRoutine setStep={setStep} />
          </Step>
          <Step check={step === "duration"}>
            <Duration setStep={setStep} />
          </Step>
          <Step check={step === "lastStep"}>
            <LastStep setStep={setStep} />
          </Step>
        </form>
      </FormProvider>
      <GobackToast />
    </div>
  );
};

export default TargetCreate;
