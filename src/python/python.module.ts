import { Module } from '@nestjs/common';
import { PythonService } from './python.service';
import { PythonResolver } from './python.resolver';

@Module({
  providers: [PythonResolver, PythonService]
})
export class PythonModule {}
