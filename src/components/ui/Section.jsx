import React from 'react'

const Section = ({ children, className = '', ...props }) => {
  return (
    <section className={`section-padding ${className}`} {...props}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}

const SectionHeader = ({ title, subtitle, centered = true, className = '' }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-corporate-red font-semibold mb-4 uppercase tracking-wide">
          {subtitle}
        </p>
      )}
      <h2 className="heading-2 mb-6">{title}</h2>
      {centered && <div className="divider"></div>}
    </div>
  )
}

Section.Header = SectionHeader

export default Section
