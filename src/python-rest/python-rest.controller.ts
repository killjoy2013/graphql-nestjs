import { AuthGuard } from '@nestjs/passport';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PythonRestService } from './python-rest.service';

type ParamType = {
  id: number;
  name: string;
};

@Controller('python-rest')
export class PythonRestController {
  constructor(private readonly pythonRestService: PythonRestService) {}

  @Post()
  async runScript(@Body() params: ParamType) {
    const { name, id } = params;
    return await this.pythonRestService.runScript([id, name]);
  }
}
