import { fetchPost, fetchPut, ROOT_URL } from './common';

export const sendMessage = async (receiver: string) => {
  try {
    const result = await fetchPost({ receiver }, '/api/sendDownloadUrl');
    const resultJson = await result.json();
    return resultJson;
  } catch (error) {
    console.error(`sendMessage: ${error}`);
    return error;
  }
};
