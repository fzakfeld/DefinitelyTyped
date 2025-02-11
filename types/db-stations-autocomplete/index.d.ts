// Type definitions for db-stations-autocomplete 3.0
// Project: https://github.com/derhuerst/db-stations-autocomplete
// Definitions by: Freerk-Ole Zakfeld <https://github.com/fzakfeld>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface DbStationsAutocompleteResult {
    id: string;
    relevance: number;
    score: number;
    weight: number;
}

declare function autocomplete(
    query: string,
    /** @default 3 */
    results?: number,
    /** @default false*/
    fuzzy?: boolean,
    /** @default true */
    completion?: boolean,
): DbStationsAutocompleteResult[];

export = autocomplete;
