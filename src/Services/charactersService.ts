import axios, { AxiosResponse } from "axios";
import { Characters } from "@/models/Characters";

export class CharactersService {
  async fetchCharacters(page: number): Promise<Characters[]> {
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
}
