import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiturgyPage } from './liturgy.page';

describe('LiturgyPage', () => {
  let component: LiturgyPage;
  let fixture: ComponentFixture<LiturgyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LiturgyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
