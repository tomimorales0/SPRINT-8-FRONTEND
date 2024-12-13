"use client"
import React, { useState } from 'react';
import Simulacion from './simulador';
import LoanForm from './loanform';
import CurrencyConverter from './convertidor';

export default function Facturaciones() {


  return (
    <div className='min-h-screen rounded-lg bg-gray-50 p-6'>
       
      <Simulacion/>
      <LoanForm/>
      <CurrencyConverter/>
    </div>
  )};