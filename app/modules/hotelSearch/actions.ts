import { actionCreator } from "../../utils";
import Hotel from "./Hotel";

export const hotelsSearched = actionCreator('HOTELS_SEARCHED')
                                .withProps<{ filter: string }>();

export const hotelsFound = actionCreator('HOTELS_FOUND')
                                .withProps<{ hotels: Hotel[] }>();

export const searchError = actionCreator('HOTEL_SEARCH_ERROR')
                                .withProps<{ error: any }>();
