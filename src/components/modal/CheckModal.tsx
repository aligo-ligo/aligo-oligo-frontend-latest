import { useContext } from "react";
import { useModifyTarget } from "../../hooks/useModifyTarget";
import StyledButton from "../common/StyledButton";
import { CheckModalContext } from "../../context/CheckModalContext";

type Props = {
	closeModal: () => void;
	targetId: string | undefined;
};

const CheckModal = ({ closeModal, targetId }: Props) => {
	const { subGoalValue, isSubGoalComplete } = useContext(CheckModalContext);
	const { subGoalMutation } = useModifyTarget(targetId);

	const handleClick = () => {
		isSubGoalComplete === null
			? subGoalMutation.mutate({
					id: targetId,
					value: subGoalValue,
					completeDate: new Date().toString(),
			  })
			: subGoalMutation.mutate({
					id: targetId,
					value: subGoalValue,
					completeDate: null,
			  });

		closeModal();
	};

	return (
		<div className="bg-white rounded-md">
			<h1 className="font-semibold text-xl mb-5"> 체크 포인트 최종 확인 </h1>
			{isSubGoalComplete === null ? (
				<>
					<p className="font-light text-sm">
						매일 루틴을 이행하여 해당 세분화 목표를 달성하셨나요?
					</p>
					<br />
					<p className="font-light text-sm">{`체크 포인트는 ${subGoalValue} 예요`}</p>
					<br />
					<p className="font-bold text-sm">{`'네' 를 누르시면 체크됩니다!`}</p>
				</>
			) : (
				<>
					<p className="font-light text-sm">{`해당 체크포인트인 ${subGoalValue} 을/를 취소하시나요?`}</p>
					<br />
					<p className="font-bold text-sm">{`'네' 를 누르시면 취소됩니다!`}</p>
				</>
			)}

			<div className="flex justify-center gap-4 p-4 ">
				<StyledButton
					styleName="sharingExit"
					type="button"
					onClick={handleClick}
				>
					네
				</StyledButton>
				<StyledButton
					styleName="sharingExit"
					type="button"
					onClick={closeModal}
				>
					아니요
				</StyledButton>
			</div>
		</div>
	);
};

export default CheckModal;
