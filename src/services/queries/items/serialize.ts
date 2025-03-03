import type { CreateItemAttrs } from '$services/types';

export const serialize = (attrs: CreateItemAttrs) => {
    const result = {
      ...attrs,
      createdAt:attrs.createdAt.toMillis(),
      endingAt:attrs.endingAt.toMillis(),
    };

    return result;
};
