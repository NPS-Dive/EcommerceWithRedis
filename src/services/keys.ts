export const pageCacheKey = (id: string) => `pagecache#${id}`;

//making userKey a function that takes a userId as an argument
export const usersKey = (userId: string) => `users#${userId}`;

// making sessionsKey a function that takes a sessionId as an argument
export const sessionsKey = (sessionId: string) => `sessions#${sessionId}`;

export const itemsKey = (id: string) => `items#${id}`;
