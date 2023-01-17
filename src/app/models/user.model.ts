export class User {
    public name: string;
    public email: string;
    public scopes: String[];
    public role: String[];
    public access_token: string;

    constructor(name: string, email: string, scopes: string[],role: string[], token: string){
        this.name = name;
        this.email = email;
        this.scopes = scopes;
        this.role = role;
        this.access_token = token;
    }
}
