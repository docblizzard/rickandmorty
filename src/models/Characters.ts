import axios, { AxiosResponse } from "axios";
export interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  // Add other properties as needed
}

export class CharactersService {
  static async fetchCharacters(page: number): Promise<Characters[]> {
    try {
      const response: AxiosResponse<{ results: Characters[] }> =
        await axios.get(
          "https://rickandmortyapi.com/api/character/?page=" + page
        );
      return response.data.results;
    } catch (error) {
      console.error("Error fetching characters:", error);
      throw error;
    }
  }

  // static async fetchPage(): Promise<number> {
  //   try {
  //     const response: AxiosResponse<{ results: number }> = await axios.get(
  //       "https://rickandmortyapi.com/api/character")
  //     return response.data.results;
  //   } catch (error) {
  //     console.error("Error fetching characters:", error);
  //     throw error;
  //   }
  // }
}
