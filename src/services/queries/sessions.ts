import type { Session } from '$services/types';
import { sessionsKey } from '$services/keys';
import { client } from '$services/redis';

export const getSession = async (id: string) => {
	const session = await client.hGetAll(sessionsKey(id));

	if (Object.keys(session).length === 0) {
		console.log('Session not found');
		return null;
	}

	console.log(session);

	return deserializeSession(id, session);
};

export const saveSession = async (session: Session) => {
	const result = client.hSet(
        sessionsKey(session.id),
        serializeSession(session)
        );
        
	return result;
};

const deserializeSession = (id: string, session: { [key: string]: string }) => {
	const result = {
		id,
		userId: session.userId,
		username: session.username
	};

	return result;
};

const serializeSession = (session: Session) => {
	const result = {
		userId: session.userId,
		username: session.username
	};

	return result;
};
