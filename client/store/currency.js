export const state = () => ({
  currencies: [
    { slug: 'uah', format: 'uk-UA', name: 'грн', isActive: true, rate: 1 },
    {
      slug: 'usd',
      format: 'en-US',
      name: 'usd',
      isActive: false,
      rate: 0.036
    },
    {
      slug: 'eur',
      format: 'de-DE',
      name: 'евро',
      isActive: false,
      rate: 0.029
    }
  ]
})
export const getters = {
  currencies: ({ currencies }) => currencies
}
