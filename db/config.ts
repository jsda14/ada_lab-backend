import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('ADAIALAB_PRUEBA0', 'username', 'password', {
  dialect: 'sqlite',
  host: './ADAIALAB_PRUEBA.sqlite',
});