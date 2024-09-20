import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import linkLogin from '../login/page'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <CurrencyDollarIcon className="h-8 w-8 text-emerald-600 mr-2" />
          <span className="text-xl text-white font-bold">MyBank</span>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-white">Bienvenido,</span>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm font-medium"></span>
          </div>
          <Link href="/login">
          <button className="p-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
        </div>
      </div>
    </header>
  )
}