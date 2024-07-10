import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPhotoComponent } from './hotel-photo.component';

describe('HotelPhotoComponent', () => {
  let component: HotelPhotoComponent;
  let fixture: ComponentFixture<HotelPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
