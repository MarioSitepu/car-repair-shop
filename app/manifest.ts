import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bengkel Sitepu | Servis Mobil Terpercaya',
    short_name: 'Bengkel Sitepu',
    description: 'Bengkel Sitepu menyediakan layanan servis mobil berkualitas dengan mekanik ahli.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
