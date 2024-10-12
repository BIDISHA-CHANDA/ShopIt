import { TestBed } from '@angular/core/testing';
import { TopCategoriesService } from './top-categories.service';


describe('TopCategoriesService', () => {
  let service: TopCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
