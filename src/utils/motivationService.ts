// src/utils/motivationService.ts

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The road to sobriety is filled with courage and determination. Keep going.",
    "One day at a time. Your future will thank you for today’s strength.",
  ];
  
  export async function getDailyQuote(): Promise<string> {
    // Simulate fetching a daily quote, could be an API call in the future
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("You are stronger than you think.");
      }, 1000);
    });
  }