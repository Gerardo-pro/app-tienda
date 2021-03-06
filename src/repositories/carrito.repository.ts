import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnjsonDataSource} from '../datasources';
import {Carrito, CarritoRelations} from '../models';

export class CarritoRepository extends DefaultCrudRepository<
  Carrito,
  typeof Carrito.prototype.id,
  CarritoRelations
> {
  constructor(
    @inject('datasources.connjson') dataSource: ConnjsonDataSource,
  ) {
    super(Carrito, dataSource);
  }
}
