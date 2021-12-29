import { Module } from '@nestjs/common';
import { PythonRestService } from './python-rest.service';
import { PythonRestController } from './python-rest.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [PythonRestController],
  providers: [PythonRestService],
})
export class PythonRestModule {}
