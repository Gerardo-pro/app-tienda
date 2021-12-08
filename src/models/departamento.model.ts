import {Entity, model, property} from '@loopback/repository';

@model()
export class Departamento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombredepartamento: string;

  @property({
    type: 'string',
    required: true,
  })
  abarrotes: string;

  @property({
    type: 'string',
    required: true,
  })
  farmacias: string;

  @property({
    type: 'string',
    required: true,
  })
  electronico: string;


  constructor(data?: Partial<Departamento>) {
    super(data);
  }
}

export interface DepartamentoRelations {
  // describe navigational properties here
}

export type DepartamentoWithRelations = Departamento & DepartamentoRelations;
