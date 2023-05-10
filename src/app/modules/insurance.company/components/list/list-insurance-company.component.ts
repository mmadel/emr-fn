import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IColumn, IColumnFilterValue, ISorterValue } from '@coreui/angular-pro/lib/smart-table/smart-table.type';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, map, Observable, retry, Subject, takeUntil, tap } from 'rxjs';
import { InsuranceCompany } from '../../models/insurance.company';
import { InsuranceCompanyService } from '../../services/insurance-company.service';
import { IApiParams } from './interfaces/api.params';
import { IParams } from './interfaces/params';

@Component({
  selector: 'app-list-insurance-company',
  templateUrl: './list-insurance-company.component.html',
  styleUrls: ['./list-insurance-company.component.css']
})
export class ListInsuranceCompanyComponent implements OnInit {
  readonly activePage$ = new BehaviorSubject(0);
  readonly columnFilterValue$ = new BehaviorSubject({});
  readonly itemsPerPage$ = new BehaviorSubject(5);
  readonly loadingData$ = new BehaviorSubject<boolean>(true);
  readonly totalPages$ = new BehaviorSubject<number>(1);
  readonly sorterValue$ = new BehaviorSubject({});
  readonly totalItems$ = new BehaviorSubject(0);

  readonly apiParams$ = new BehaviorSubject<IApiParams>({ limit: this.itemsPerPage$.value, offset: 0 });
  readonly retry$ = new Subject<boolean>();

  private _apiParams: IApiParams = {};
  set apiParams(value: any) {
    const params = {
      ...this._apiParams,
      ...value
    };

    const entries = new Map(Object.entries(params));
    entries.forEach((value, key, map) => {
      if (value === '' || value === undefined || value === null) {
        map.delete(key);
      }
    });

    const apiParams = Object.fromEntries(entries);
    this.loadingData$.next(true);
    this._apiParams = { ...apiParams };
    this.retry$.next(true);
    this.apiParams$.next({ ...apiParams });
  }
  readonly columns: (string | IColumn)[] = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'insuranceType',
      label: 'Type'
    },
    {
      key: 'phone',
      label: 'Phone'
    },
    {
      key: 'fax',
      label: 'Fax'
    },
    {
      key: 'actions',
      label: 'Actions',
      filter: false,
      sorter: false
    }
  ];
  readonly #destroy$ = new Subject<boolean>();
  readonly errorMessage$ = new Subject<string>();
  readonly props$: Observable<IParams> = combineLatest([
    this.activePage$,
    this.columnFilterValue$,
    this.itemsPerPage$,
    this.sorterValue$,
    this.totalPages$
  ]).pipe(
    debounceTime(100),
    map(([activePage, columnFilterValue, itemsPerPage, sorterValue, totalPages]) => ({
      activePage,
      columnFilterValue,
      itemsPerPage,
      sorterValue,
      totalPages
    }))
  );
  insuranceCompany$!: Observable<InsuranceCompany[]>;
  constructor(private router: Router, private insuranceCompanyService:InsuranceCompanyService) { }

  ngOnInit(): void {
    this.activePage$.pipe(
      takeUntil(this.#destroy$)
    ).subscribe((page) => {
      const limit = this.itemsPerPage$.value;
      const offset = page - 1;
      this.apiParams = { offset, limit };
    });

    this.itemsPerPage$.pipe(
      distinctUntilChanged(),
      takeUntil(this.#destroy$)
    ).subscribe((limit) => {
      const totalPages = Math.ceil(this.totalItems$.value / limit) ?? 1;
      this.totalPages$.next(totalPages);
    });

    this.totalItems$.pipe(
      distinctUntilChanged(),
      takeUntil(this.#destroy$)
    ).subscribe((totalItems) => {
      const totalPages = Math.ceil(totalItems / this.itemsPerPage$.value) ?? 1;
      this.totalPages$.next(totalPages);
    });

    this.totalPages$.pipe(
      takeUntil(this.#destroy$)
    ).subscribe((totalPages) => {
      const activePage = this.activePage$.value > totalPages ? totalPages : this.activePage$.value;
      this.setActivePage(activePage);
    });

    this.insuranceCompany$ = this.insuranceCompanyService.get(this.apiParams$).pipe(
      retry({
        delay: (error) => {
          console.warn('Retry: ', error);
          this.errorMessage$.next(error.message ?? `Error: ${JSON.stringify(error)}`);
          this.loadingData$.next(false);
          return this.retry$;
        }
      }),
      tap((response:any) => {
        this.totalItems$.next(response.number_of_matching_records);
        if (response.number_of_records) {
          this.errorMessage$.next('');
        }
        this.retry$.next(false);
        this.loadingData$.next(false);
      }),
      map((response:any) => {
        return response.records;
      })
    );
  }
  handleColumnFilterValueChange(columnFilterValue: IColumnFilterValue) {
    this.setActivePage(1);
    this.apiParams = { ...columnFilterValue };
    this.columnFilterValue$.next(columnFilterValue);
  }

  handleSorterValueChange(sorterValue: ISorterValue) {
    this.sorterValue$.next(!!sorterValue.state ? sorterValue : {});
    const sort = !!sorterValue.state ? `${sorterValue.column}%${sorterValue.state}` : '';
    this.apiParams = { sort };
  }

  handleFilteredItemsChange(filteredItems: InsuranceCompany[]): void {
    // console.table(filteredItems);
  }

  handleActivePageChange(page: number) {
    this.setActivePage(page);
  }

  handleItemsPerPageChange(limit: number) {
    this.itemsPerPage$.next(limit);
  }
  setActivePage(page: number) {
    page = page > 0 && this.totalPages$.value + 1 > page ? page : 1;
    this.activePage$.next(page);
  }
  create() {
    this.router.navigateByUrl('/insurance/company/create');
  }
}
