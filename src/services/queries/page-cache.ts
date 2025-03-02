import { pageCacheKey } from '$services/keys';
import { client } from '$services/redis';


const cacheRoutes = ['/about', '/auth/signin', '/auth/signup', '/privacy'];

export const getCachedPage = (route: string) => {
	if (cacheRoutes.includes(route)) {
		return client.get(pageCacheKey(route));
	}
	return null;
};

export const setCachedPage = (route: string, page: string) => {
	if (cacheRoutes.includes(route)) {
		return client.set(pageCacheKey(route), page,{
            EX:2
        });
	}
};
