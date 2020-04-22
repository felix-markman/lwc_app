import { LightningElement, api } from 'lwc';

export default class DataTable extends LightningElement {
	@api columns;
	@api data;
}