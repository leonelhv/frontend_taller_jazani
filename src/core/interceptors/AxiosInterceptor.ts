import axios, { type InternalAxiosRequestConfig } from 'axios';
import { LocalStorageSession } from '../sessions';
import { type UserSecurityResponse } from '@/auth/login/domain';

const AxiosInterceptor = (): void => {
	axios.interceptors.request.use(
    
		(config: InternalAxiosRequestConfig) => {

      config.headers.set('Accept', 'application/json');
      config.headers.set('Content-Type', 'application/json');

			const isValidAuth = LocalStorageSession.isValidAuthorization();

			console.log('Interceptor', isValidAuth);

			if (isValidAuth) {
				const user: UserSecurityResponse = LocalStorageSession.getAuthorization();
				const security = user.security;

        config.headers.set('Authorization', `${security.tokenType} ${security.accesTocken}`);
			}
			console.log('Interceptor');
			return config;
		},
		async error => await Promise.reject(error),
	);

	axios.interceptors.response.use(
		response => response,
		async error => await Promise.reject(error),
	);
};

export default AxiosInterceptor;

// https://github.com/axios/axios/issues/5494#issuecomment-1445576673