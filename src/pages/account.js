import ProtectedRoute from '@/components/ProtectecedRoute'
import React from 'react'

const account = () => {
  return (
    <ProtectedRoute>
    <div>account</div>
    </ProtectedRoute>
  )
}

export default account