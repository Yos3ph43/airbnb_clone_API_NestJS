import { ApiProperty } from "@nestjs/swagger"


export interface LoginDto {
    token: string,
    user: {
        user_id: number,
        name: string | null,
        email: string,
        password: string
        phone: string | null,
        birthday: string | null,
        gender: string | null,
        role: string | null,
        // avatar: null | string
    }
}

export interface SignupDto {

}

export class LoginBody {
    @ApiProperty({ description: "email", type: String })
    email: string
    @ApiProperty({ description: "password", type: String })
    password: string
}

export class SignupBody {
    @ApiProperty({ description: "name", type: String })
    name: string | null
    @ApiProperty({ description: "email", type: String })
    email: string
    @ApiProperty({ description: "password", type: String })
    password: string
    @ApiProperty({ description: "name", type: String })
    phone: string | null
    @ApiProperty({ description: "name", type: String })
    birthday: string | null
    @ApiProperty({ description: "name", type: String })
    gender: string | null
    @ApiProperty({ description: "name", type: String })
    role: string | null
}
