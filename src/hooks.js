export const throwError = (message, code = 400) => {
  const errorObject = new Error(message);
  errorObject.statusCode = code;
  throw errorObject;
};

export const ownerOrNewHooks = async (context) => {
  let existing = null;

  const { userId, store, resourceId, body, boxId, method } = context;

  // This hook is only for myData store.
  if (boxId !== 'myData') {
    return context;
  }

  // early return if it's a safe action
  if (!['POST', 'UPDATE', 'DELETE'].includes(method)) {
    return context;
  }

  // From here it's a modification...

  if (!userId) {
    throwError('Creation/Update not allowed for unauthenticated users', 403);
  }

  const nextContext = {
    ...context,
    allow: true,
    body: { ...body, owner: userId },
  };

  if (!resourceId) {
    // Creation
    return nextContext;
  }

  try {
    existing = await store.get(boxId, resourceId);
  } catch {
    console.log(`${boxId} not found`);
    // Creation but with resourceId
    return nextContext;
  }

  if (existing.owner !== userId) {
    // Update with bad user
    throwError('Update allowed only for owner', 403);
  }
  // Update with good user (and force user)
  return nextContext;
};
