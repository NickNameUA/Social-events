import { Test, TestingModule } from '@nestjs/testing';
import { EnvService } from './enviroment.service';

describe('EnviromentServiceService', () => {
  let service: EnvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvService],
    }).compile();

    service = module.get<EnvService>(EnvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
