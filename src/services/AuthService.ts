import { AxiosInstance } from "axios";
// import HTTPError from "../network/httpError";
import { AuthResponse, AuthService, UserInfoType } from "../types/AuthType";
import { TokenRepository } from "../repository/tokenRepository";
import { ACCESS_TOKEN, NICK_NAME, USER_ID } from "../utils/constant/auth";

export default class AuthServiceImpl implements AuthService {
	tokenRepository: TokenRepository;

	constructor(
		private httpClient: AxiosInstance,
		tokenRepository: TokenRepository
	) {
		this.tokenRepository = tokenRepository;
	}

	async signUp({ email, password, nickName }: UserInfoType) {
		const response = await this.httpClient.post<AuthResponse>("users/signup", {
			email,
			password,
			nickName,
		});
		const { data } = response;
		this.tokenRepository.save(ACCESS_TOKEN, data.accessToken);
		this.tokenRepository.save(USER_ID, data.user.id.toString());
		this.tokenRepository.save(NICK_NAME, data.user.nickName.toString());
		return data;
	}

	async signIn({ email, password }: UserInfoType) {
		const response = await this.httpClient.post<AuthResponse>("users/signin", {
			email,
			password,
		});
		const { data } = response;
		this.tokenRepository.save(ACCESS_TOKEN, data.accessToken);
		this.tokenRepository.save(USER_ID, data.user.id.toString());
		this.tokenRepository.save(NICK_NAME, data.user.nickName.toString());
		return data;
	}

	async kakaoSignin(code: string | null) {
		const response = await this.httpClient.get<AuthResponse>(
			`users/kakao?code=${code}`,
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
				},
			}
		);

		const { data } = response;
		this.tokenRepository.save(ACCESS_TOKEN, data.accessToken);
		this.tokenRepository.save(USER_ID, data.user.id.toString());
		this.tokenRepository.save(NICK_NAME, data.user.nickName.toString());
		return data;
	}

	logout() {
		this.tokenRepository.remove(ACCESS_TOKEN);
		this.tokenRepository.remove(NICK_NAME);
		this.tokenRepository.remove(USER_ID);
	}
}
