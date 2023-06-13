import instance from "./axios";

export const getPost = async(id: number) => {
    const response = await instance.get(`/money/get/${id}`);
    return response;
}