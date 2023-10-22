import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from "./todo.service";

describe('todo service', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  test("should be defined", () => {
    expect(true).toBe(true);
  });

  it('ApiService - should be defined', () => {
    expect(service).toBeDefined();
  });
});
