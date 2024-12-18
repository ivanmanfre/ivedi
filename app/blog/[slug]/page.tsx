import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Calendar, User, Tag, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { BlogPost } from '@/types/blog'
import { getBlogPost } from '@/utils/markdown'

const inter = Inter({ subsets: ['latin'] })

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-pink-50 to-white ${inter.className}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold">IVEDI</span>
              </Link>
              <div className="hidden md:flex ml-10">
                <Link href="/blog" className="text-white hover:text-pink-200 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out">
                  Blog
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Button className="bg-white text-pink-600 hover:bg-pink-100 text-sm font-medium px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Contacto
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Volver al Blog
        </Link>

        {post.coverImage && (
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={post.coverImage}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-pink-500" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-pink-500" />
              <span>{post.author}</span>
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm"
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </div>
              ))}
            </div>
          )}
        </header>

        <div 
          className="prose prose-pink max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/blog">
            <Button variant="outline" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
              ← Volver al Blog
            </Button>
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Sobre Nosotros</h3>
              <p className="text-sm">IVEDI es una agencia de marketing digital especializada en profesionales de la salud. Nuestro enfoque basado en resultados garantiza el crecimiento de tu práctica.</p>
            </div>
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Campañas de Ads</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Asistente Virtual IA</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Automatización de Marketing</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Gestión de Redes Sociales</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Blog</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Casos de Estudio</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Guías Gratuitas</Link></li>
                <li><Link href="#" className="hover:text-pink-400 transition duration-300">Webinars</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-pink-400 font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li>Email: info@IVEDI.com</li>
                <li>Teléfono: +34 900 123 456</li>
                <li>Dirección: Calle Principal 123, Madrid, España</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-2xl font-bold text-pink-400">IVEDI</span>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()}. Todos los derechos reservados por IVEDI
          </div>
        </div>
      </footer>
    </div>
  )
}

