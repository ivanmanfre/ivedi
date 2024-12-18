import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-pink-200"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          {["Blog", "Casos de Estudio", "Cómo Funciona", "Sobre Nosotros"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-600 hover:text-pink-600 py-2 text-lg font-medium transition duration-150 ease-in-out"
            >
              {item}
            </Link>
          ))}
          <Button className="bg-pink-600 text-white hover:bg-pink-700 font-medium px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Contacto
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu

