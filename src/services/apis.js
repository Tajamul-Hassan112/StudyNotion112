const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log("BASE_URL ===>", BASE_URL); // add this for debugging

export const categories = {
  CATEGORIES_API: `${BASE_URL}/api/v1/course/showAllCategories`, // ✅ CORRECT
};
