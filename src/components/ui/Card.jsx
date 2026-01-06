import React from 'react'

const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses = `corporate-card ${hover ? 'hover:shadow-xl hover:transform hover:scale-105' : ''}`
  
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`mb-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h3 className={`heading-3 mb-4 ${className}`} {...props}>
      {children}
    </h3>
  )
}

const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`text-corporate ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`mt-6 pt-6 border-t border-gray-100 ${className}`} {...props}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Title = CardTitle
Card.Content = CardContent
Card.Footer = CardFooter

export default Card
