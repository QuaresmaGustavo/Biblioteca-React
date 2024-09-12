import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import Buscar from './InputPesquisar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Cabecalho({setValorPesquisado}) {

  const role = sessionStorage.getItem('role')
  const navegation = useNavigate();

  const navegacao = [
    { name: 'Home', href: '' },
    (role === "FUNCIONARIO") ? { name: 'Administrador', href: 'admin' } : null,
  ].filter(Boolean); 

  function sair() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    navegation("/");
  }

  return (
    <Disclosure as="nav" className="bg-blue-300 fixed inset-x-0 top-0 z-50">
      <div className="mx-32 max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Logo_icon"
                src="https://cdn-icons-png.flaticon.com/512/2784/2784504.png"
                className="h-8 w-auto"
              />
            </div>
            <div className="w-full sm:ml-6 flex items-center">
              <div className="flex space-x-4">
                {navegacao.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-blue-500 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium text-black'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Buscar setValorPesquisado={setValorPesquisado}/>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex  bg-blue-300 text-sm focus:outline-none  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Abrir menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>

                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <button onClick={sair} className="w-full block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    sair
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
