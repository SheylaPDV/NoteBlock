import client from "../api/client";

const notesBaseUrl = "api/v1/notes";

export const getLastedNotes = async () => {
  const url = notesBaseUrl;
  return client.get(url);
};

export const createNote = async (newArticule) => {
  const url = notesBaseUrl;
  return client.post(url, newArticule, {
    headers: { "content-type": "multipart/form-data" },
  });
};
