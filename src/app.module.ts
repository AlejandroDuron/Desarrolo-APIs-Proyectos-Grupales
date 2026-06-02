import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MachinesModule } from './machines/machines.module';
import { RentalsModule } from './rentals/rentals.module';
import { AuthModule } from './auth/auth.module';
import { Auth2Module } from './auth2/auth2.module';

@Module({
  imports: [UsersModule, MachinesModule, RentalsModule, AuthModule, Auth2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
