import type { CreateItemAttrs } from '$services/types';
import { client } from '$services/redis';
import { serialize } from './serialize';
import { genId } from '$services/utils';
import { itemsKey } from '$services/keys';
import { deserialize } from './deserialize';

export const getItem = async (id: string) => {
	const item = await client.hGetAll(itemsKey(id));
	if (Object.keys(item).length === 0) {
		console.log('Item not found');
		return null;
	}
    
	const deserializedItem = deserialize(id, item);
	console.log(deserializedItem);

	return deserializedItem;
};

export const getItems = async (ids: string[]) => {};

export const createItem = async (attrs: CreateItemAttrs, userId: string) => {
	const id = genId();

	const serializedResult = serialize(attrs);

	await client.hSet(itemsKey(id), serializedResult);

	return id;
};
