import instance from './axios';

interface PaymentType {
  type: boolean;
  title: string;
  content: string;
  cost: number;
}

export const modifyMoney = async (data: PaymentType, id: string) => {
  const response = await instance.put(`/money/put/${id}`, data);
  return response;
};
