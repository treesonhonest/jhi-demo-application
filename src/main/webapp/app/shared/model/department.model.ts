import { ILocation } from '@/shared/model/location.model';
import { IEmployee } from '@/shared/model/employee.model';

export interface IDepartment {
  id?: number;
  departmentName?: string;
  building?: string | null;
  location?: ILocation | null;
  employees?: IEmployee[] | null;
}

export class Department implements IDepartment {
  constructor(
    public id?: number,
    public departmentName?: string,
    public building?: string | null,
    public location?: ILocation | null,
    public employees?: IEmployee[] | null
  ) {}
}
