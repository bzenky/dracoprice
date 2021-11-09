export const { format: formatPrice } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const { format: formatDerby } = new Intl.NumberFormat('pt-BR')
