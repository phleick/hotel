import { createRouter, createWebHistory } from 'vue-router';

import TelaPrincipal from '@/components/TelaPrincipal.vue';
import CadastroCliente from '@/components/CadastroCliente.vue';
import PainelAdmin from '@/components/PainelAdmin.vue';
import QuartosHotel from '@/components/QuartosHotel.vue';

const routes = [
  { path: '/', name: 'TelaPrincipal', component: TelaPrincipal },
  { path: '/cadastro-cliente', name: 'CadastroCliente', component: CadastroCliente },
  { path: '/painel-admin', name: 'PainelAdmin', component: PainelAdmin },
  { path: '/quartos-hotel', name: 'QuartosHotel', component: QuartosHotel }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;