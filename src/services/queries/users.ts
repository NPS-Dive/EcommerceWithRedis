import { client } from '$services/redis';
import type { CreateUserAttrs } from '$services/types';
import { genId } from '$services/utils';
import { usersKey } from '$services/keys';

export const getUserByUsername = async (username: string) => {
    
};

export const getUserById = async (id: string) => {
	const user = await client.hGetAll(usersKey(id));

	return deserialize(id, user);
};


export const createUser = async (attrs: CreateUserAttrs) => {
	const id = genId(); // Generate a unique random id

	await client.hSet(usersKey(id), serialize(attrs));
	return id;
};


//serialize the user & pass for redis
const serialize = (user: CreateUserAttrs) => {
	const serializedResult = {
		username: user.username,
		password: user.password
	};

	return serializedResult;
};


//deserialize the user & pass for redis
const deserialize = (id: string, user: { [key: string]: string }) => {
	const desrializedResult = {
		id,
		username: user.username,
		password: user.password
	};

	return desrializedResult;
};
