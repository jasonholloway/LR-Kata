import { actionCreator } from "../../utils";

export const hotelsSearched = actionCreator('HOTELS_SEARCHED')
                                .withProps<{ filter: string }>();

export const hotelsFound = actionCreator('HOTELS_FOUND')
                                .withProps<{ hotels: any[] }>();

export const searchError = actionCreator('HOTEL_SEARCH_ERROR')
                                .withProps<{ error: any }>();
