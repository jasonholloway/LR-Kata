
export type ActionCreator<Type extends string, Props = void> 
            = ((props?: Props) => Readonly<{ type: Type } & Props>)
                & { readonly type: Type }

export function actionCreator<Type extends string>(type: Type) {
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

export type sumReturnTypes<A extends ((...args: any[]) => any), B extends ((...args: any[]) => any)> 
            = ReturnType<A> & ReturnType<B>

export type extractCreators<O> = Extract<O[keyof O], ActionCreator<any, any>>
export type extractActions<O> = ReturnType<extractCreators<O>>
