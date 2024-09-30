import { Context } from '@nuxt/types'

export default function ({ redirect }: Context) {
  if (process.env.NUXT_PUBLIC_MAINTENANCE_MODE === 'true') {
    return redirect('/maintenance')
  }
}
