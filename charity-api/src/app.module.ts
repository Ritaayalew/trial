import { Module, Options } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharityModule } from './charity/charity.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


const ormOptions: TypeOrmModuleOptions={
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "tati9021@",
  database: "charity_database",
  autoLoadEntities: true,
  synchronize: true
};

 

@Module({
  imports: [
    CharityModule,
    TypeOrmModule.forRoot(ormOptions),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', '..', 'charity-frontend','charity_system_frontend'),}),
    AuthModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
