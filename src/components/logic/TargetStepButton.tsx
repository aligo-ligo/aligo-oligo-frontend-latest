import { useFormContext } from "react-hook-form";

import StyledButton from "../common/StyledButton";
import { TargetStepType } from "../../types/TargetTypes";

type Props = {
	prev?: TargetStepType | false;
	present: string[];
	next: TargetStepType;
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
	children: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
};

const TargetStepButton = ({
	prev = false,
	present,
	next,
	setStep,
	children,
	type = "button",
}: Props) => {
	const {
		trigger,
		formState: { errors },
	} = useFormContext();

	const onClickHandler = async () => {
		if (next === "done") return;
		if (prev !== false) return setStep(prev);

		const validate = await trigger(present);
		if (!validate) {
			console.log("res", errors);
		} else {
			setStep(next);
		}
	};
	return (
		<StyledButton styleName="targetCreate" type={type} onClick={onClickHandler}>
			{children}
		</StyledButton>
	);
};

export default TargetStepButton;
