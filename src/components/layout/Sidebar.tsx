import { FiX } from "react-icons/fi";
import usePopUp from "../../hooks/usePopUp";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../../hooks/useAuth";
import { FiEdit } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";
import "../../styles/Sidebar.css";
import { useContext } from "react";
import { AuthStateContext } from "../../context/AuthStateContext";
import { LoudOli, OliImage } from "../../utils/constant/image";

type Props = {
	isNameExisted: boolean;
	name: string | null | undefined;
};
const Sidebar = ({ isNameExisted, name }: Props) => {
	const { isSideBarOpen, outside, closeSideBar } = usePopUp();
	const { updateLoggedIn } = useContext(AuthStateContext);
	const authService = useAuthService();
	const navigate = useNavigate();

	const hook = () => {
		authService?.logout();
		updateLoggedIn();
		closeSideBar();
	};

	return (
		<>
			<CSSTransition
				nodeRef={outside}
				in={isSideBarOpen}
				timeout={300}
				classNames="sidebar"
				unmountOnExit
			>
				<div
					ref={outside}
					className="sidebar p-3 bg-lighterGray w-2/3 desktop:w-1/2 shadow-2xl h-full"
				>
					<div className="flex justify-end">
						<FiX onClick={closeSideBar} onKeyDown={closeSideBar} />
					</div>
					<div className="px-4 py-6">
						{isNameExisted ? (
							<p className=" font-semibold">{`안녕하세요 ${name}님`}</p>
						) : (
							<p className=" font-semibold">로그인을 해주세요</p>
						)}

						<div className="pt-4 text-gray font-semibold">
							{isNameExisted && (
								<button
									className="flex justify-center items-center text-orange-400"
									onClick={hook}
								>
									로그아웃하기
								</button>
							)}
						</div>
					</div>
					{isNameExisted ? (
						<div>
							{sidebarData.map(({ title, link, icon }, index) => {
								return (
									<div
										key={index}
										className="flex items-center cursor-pointer font-bold px-4 hover:text-gray"
										onClick={() => {
											navigate(link);
											closeSideBar();
										}}
									>
										<div className="w-8">{icon}</div>
										<div className="px-4 py-6">{title}</div>
									</div>
								);
							})}
						</div>
					) : (
						<div>
							{landingSidebarData.map(({ title, link, icon }, index) => {
								return (
									<div
										key={index}
										className="flex items-center cursor-pointer font-bold px-4 hover:text-gray"
										onClick={() => {
											navigate(link);
											closeSideBar();
										}}
									>
										<div className="">{icon}</div>
										<div className="px-4 py-6">{title}</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
			</CSSTransition>
		</>
	);
};

export default Sidebar;

const landingSidebarData = [
	{
		title: "로그인 하러가기",
		icon: <FiEdit />,
		link: "/signin",
	},
	{
		title: "서비스 이용 노하우",
		icon: <FiEdit />,
		link: "/faq",
	},
];

const sidebarData = [
	{
		title: "메인 페이지",
		icon: <img src={OliImage} alt="사진" />,
		link: "/target",
	},
	{
		title: "서비스 이용 노하우",
		icon: <img src={LoudOli} alt="사진" />,
		link: "/faq",
	},
];
