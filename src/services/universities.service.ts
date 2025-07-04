import { toStringSorts } from "../helpers/sort.helper";
import {api} from "../interceptor/api";
import { Sort } from "../models/sort.model";

function getUniversities(sorts: Sort[]){
  if(sorts.length > 0){
    return api.get(`universities${toStringSorts(sorts)}`)
  }
  return api.get(`universities`);
}

function listFavoritesUniversities(){
  return api.get(`universities/favorites`)
} 

function favoriteUniversity(id: number){
  return api.patch(`universities/favorite/${id}`)
} 

function autocompleteUniverity(){
  return api.get(`universities/autocomplete`)
} 

export { getUniversities, favoriteUniversity, listFavoritesUniversities, autocompleteUniverity };
