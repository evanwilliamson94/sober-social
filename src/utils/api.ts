// /utils/api.ts
export const getSobrietyData = async (userId: string) => {
    try {
      const response = await fetch(`/api/sobriety?userId=${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching sobriety data:", error);
      return { daysSober: 0 }; // Return default value on error
    }
  };
  