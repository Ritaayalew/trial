import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolunteerEntity } from 'src/Entity/volunteer.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtCustomStrategy } from './jwt-custom.strategy';
import { VolunteerController } from './volunteer.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([VolunteerEntity]),
    JwtModule.register({
      secret: 'uyghlkowielewofjeiu7r74huhu8',
      signOptions: {
        algorithm: 'HS512',
        expiresIn: '1d',
      }
    }),
    PassportModule.register({
      dafaultStrategy:'jwt'
    })
  ],
  controllers: [AuthController, VolunteerController],
  providers: [AuthService, JwtCustomStrategy],
})
export class AuthModule {}
