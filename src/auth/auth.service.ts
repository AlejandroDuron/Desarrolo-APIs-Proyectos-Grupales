import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt"
import { NetworkResources } from "inspector/promises";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    validateUser(email:string, password: string){
        if(email == "admin@api.com" && password == '1234'){
            return { id: 1, email }
        }
        return null
    }
}
