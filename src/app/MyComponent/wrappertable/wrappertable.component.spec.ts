import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappertableComponent } from './wrappertable.component';

describe('WrappertableComponent', () => {
  let component: WrappertableComponent;
  let fixture: ComponentFixture<WrappertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrappertableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrappertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
