import { Category } from "./category.model";

export interface Joke {
   id: string;
   categoryId: string;
   content: string;
   category: Category;
}
