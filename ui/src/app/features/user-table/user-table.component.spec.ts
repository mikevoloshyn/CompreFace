/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatTableModule, MatSelectModule} from '@angular/material';
import {UserTableComponent} from './user-table.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatSelectModule],
      declarations: [ UserTableComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});