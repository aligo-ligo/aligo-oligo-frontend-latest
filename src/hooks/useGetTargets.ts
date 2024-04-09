import { useQuery } from "@tanstack/react-query";
import { TargetService } from "../types/TargetTypes";
import { GuestService } from "../types/GuestType";
import {
	GUEST_KEY,
	TARGET_KEY,
	TARGET_LIST_KEY,
} from "../utils/constant/queryKeyConstants";

export const useAllTarget = (targetService: TargetService) => {
	return useQuery([TARGET_LIST_KEY], () => {
		return targetService?.getAllTarget();
	});
};

export const useTargetOnUser = (
	id: string | undefined,
	targetService: TargetService
) => {
	return useQuery([TARGET_KEY, id], () => {
		return targetService?.getTarget(id);
	});
};

export const useTargetOnGuest = (
	id: string | undefined,
	guestService: GuestService
) => {
	return useQuery([GUEST_KEY, id], () => {
		return guestService?.getGuestTarget(id);
	});
};
