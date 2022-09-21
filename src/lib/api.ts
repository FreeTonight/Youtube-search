import { Result } from "./../interface/result";

const API_KEY = process.env.REACT_APP_YOUTUBE_API;
const API_URL = "https://youtube.googleapis.com/youtube/v3/search";

export const fetchAPI = async (
    query: string,
    nextPageToken?: string,
    part = "snippet",
    type = "video",
    limit = 10 
): Promise<Result | null> => {
    const params_url =
        `${API_URL}?part=${part}&q=${query}&key=${API_KEY}&maxResults=${limit}&type=${type}` +
        (nextPageToken ? `&pageToken=${nextPageToken}` : "");

    try {
        const response = await fetch(params_url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (err) {
        if (err instanceof Error) throw err;
    }
    return null;
};