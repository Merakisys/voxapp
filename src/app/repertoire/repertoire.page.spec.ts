import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepertoirePage } from './repertoire.page';

describe('RepertoirePage', () => {
  let component: RepertoirePage;
  let fixture: ComponentFixture<RepertoirePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertoirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
