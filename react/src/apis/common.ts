export const ROOT_URL = process.env.REACT_APP_SERVER_URL;

export const fetchPost = async (
  body: Record<string, unknown> | undefined,
  api: string | undefined,
  signal?: AbortSignal | undefined
): Promise<Response> => {
  if (!body || !api) throw new Error('No request object');

  const fetchOption = {
    signal,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  try {
    const res: Response = await fetch(`${ROOT_URL}${api}`, fetchOption);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchPut = async (
  body: Record<string, unknown> | undefined,
  api: string | undefined,
  signal?: AbortSignal | undefined
): Promise<Response> => {
  if (!body || !api) throw new Error('No request object');

  const fetchOption = {
    signal,
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  try {
    const res: Response = await fetch(`${ROOT_URL}${api}`, fetchOption);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
