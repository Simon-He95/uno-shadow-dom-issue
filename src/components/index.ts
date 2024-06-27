import { defineCustomElement } from 'vue';
import CompA from './CompA.vue';

export const compAElement = defineCustomElement(CompA);

export function register() {
  customElements.define('mqy-comp-a', compAElement);
}
