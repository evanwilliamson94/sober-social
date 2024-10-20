// utils/api.ts

export const getSobrietyData = async (userId: string) => {
    const response = await fetch(`/api/sobriety?userId=${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch sobriety data');
    }
    return response.json();
  };
  
  