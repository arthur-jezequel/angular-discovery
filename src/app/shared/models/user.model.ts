export class User {
    private readonly _username: string;
    private readonly _age: number;

    public constructor(username: string, age: number){
        this._username = username;
        this._age = age;
    }

    public get username(): string {
        return this._username;
    }

    public get age(): number {
        return this._age;
    }
}