import axios from 'axios';
import axiosRetry from 'axios-retry';

const api = {
    jokes: 'http://api.icndb.com/jokes/random',
    categories: 'http://api.icndb.com/categories',
    count: 'http://api.icndb.com/jokes/count',
};

const retryClient = axios.create();
axiosRetry(retryClient, { retries: 3, retryDelay: axiosRetry.exponentialDelay, });

export const getJokeCount = async () => {
    const response = await retryClient.get(api.count);
    return response.data;
}

export const getCategories = async () => {
    const response = await retryClient.get(api.categories);
    return response.data;
}

export const getRandomJokes = async ({ limit, selectedCategory, firstName, lastName }) => {
    const link = api.jokes +"/" + limit + "?" +
        (selectedCategory.length ? `limitTo=[${selectedCategory.toString()}]` : "") +
        (firstName ? `&firstName=${firstName}` : "") +
        (lastName ? `&lastName=${lastName}` : "");

    const response = await retryClient.get(link);
    return response.data;
};

