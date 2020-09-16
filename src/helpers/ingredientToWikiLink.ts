export const ingredientToWikiLink = (name: string) =>
  "https://www.wikipedia.org/wiki/" + name.toLowerCase().split(" ").join("_");
