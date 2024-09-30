import { Context } from '@nuxt/types';

export default function ({ redirect, $config }: Context) {
  if ($config.public.maintenanceMode === 'true') {
    return redirect('/maintenance');
  }
}
