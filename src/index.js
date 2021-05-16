import {Excel} from './components/excel/excel.js';
import {Header} from './components/header/Header';
import {Table} from './components/table/Table';
import {Toolbar} from './components/toolbar/Toolbar';
import {Formula} from './components/formula/Formula';
import './module';
import './scss/index.scss';


const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
});
excel.render();
