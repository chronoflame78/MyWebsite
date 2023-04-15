import { ChangeEventHandler, ChangeEvent } from "react";
import { AnyAction } from "redux";

const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {}

interface ISearchBoxProps extends IChangeHandlerProps {
    className: string;
    placeHolder?: string;
}

interface IChangeHandlerProps {
    onChangeHandler: ChangeEventHandler<HTMLInputElement>
    //onChangeHandler: (a: object) => void
}

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>
    //onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

type CanadianAddress = {
    street: string;
    province: string;
}

type USAddress = {
    street: string;
    state: string;
}

type NorthAmericanAddress = CanadianAddress | USAddress;

const Address: NorthAmericanAddress = {
    street: 'adas',
    state: 'adasd'
}

const SearchBox = ({className, placeHolder, onChangeHandler}: ISearchBoxProps) => (
    <input
        className={className}
        type='search'
        placeholder={placeHolder}
        onChange={(e) => onChangeHandler(e)}
    />
)

export default SearchBox;

/*
    const [monsters, setMonsters = useState<Monster[]>([])
*/

export enum CATEGORIES_ACTION_TYPES {
    FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED',
};

export type ActionWithPayload<T, P> = {
    type: T,
    payload: P
};

export type Action<T> = {
    type: T
}

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string, P>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return {type, payload};
}


export const FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type CategoryItems = {
    id: number,
    imageUrl: string,
    name: string,
    price: number
}

export type Category = {
    title: string,
    imageUrl: string,
    items: CategoryItems[]
}