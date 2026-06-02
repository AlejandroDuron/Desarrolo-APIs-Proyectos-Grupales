import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { GoogleStrategy } from './google.strategy';


@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, GoogleStrategy],
  imports: [
      JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1h' }
    }),
  ],
  exports: [AuthService],
})

export class AuthModule {}
