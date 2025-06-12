import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepertoriesPage } from './repertories.page';

describe('RepertoriesPage', () => {
  let component: RepertoriesPage;
  let fixture: ComponentFixture<RepertoriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
