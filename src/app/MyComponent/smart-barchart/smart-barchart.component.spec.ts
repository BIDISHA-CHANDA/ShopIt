import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBarChartComponent } from './smart-barchart.component';

describe('SmartTableComponent', () => {
  let component: SmartBarChartComponent;
  let fixture: ComponentFixture<SmartBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
