import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { JwtPayload } from 'src/auth/jwt-payload.interface';
import fs from 'fs';
import path from 'path';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;

    //const payload: JwtPayload = { username, rights: ['removeCity'] };

    const payload: JwtPayload = { username };

    const accessToken: string = await this.jwtService.sign(payload);
    // const accessToken: string = await this.jwtService.sign(payload, {
    //   privateKey: rsa,
    //   algorithm: 'RS256',
    // });
    return { accessToken };
  }
}
