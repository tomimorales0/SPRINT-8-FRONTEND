"use client"
import React, { useState } from 'react';
import Simulacion from './simulador';
export default function Facturaciones() {


  return (
    <div className='min-h-screen rounded-lg bg-gray-50 p-6'>
       
       <Simulacion/>
      
      
          <section>
            <div className="flex flex-col">
              <div className="">
                <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-xl text-black">
                    Pedir prestamo
                  </h1>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 justify-center">
                  
                  <form
                    className="space-y-4 md:space-y-6"
                    id="hi-pedir-prestamo"
                  >
                    <div className="">
                      <label
                        htmlFor="cuenta-destino"
                        className="block mb-2 text-sm font-medium  text-white"
                      >
                        Cuenta destino
                      </label>
                      <div className="mt-2">
                        <select
                          id="cuenta-destino"
                          name="cuenta-destino"
                          autoComplete="cuenta-destino"
                          required
                          className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 bg-gray-700 text-white"
                        >
                          <option
                            selected
                            value="nada"
                          >
                            Selecciona cuenta destino
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="cantidad-cuotas"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Cuotas
                      </label>
                      <div className="mt-2">
                        <select
                          id="cantidad-cuotas"
                          name="cantidad-cuotas"
                          autoComplete="cantidad-cuotas"
                          required
                          className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 bg-gray-700 text-white"
                        >
                          <option
                            selected
                            value="nada"
                          >
                            Selecciona cuotas
                          </option>
                          <option value="3">3</option>
                          <option value="6">6</option>
                          <option value="9">9</option>
                          <option value="12">12</option>
                          <option value="24">24</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="amount-prestamo"
                        className="block mb-2 text-sm font-medium  text-white"
                      >
                        Monto a solicitar
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          name="amount-prestamo"
                          id="amount-prestamo"
                          required
                          autoComplete="off"
                          className="block w-full rounded-md border-0 py-1.5 pl-7
                            pr-20 text-gray-900 text-white bg-gray-700
                            ring-gray-300 placeholder:text-gray-400 focus:ring-2
                            focus:ring-inset focus:ring-green-600 sm:text-sm
                            sm:leading-6"
                          placeholder="0.00"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <label
                            htmlFor="moneda-prestamo"
                            className="sr-only"
                          >
                            moneda-prestamo
                          </label>
                          <select
                            id="moneda-prestamo"
                            name="currency"
                            className="h-full rounded-md border-0 bg-transparent py-0 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm text-white bg-gray-700"
                          >
                            <option>ARS</option>
                            <option>USD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="w-full text-white bg-primary-600 hover:bg-primary-700 hover:ring-4 hover:ring-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
                      Realizar pedido
                    </button>
                  </form>
          
          </div>
          </div>
          </div>
          </section>
      </div>

    
  );
}
