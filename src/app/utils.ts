
type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

export type ActionCreator<Type extends string, Props = void> 
            = ((props?: Props) => { readonly type: Type } & ReadOnly<Props>) 
                & { readonly type: Type }

export function createAction<Type extends string>(type: Type) {
    return {
        withProps<Props extends object>(): ActionCreator<Type, Props> {
            return Object.assign(
                ((props: Props) => Object.assign({}, props, { type })),
                { type });
        },
        withNoProps(): ActionCreator<Type, void> {
            throw 'not impl!!!!'
        }
    }
}

export type extractActionType<S> = S extends ActionCreator<infer Type, infer P> ? Type : never
export type enumerateActionTypes<O extends {}> = extractActionType<O[keyof O]>

export type summedReturnTypes<A extends ((...args: any[]) => any), B extends ((...args: any[]) => any)> 
            = ReturnType<A> & ReturnType<B>
