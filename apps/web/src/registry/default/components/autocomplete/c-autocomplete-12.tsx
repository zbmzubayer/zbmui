"use client";

import { useEffect, useState } from "react";

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteStatus,
  useAutocompleteFilter,
} from "@/registry/default/ui/autocomplete";
import { Spinner } from "@/registry/default/ui/spinner";

interface Movie {
  id: string;
  title: string;
  year: number;
}

const top20Movies: Movie[] = [
  { id: "1", title: "The Shawshank Redemption", year: 1994 },
  { id: "2", title: "The Godfather", year: 1972 },
  { id: "3", title: "The Dark Knight", year: 2008 },
  { id: "4", title: "The Godfather Part II", year: 1974 },
  { id: "5", title: "12 Angry Men", year: 1957 },
  { id: "6", title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { id: "7", title: "Schindler's List", year: 1993 },
  { id: "8", title: "Pulp Fiction", year: 1994 },
  { id: "9", title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { id: "10", title: "The Good, the Bad and the Ugly", year: 1966 },
  { id: "11", title: "Forrest Gump", year: 1994 },
  { id: "12", title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { id: "13", title: "Fight Club", year: 1999 },
  { id: "14", title: "Inception", year: 2010 },
  { id: "15", title: "Star Wars: Episode V – The Empire Strikes Back", year: 1980 },
  { id: "16", title: "The Matrix", year: 1999 },
  { id: "17", title: "Goodfellas", year: 1990 },
  { id: "18", title: "Interstellar", year: 2014 },
  { id: "19", title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { id: "20", title: "Se7en", year: 1995 },
];

async function searchMovies(
  query: string,
  filter: (item: string, query: string) => boolean
): Promise<Movie[]> {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 500 + 100));
  if (Math.random() < 0.01 || query === "will_error") {
    throw new Error("Network error");
  }
  return top20Movies.filter(
    (movie) => filter(movie.title, query) || filter(movie.year.toString(), query)
  );
}

export function AutocompleteDemo() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { contains } = useAutocompleteFilter();

  useEffect(() => {
    if (!searchValue) {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setError(null);
    let ignore = false;
    const timeoutId = setTimeout(async () => {
      try {
        const results = await searchMovies(searchValue, contains);
        if (!ignore) setSearchResults(results);
      } catch {
        if (!ignore) {
          setError("Failed to fetch movies. Please try again.");
          setSearchResults([]);
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }, 300);
    return () => {
      clearTimeout(timeoutId);
      ignore = true;
    };
  }, [searchValue, contains]);

  return (
    <Autocomplete
      items={searchResults}
      itemToStringValue={(item: unknown) => (item as Movie).title}
      value={searchValue}
      onValueChange={setSearchValue}
    >
      <AutocompleteInput aria-label="Search items" placeholder="Search items…" className="w-64" />
      <AutocompletePopup>
        {isLoading || (
          <AutocompleteEmpty>
            Movie or year "{searchValue}" does not exist in the Top 20 movies
          </AutocompleteEmpty>
        )}
        <AutocompleteStatus className="border-b">
          {isLoading ? (
            <span className="flex items-center justify-between gap-2 text-muted-foreground">
              Searching....
              <Spinner className="sm:size-4" />
            </span>
          ) : (
            <span>
              {searchResults.length} result{searchResults.length === 1 ? "" : "s"} found
            </span>
          )}
          {error && <span className="text-danger">{error}</span>}
        </AutocompleteStatus>
        <AutocompleteList scrollArea={true}>
          {(movie) => (
            <AutocompleteItem key={movie.id} value={movie}>
              <div className="flex w-full flex-col gap-1">
                <div className="font-medium">{movie.title}</div>
                <div className="text-muted-foreground text-xs">{movie.year}</div>
              </div>
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  );
}
