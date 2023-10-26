import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceGeneratorComponent } from './sentence-generator.component';

describe('SentenceGeneratorComponent', () => {
  let component: SentenceGeneratorComponent;
  let fixture: ComponentFixture<SentenceGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceGeneratorComponent]
    });
    fixture = TestBed.createComponent(SentenceGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
