export interface Repository<T> {
    findAll():  Array<T> | Promise<Array<T>>
    save(type: T): void | Promise<void>
}