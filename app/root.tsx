import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { json } from '@remix-run/node'

import styles from './app.css'
import Navbar from './components/Navbar'
import { i18n } from './i18n.server'
import { useChangeLanguage } from 'remix-i18next'
import { useTranslation } from 'react-i18next'

type LoaderData = { locale: string }

export let loader: LoaderFunction = async ({ request }) => {
  let locale = await i18n.getLocale(request)
  return json<LoaderData>({ locale })
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export let handle = {
  // In the handle export, we could add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  i18n: ['translations', 'root'],
}

export default function App() {
  let { locale } = useLoaderData<LoaderData>()

  let { i18n } = useTranslation()

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale)

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
