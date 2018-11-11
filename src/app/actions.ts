import { createAction } from "./utils";
                          

export const hotelsSearched = createAction('HOTELS_SEARCHED')
                                .withProps<{ filter: string }>();

export const hotelsFound = createAction('HOTELS_FOUND')
                                .withProps<{ hotels: any[] }>();

export const hotelSearchError = createAction('HOTEL_SEARCH_ERROR')
                                    .withProps<{ error: any }>();

export type Action = ReturnType<
                        | typeof hotelsSearched
                        | typeof hotelsFound
                        | typeof hotelSearchError
                        >
