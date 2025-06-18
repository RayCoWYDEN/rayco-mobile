export interface UniversityDTO {
  id: number;
  name: string;
  averageRank: number;
  latitude: number;
  longitude: number;
  distance: number;
  privateInstitution: boolean;
  entryTypes: EntryTypesDTO[];
  favorite: boolean;
}

export interface EntryTypesDTO {
  id: number;
  name: string;
}

export interface UniversityAutocompleteDTO {
  id: number;
  name: string;
}

export interface UniversitySaveDTO {
  id: number;
}
