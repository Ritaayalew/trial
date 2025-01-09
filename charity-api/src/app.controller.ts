import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('/')
  getHome(@Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'charity-frontend', 'charity_system_frontend', 'index.html');
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      }
    });
  }

  @Get('/admin-dashboard')
  getAdmin(@Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'charity-frontend', 'charity_system_frontend', 'Admin.html');
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      }
    });
  }

  @Get('/volunteer-dashboard')
  getDashboard(@Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'charity-frontend', 'charity_system_frontend', 'volunteer-profile.html');
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      }
    });
  }

  @Get('/shop')
  getShop(@Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'charity-frontend', 'charity_system_frontend', 'shop.html');
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      }
    });
  }

}



