import { postgres } from '../../environment';

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: postgres().user,
  password: postgres().password,
  database: postgres().database,
  define: {
    /** Cria Created and updated at */
    timestamps: true,
    /** Criar tabelas em caixa baixa e com _ ao invés de CamelCase */
    underscored: true,
    underscoredAll: true,
  },
};
